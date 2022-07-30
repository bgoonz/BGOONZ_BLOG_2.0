# -*- coding: utf-8 -*-
"""
OLX Challenge 2: Recommender System
"""

# # Finding Similar Movies
# We'll start by loading up the MovieLens dataset. Using Pandas, we can very quickly load the rows of the u.data and u.item files that we care about, and merge them together so we can work with movie names instead of ID's. (In a real production job, you'd stick with ID's and worry about the names at the display layer to make things more efficient. But this lets us understand what's going on better for now.)

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
#import re
#from datetime import datetime

r_cols = ['user_id', 'movie_id', 'rating']
ratings = pd.read_csv('C:/Users/xxx/DataScience-Python3_/ml-100k/u.data', sep='\t', names=r_cols, usecols=range(3), encoding="ISO-8859-1")

m_cols = ['movie_id', 'title', 'date']
movies = pd.read_csv('C:/Users/xxx/DataScience-Python3_/ml-100k/u.item', sep='|', names=m_cols, usecols=range(3), encoding="ISO-8859-1")

ratings = pd.merge(movies, ratings)
ratings.head()


# Data exploration

plt.hist(ratings['rating'])
ratings.groupby(['rating'])['user_id'].count()
# Most movies have 4 stars

plt.hist(ratings.groupby(['movie_id'])['movie_id'].count())
# The distribution of movie views shows that the starting movie_ids have more ratings then later movies.

plt.hist(ratings.groupby(['user_id'])['user_id'].count())
#we see that a small number of users has rated the most movies [following approx a power law model imo]

# MOD
#filter movies newer >= 1970
#ratings = ratings[ratings['title'].str.contains('19[789]\d', regex=True)]
##ratings = ratings[datetime.strptime(ratings['date'], '%Y').date() >= datetime.strptime('1977', '%Y').date()]

# Rating matrix representation
# The pivot_table function on a DataFrame will construct a user / movie rating matrix.
# Note that NaN indicates missing data - movies that specific users didn't rate.
movieRatings = ratings.pivot_table(index=['user_id'],columns=['title'],values='rating')
movieRatings.head()

# this does the same but creates a float matrix instead of a dataframe
n_users = ratings['user_id'].unique().shape[0]
print(str(n_users) + ' users')
n_items = ratings['movie_id'].unique().shape[0]
print(str(n_items) + ' movies')
movieRatingsZ = np.zeros((n_users, n_items))
for row in ratings.itertuples():
    movieRatingsZ[row[1]-1, row[4]-1] = row[5] #1:user_id, 4:movie_id, 5:rating

movieRatings.shape
movieRatingsZ.shape # has more columns?

# Let's determine the sparsity in the data
sparsity = float(len(movieRatingsZ.nonzero()[0])) # 0 is here not rated / missing.
sparsity /= (movieRatingsZ.shape[0] * movieRatingsZ.shape[1])
sparsity *= 100
print('Sparsity: {:4.2f}%'.format(sparsity))
#should be 6.30% - mine is 5.71% - that must be the reult of the initial merge of the two datasets..

# Item Based CF
# Let's extract a Series of users who rated Star Wars:
starWarsRatings = movieRatings['Star Wars (1977)']
starWarsRatings.head()

# Pandas' corrwith function makes it really easy to compute the pairwise correlation of Star Wars' vector of user rating with every other movie! After that, we'll drop any results that have no data, and construct a new DataFrame of movies and their correlation score (similarity) to Star Wars:
similarMovies = movieRatings.corrwith(starWarsRatings)
similarMovies = similarMovies.dropna()
df = pd.DataFrame(similarMovies)
df.head(10)

# (That warning is safe to ignore.) Let's sort the results by similarity score, and we should have the movies most similar to Star Wars! Except... we don't. These results make no sense at all! This is why it's important to know your data - clearly we missed something important.
similarMovies.sort_values(ascending=False)

# Our results are probably getting messed up by movies that have only been viewed by a handful of people who also happened to like Star Wars. So we need to get rid of movies that were only watched by a few people that are producing spurious results. Let's construct a new DataFrame that counts up how many ratings exist for each movie, and also the average rating while we're at it - that could also come in handy later.

movieStats = ratings.groupby('title').agg({'rating': [np.size, np.mean]})
movieStats.head()

# Let's get rid of any movies rated by fewer than 100 people, and check the top-rated ones that are left:    
popularMovies = movieStats['rating']['size'] >= 150
movieStats[popularMovies].sort_values([('rating', 'mean')], ascending=False)[:15]

#re.search(r'\((\d{4})\)', movieStats['rating']['title'])
#newerpopularMovies = re.search(r'\((\d{4})\)', movieStats['rating']['title'])[1]

# 100 might still be too low, but these results look pretty good as far as "well rated movies that people have heard of." Let's join this data with our original set of similar movies to Star Wars:
df = movieStats[popularMovies].join(pd.DataFrame(similarMovies, columns=['similarity']))
df.head()

# And, sort these new results by similarity score. That's more like it!
df.sort_values(['similarity'], ascending=False)[1:26]
# Ideally we'd also filter out the movie we started from - of course Star Wars is 100% similar to itself. But otherwise these results aren't bad.

# ## Activity
# 100 was an arbitrarily chosen cutoff. Try different values - what effect does it have on the end results?


# UBCF

# this does the same but creates a float matrix instead of a dataframe
n_users = ratings['user_id'].unique().shape[0]
print(str(n_users) + ' users')
n_items = ratings['movie_id'].unique().shape[0]
print(str(n_items) + ' movies')
movieRatingsZ = np.zeros((n_users, n_items))
for row in ratings.itertuples():
    movieRatingsZ[row[1]-1, row[4]-1] = row[5] #1:user_id, 4:movie_id, 5:rating

movieRatings.shape
movieRatingsZ.shape # has more columns?

import sklearn
from sklearn.cross_validation import train_test_split
ratings_train, ratings_test = train_test_split(movieRatingsZ,test_size=0.33, random_state=42)
#Let's see the dimensions of the train set and the test set:
ratings_train.shape
ratings_test.shape

# create pairwise similarity calculations for each user in the rating matrix,
#so, we have to calculate the similarity of each user with all the other users.

# passing the ratings_train set to cosine_distances creates a distances matrix
dist_out = 1- sklearn.metrics.pairwise.cosine_distances(ratings_train)
#the dimensions of the distance matris is a square matrix of size equal to the number of users
dist_out.shape

# Predict the unknown ratings for an active user
#unknown values can be calculated for all the users by taking the dot product 
#between the distance matrix and the rating matrix and then normalizing the
#data with the number of ratings 
user_pred = dist_out.dot(ratings_train) / np.array([np.abs(dist_out).sum(axis=1)]).T


from sklearn.metrics import mean_squared_error
def get_mse(pred, actual):
    #Ignore nonzero terms.
    pred = pred[actual.nonzero()].flatten()
    actual = actual[actual.nonzero()].flatten()
    return mean_squared_error(pred, actual)

get_mse(user_pred, ratings_train) #~8.0 accuracy
get_mse(user_pred, ratings_test) #~9.0 accuracy


# use k-nearest neighbors instead
from sklearn.neighbors import NearestNeighbors
#lets compute the top five similar users by setting a variable, k.
k=5
neigh = NearestNeighbors(k,'cosine')
neigh.fit(ratings_train)
top_k_distances,top_k_users = neigh.kneighbors(ratings_train,
return_distance=True)
                                               
#Let's see the top five users that are similar to user 1 in the training set:
top_k_users[0]
a_user_ratings = ratings[ratings['user_id'].isin([0])]

top_k_user_ratings = ratings[ratings['user_id'].isin([253, 134,  43, 602])]
top_k_user_stats = top_k_user_ratings.groupby('title').agg({'rating': [np.size, np.mean]})
top_k_user_stats.head()
'list(top_k_user_stats.columns.values) #get the column names
df1 = df.assign(top_k_user_stats=df[('rating', 'mean')] * top_k_user_stats[('rating', 'size')] / k)
#list(df1.columns.values) #get the column names
df2 = df1.sort_values([('top_k_user_stats', ''), ('rating', 'mean'),('rating', 'size')], ascending=False)
df3 = df2[df2[('rating', 'mean')] >= 4.2]
df3.head()

#Now choose only the top  users for each user and use their rating #information
#while predicting the ratings using the weighted sum of all of the ratings of these top  similar users.
user_pred_k = np.zeros(ratings_train.shape)
for i in range(ratings_train.shape[0]):
    user_pred_k[i,:] = top_k_distances[i].T.dot(ratings_train[top_k_users][i]) / np.array([np.abs(top_k_distances[i].T).sum(axis=0)]).T

user_pred_k
# Now let's see if the model has improved or not.
get_mse(user_pred_k, ratings_train) #~8.0
get_mse(user_pred_k, ratings_test) #~12.0

# -*- coding: utf-8 -*-
"""

"""

import numpy as np
import pandas as pd

np_arr = np.random.rand(3)
pd_series = pd.Series(np_arr, index=["First", "Second", "Third"])
arr_2d = np.random.rand(3, 2)
arr_2d[0, 0]
arr_2d[2, 1]

df = pd.DataFrame(arr_2d)
df.columns

df.columns = ["First", "Second"]
df["Second"]

import pandas as pd
import os

# 1 Reading data
# 1.1 reading from a CSV

CSV_PATH = os.path.join(".", "artwork_data.csv")
# specify existing id column as index colum
# df = pd.read_csv(CSV_PATH, nrows=5, #only read first 5 rows
#                 index_col='id')

COLS_TO_USE = [
    "id",
    "artist",
    "title",
    "medium",
    "year",
    "acquisitionYear",
    "height",
    "width",
    "units",
]

df = pd.read_csv(CSV_PATH, index_col="id", usecols=COLS_TO_USE)

df.to_pickle(".\\artwork_data_cols.pickle")


# 1.2 reading from an array record
# example usage of from_recors method
records = [("Espresso", "$5"), ("Flat White", "$10")]
# pd.DataFrame.from_records(records)
pd.DataFrame.from_records(records, columns=["Coffee", "Price"])

# 1.3 reading from a JSON
import json

KEYS_TO_USE = [
    "id",
    "all_artists",
    "title",
    "medium",
    "dateText",
    "acquisitionYear",
    "height",
    "width",
    "units",
]
""" Process single json file and return a tuple containing specific fields """


def get_record_from_file(file_path, keys_to_use):
    with open(file_path) as artwork_file:
        content = json.load(artwork_file)

    record = []
    for field in keys_to_use:
        record.append(content[field])

    return tuple(record)


# Single file processing function demo
# SAMPLE_JSON = os.path.join('.','artworks','a','000','a00001-1035.json')
# single_record = get_record_from_file(SAMPLE_JSON, KEYS_TO_USE)

# 1.3.1 reading from JSON traversing directories


def read_artworks_from_json(keys_to_use):
    ROOT_DIR = os.path.join(".", "artworks")
    artworks = []
    for root, _, files in os.walk(ROOT_DIR):
        for f in files:
            if f.endswith("json"):
                record = get_record_from_file(os.path.join(root, f), keys_to_use)
                artworks.append(record)
            break  # only first file in each directory to safe time

    df = pd.DataFrame.from_records(artworks, columns=keys_to_use, index="id")
    return df


df2 = read_artworks_from_json(KEYS_TO_USE)

# 2 Analyze sample data
# 2.1 Column selection
df["artist"]
# df.artist # works but it is discuraged to us this
df[["artist", "title"]]
# 2.1.1 Sample: Number of unique artists in tate data

df = pd.read_pickle(".\\artwork_data_cols.pickle")
#
artists = df["artist"]
pd.unique(artists)
len(pd.unique(artists))

# 2.2 Filtering : Artworks by specific artist
boolean_series = df["artist"] == "Bacon, Francis"
boolean_series.value_counts()
# or couting and then filtering
artist_counts = df["artist"].value_counts()
artist_counts["Bacon, Francis"]

# 2.3 Indexing done right
# using loc and iloc: Lables vs positions
# df.loc[Row_index, Column_indexer]
df.loc[df["artist"] == "Bacon, Francis", :]  # : represents wildcard column
df.iloc[100:300, [0, 1, 4]]

# 2.3 Sample: Find biggest artwork by area (h*w)

# Quic data inspection reveals common problems like missing data
df["width"].sort_values().head()
df["height"].sort_values().tail()

# Try to conver
pd.to_numeric(df["width"])
# Force NaNs
pd.to_numeric(df["width"], errors="coerce")
# replaced width/height column with cleaned data
df.loc[:, "width"] = pd.to_numeric(df["width"], errors="coerce")
df.loc[:, "height"] = pd.to_numeric(df["height"], errors="coerce")
# calculate area
area = df["height"] * df["width"]
# assign new column to DataFrame
df = df.assign(area=area)
# find biggest area
df["area"].max()
df["area"].idxmax()  # 98367
df.loc[df["area"].idxmax(), :]  # Table and Four Chairs

# Operations on Groups
df.groupby("artist")
# Aggregation, Transformation, Filter (Dropping)
small_df = df.iloc[49980:50019, :].copy()
grouped = small_df.groupby("artist")

for name, group_df in grouped:
    print(name)
    print(group_df)
    break

# Aggregate Example: Min Year by each artist

for name, group_df in grouped:
    min_year = group_df["acquisitionYear"].min()
    print("{} {}".format(name, min_year))

# Transform: Input missing values


def fill_values(series):
    values_counted = series.value_counts()
    if values_counted.empty:  # why is this a property instead of a method?
        return series
    most_frequent = values_counted.index[0]
    filled_medium = series.fillna(most_frequent)
    return filled_medium


def transform_df(source_df):
    results = []
    for name, group_df in source_df.groupby("artist"):
        filled_df = group_df.copy()
        filled_df.loc[:, "medium"] = fill_values(group_df["medium"])
        results.append(filled_df)

    new_df = pd.concat(results)
    return new_df


# check results
filled_df = transform_df(small_df)

# 3 Better and more concise way using built-in methods
# 3.1 transform
grouped_medium = df.groupby("artist")["medium"]
df.loc[:, "medium"] = grouped_medium.transform(fill_values)
# 3.2 Aggregate
grouped_acq_year = df.groupby("artist")["acquisitionYear"]
min_acq_years = grouped_acq_year.agg(np.min)
min_acq_years = grouped_acq_year.min()
# 3.3 Filtering
grouped_titles = df.groupby("title")
title_counts = grouped_titles.size().sort_values(ascending=False)

condition = lambda x: len(x.index) > 1
dup_titles_df = grouped_titles.filter(condition)
dup_titles_df.sort_values("title", inplace=True)
# Final Demo

# 4 Outputting Data
# 4.1 Outputting Data as Excell XLS
small_df.to_excel("basic.xlsx")
small_df.to_excel("no_index.xlsx", index=False)
small_df.to_excel("columns.xlsx", columns=["artist", "title", "year"])
# Multiple worksheets
writer = pd.ExcelWriter("multi_sheets.xlsx", engine="xlsxwriter")
small_df.to_excel(writer, sheet_name="Preview", index=False)
df.to_excel(writer, sheet_name="Complete", index=False)
writer.save()
# Conditional Formatting
artist_counts = df["artist"].value_counts()
artist_counts.head()
writer = pd.ExcelWriter("colors.xlsx", engine="xlsxwriter")
artist_counts.to_excel(writer, sheet_name="Artist Counts")
sheet = writer.sheets["Artist Counts"]
cells_range = "B2:B{}".format(len(artist_counts.index))
sheet.conditional_format(
    cells_range,
    {
        "type": "2_color_scale",
        "min_value": "10",
        "min_type": "percentile",
        "max_value": "99",
        "max_type": "percentile",
    },
)
writer.save()

# 4.2 Outputting Data to a relational DB
import sqlite3

with sqlite3.connect("my_database.db") as conn:
    small_df.to_sql("Tate", conn)

import sqlalchemy as sa

with sa.create_engine("postgresql://localhost/my_data") as conn:
    small_df.to_sql("Tate", conn)

# 4.2 Outputting Data as JSON
small_df.to_json("default.json")
small_df.to_json("default.json", orient="table")

# 5 Visualization: Plotting with matplotlib

import pandas as pd

df = pd.read_pickle(".\\artwork_data_cols.pickle")
# Simplest default plot
acq_years = df.groupby("acquisitionYear").size()
acq_years.plot()

# Formatting our plot using Matplotlib
import matplotlib.pyplot as plt
from matplotlib import rcParams

rcParams.update({"figure.autolayout": True, "axes.titlepad": 20})

title_font = {
    "family": "source sans pro",
    "color": "darkblue",
    "weight": "normal",
    "size": 20,
}
labels_font = {"family": "consolas", "color": "darkred", "weight": "normal", "size": 16}
f = plt.figure()
subplot = f.add_subplot(1, 1, 1)
acq_years.plot(ax=subplot, rot=90, logy=True, grid=True)
subplot.set_xlabel("Acquistion Year", fontdict=labels_font, labelpad=10)
subplot.set_ylabel("Artworks Aquired", fontdict=labels_font)
subplot.set_title("Tate Gallery Aquisitions", fontdict=title_font)
subplot.locator_params(nbins=40, axis="x")
f.show()

f.savefig("plot.png")
f.savefig("plotylog.svg", format="svg")

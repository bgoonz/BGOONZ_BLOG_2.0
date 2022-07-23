# -*- coding: utf-8 -*-
"""
Created on Sun Jan 14 21:42:17 2018
SO Stemmer Q?
@author: me
"""

import warnings

warnings.filterwarnings(action="ignore", category=UserWarning, module="gensim")
from nltk.tokenize import RegexpTokenizer

# from stop_words import get_stop_words
from nltk.stem.porter import PorterStemmer
from gensim import corpora, models

import gensim
import string

tokenizer = RegexpTokenizer(r"\w+")


# en_stop = get_stop_words('en')
en_stop = [
    "a",
    "about",
    "above",
    "above",
    "across",
    "after",
    "afterwards",
    "again",
    "against",
    "all",
    "almost",
    "alone",
    "along",
    "already",
    "also",
    "although",
    "always",
    "am",
    "among",
    "amongst",
    "amoungst",
    "amount",
    "an",
    "and",
    "another",
    "any",
    "anyhow",
    "anyone",
    "anything",
    "anyway",
    "anywhere",
    "are",
    "around",
    "as",
    "at",
    "back",
    "be",
    "became",
    "because",
    "become",
    "becomes",
    "becoming",
    "been",
    "before",
    "beforehand",
    "behind",
    "being",
    "below",
    "beside",
    "besides",
    "between",
    "beyond",
    "bill",
    "both",
    "bottom",
    "but",
    "by",
    "call",
    "can",
    "cannot",
    "cant",
    "co",
    "con",
    "could",
    "couldnt",
    "cry",
    "de",
    "describe",
    "detail",
    "do",
    "done",
    "down",
    "due",
    "during",
    "each",
    "eg",
    "eight",
    "either",
    "eleven",
    "else",
    "elsewhere",
    "empty",
    "enough",
    "etc",
    "even",
    "ever",
    "every",
    "everyone",
    "everything",
    "everywhere",
    "except",
    "few",
    "fifteen",
    "fify",
    "fill",
    "find",
    "fire",
    "first",
    "five",
    "for",
    "former",
    "formerly",
    "forty",
    "found",
    "four",
    "from",
    "front",
    "full",
    "further",
    "get",
    "give",
    "go",
    "had",
    "has",
    "hasnt",
    "have",
    "he",
    "hence",
    "her",
    "here",
    "hereafter",
    "hereby",
    "herein",
    "hereupon",
    "hers",
    "herself",
    "him",
    "himself",
    "his",
    "how",
    "however",
    "hundred",
    "ie",
    "if",
    "in",
    "inc",
    "indeed",
    "interest",
    "into",
    "is",
    "it",
    "its",
    "itself",
    "keep",
    "last",
    "latter",
    "latterly",
    "least",
    "less",
    "ltd",
    "made",
    "many",
    "may",
    "me",
    "meanwhile",
    "might",
    "mill",
    "mine",
    "more",
    "moreover",
    "most",
    "mostly",
    "move",
    "much",
    "must",
    "my",
    "myself",
    "name",
    "namely",
    "neither",
    "never",
    "nevertheless",
    "next",
    "nine",
    "no",
    "nobody",
    "none",
    "noone",
    "nor",
    "not",
    "nothing",
    "now",
    "nowhere",
    "of",
    "off",
    "often",
    "on",
    "once",
    "one",
    "only",
    "onto",
    "or",
    "other",
    "others",
    "otherwise",
    "our",
    "ours",
    "ourselves",
    "out",
    "over",
    "own",
    "part",
    "per",
    "perhaps",
    "please",
    "put",
    "rather",
    "re",
    "same",
    "see",
    "seem",
    "seemed",
    "seeming",
    "seems",
    "serious",
    "several",
    "she",
    "should",
    "show",
    "side",
    "since",
    "sincere",
    "six",
    "sixty",
    "so",
    "some",
    "somehow",
    "someone",
    "something",
    "sometime",
    "sometimes",
    "somewhere",
    "still",
    "such",
    "system",
    "take",
    "ten",
    "than",
    "that",
    "the",
    "their",
    "them",
    "themselves",
    "then",
    "thence",
    "there",
    "thereafter",
    "thereby",
    "therefore",
    "therein",
    "thereupon",
    "these",
    "they",
    "thickv",
    "thin",
    "third",
    "this",
    "those",
    "though",
    "three",
    "through",
    "throughout",
    "thru",
    "thus",
    "to",
    "together",
    "too",
    "top",
    "toward",
    "towards",
    "twelve",
    "twenty",
    "two",
    "un",
    "under",
    "until",
    "up",
    "upon",
    "us",
    "very",
    "via",
    "was",
    "we",
    "well",
    "were",
    "what",
    "whatever",
    "when",
    "whence",
    "whenever",
    "where",
    "whereafter",
    "whereas",
    "whereby",
    "wherein",
    "whereupon",
    "wherever",
    "whether",
    "which",
    "while",
    "whither",
    "who",
    "whoever",
    "whole",
    "whom",
    "whose",
    "why",
    "will",
    "with",
    "within",
    "without",
    "would",
    "yet",
    "you",
    "your",
    "yours",
    "yourself",
    "yourselves",
    "the",
]


p_stemmer = PorterStemmer()

doc_a = """It might seem crazy what I’m about to say
Sunshine she's here, you can take a break
I'm a hot air balloon that could go to space
With the air, like I don't care baby by the way
Uh huh because I'm happy
Clap along if you feel like a room without a roof
Because I'm happy
Clap along if you feel like happiness is a truth
Because I'm happy
Clap along if you know what happiness is to you
Because I’m happy
Clap along if you feel like that’s what you wanna do
Here come bad news, talking this and that
Yeah, give me all you got, don't hold back
Yeah, well I should probably warn you I'll be just fine
Yeah, no offense to you, don’t waste your time
Here’s why
Because I'm happy
Clap along if you feel like a room without a roof
Because I'm happy
Clap along if you feel like happiness is a truth
Because I'm happy
Clap along if you know what happiness is to you
Because I'm happy
Clap along if you feel like that's what you wanna do
Happy, bring me down, can't nuthin'
Happy, bring me down, 
My level is too high, to bring me down
Can't nuthin', bring me down
I said, let me tell you 'bout, unh
Bring me down, can't nuthin', bring me down
My level is too high to bring me down
Can't nuthin' bring me down
I said
Because I'm happy
Clap along if you feel like a room without a roof
Because I'm happy
Clap along if you feel like happiness is a truth
Because I'm happy
Clap along if you know what happiness is to you
Because I'm happy
Clap along if you feel like that's what you wanna do
Because I'm happy
Clap along if you feel like a room without a roof
Because I'm happy
Clap along if you feel like happiness is a truth
Because I'm happy
Clap along if you know what happiness is to you
Because I'm happy
Clap along if you feel like that's what you wanna do
Bring me down can't nuthin'
Bring me down my level is too high
Bring me down can't nuthin'
Bring me down, I said 
Because I'm happy
Clap along if you feel like a room without a roof
Because I'm happy
Clap along if you feel like happiness is a truth
Because I'm happy
Clap along if you know what happiness is to you, eh eh eh
Because I'm happy
Clap along if you feel like that's what you wanna do
Because I'm happy
Clap along if you feel like a room without a roof
Because I'm happy
Clap along if you feel like happiness is a truth
Because I'm happy
Clap along if you know what happiness is to you, eh hey
Because I'm happy
Clap along if you feel like that's what you wanna do"""

doc_set = [doc_a]
texts = []
for i in doc_set:

    raw = i.lower()
    tokens = tokenizer.tokenize(raw)

    stopped_tokens = [i for i in tokens if not i in en_stop]

    stemmed_tokens = [p_stemmer.stem(i) for i in stopped_tokens]

    texts.append(stemmed_tokens)

dictionary = corpora.Dictionary(texts)
print(dictionary)

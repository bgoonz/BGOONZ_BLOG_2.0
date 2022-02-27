
# The Anatomy of a Search Engine

> ## Excerpt
> These tasks are becoming increasingly difficult as the Web grows. However,
hardware performance and cost have improved dramatically to partially offset
the difficulty. There are, however, several notable exceptions to this
progress such as disk seek time and operating system robustness. In designing
Google, we have considered both the rate of growth of the Web and technological
changes. Google is designed to scale well to extremely large data sets.
It makes efficient use of storage space to store the index. Its data structures
are optimized for fast and efficient access (see section 4.2).
Further, we expect that the cost to index and store text or HTML will eventually
decline relative to the amount that will be available (see Appendix
B). This will result in favorable scaling properties for centralized
systems like Google.

---
**Sergey Brin and Lawrence Page**

{sergey, page}@cs.stanford.edu

Computer Science Department, Stanford University, Stanford, CA 94305

### Abstract

>        In this paper, we present Google, a prototype of a large-scale search engine which makes heavy use of the structure present in hypertext. Google is designed to crawl and index the Web efficiently and produce much more satisfying search results than existing systems. The prototype with a full text and hyperlink database of at least 24 million pages is available at [http://google.stanford.edu/](http://google.stanford.edu/)  
>        To engineer a search engine is a challenging task. Search engines index tens to hundreds of millions of web pages involving a comparable number of distinct terms. They answer tens of millions of queries every day. Despite the importance of large-scale search engines on the web, very little academic research has been done on them. Furthermore, due to rapid advance in technology and web proliferation, creating a web search engine today is very different from three years ago. This paper provides an in-depth description of our large-scale web search engine -- the first such detailed public description we know of to date.  
>        Apart from the problems of scaling traditional search techniques to data of this magnitude, there are new technical challenges involved with using the additional information present in hypertext to produce better search results. This paper addresses this question of how to build a practical large-scale system which can exploit the additional information present in hypertext. Also we look at the problem of how to effectively deal with uncontrolled hypertext collections where anyone can publish anything they want.
> 
>  **Keywords**: World Wide Web, Search Engines, Information Retrieval, PageRank, Google

## 1\. Introduction

_(Note: There are two versions of this paper -- a longer full version and a shorter printed version. The full version is available on the web and the conference CD-ROM.)_  
The web creates new challenges for information retrieval. The amount of information on the web is growing rapidly, as well as the number of new users inexperienced in the art of web research. People are likely to surf the web using its link graph, often starting with high quality human maintained indices such as [Yahoo!](http://www.yahoo.com/) or with search engines. Human maintained lists cover popular topics effectively but are subjective, expensive to build and maintain, slow to improve, and cannot cover all esoteric topics. Automated search engines that rely on keyword matching usually return too many low quality matches. To make matters worse, some advertisers attempt to gain people's attention by taking measures meant to mislead automated search engines. We have built a large-scale search engine which addresses many of the problems of existing systems. It makes especially heavy use of the additional structure present in hypertext to provide much higher quality search results. We chose our system name, Google, because it is a common spelling of googol, or 10100 and fits well with our goal of building very large-scale search engines.

### 1.1 Web Search Engines -- Scaling Up: 1994 - 2000

Search engine technology has had to scale dramatically to keep up with the growth of the web. In 1994, one of the first web search engines, the World Wide Web Worm (WWWW) [\[McBryan 94\]](http://www.cs.colorado.edu/home/mcbryan/mypapers/www94.ps) had an index of 110,000 web pages and web accessible documents. As of November, 1997, the top search engines claim to index from 2 million (WebCrawler) to 100 million web documents (from [Search Engine Watch)](http://www.searchenginewatch.com/). It is foreseeable that by the year 2000, a comprehensive index of the Web will contain over a billion documents. At the same time, the number of queries search engines handle has grown incredibly too. In March and April 1994, the World Wide Web Worm received an average of about 1500 queries per day. In November 1997, Altavista claimed it handled roughly 20 million queries per day. With the increasing number of users on the web, and automated systems which query search engines, it is likely that top search engines will handle hundreds of millions of queries per day by the year 2000. The goal of our system is to address many of the problems, both in quality and scalability, introduced by scaling search engine technology to such extraordinary numbers.

### 1.2. Google: Scaling with the Web

Creating a search engine which scales even to today's web presents many challenges. Fast crawling technology is needed to gather the web documents and keep them up to date. Storage space must be used efficiently to store indices and, optionally, the documents themselves. The indexing system must process hundreds of gigabytes of data efficiently. Queries must be handled quickly, at a rate of hundreds to thousands per second.

These tasks are becoming increasingly difficult as the Web grows. However, hardware performance and cost have improved dramatically to partially offset the difficulty. There are, however, several notable exceptions to this progress such as disk seek time and operating system robustness. In designing Google, we have considered both the rate of growth of the Web and technological changes. Google is designed to scale well to extremely large data sets. It makes efficient use of storage space to store the index. Its data structures are optimized for fast and efficient access (see section [4.2](http://infolab.stanford.edu/~backrub/google.html#data)). Further, we expect that the cost to index and store text or HTML will eventually decline relative to the amount that will be available (see [Appendix B](http://infolab.stanford.edu/~backrub/google.html#b)). This will result in favorable scaling properties for centralized systems like Google.

### 1.3 Design Goals

#### 1.3.1 Improved Search Quality

Our main goal is to improve the quality of web search engines. In 1994, some people believed that a complete search index would make it possible to find anything easily. According to [Best of the Web 1994 -- Navigators,](http://botw.org/1994/awards/navigators.html)  "The best navigation service should make it easy to find almost anything on the Web (once all the data is entered)."  However, the Web of 1997 is quite different. Anyone who has used a search engine recently, can readily testify that the completeness of the index is not the only factor in the quality of search results. "Junk results" often wash out any results that a user is interested in. In fact, as of November 1997, only one of the top four commercial search engines finds itself (returns its own search page in response to its name in the top ten results). One of the main causes of this problem is that the number of documents in the indices has been increasing by many orders of magnitude, but the user's ability to look at documents has not. People are still only willing to look at the first few tens of results. Because of this, as the collection size grows, we need tools that have very high precision (number of relevant documents returned, say in the top tens of results). Indeed, we want our notion of "relevant" to only include the very best documents since there may be tens of thousands of slightly relevant documents. This very high precision is important even at the expense of recall (the total number of relevant documents the system is able to return). There is quite a bit of recent optimism that the use of more hypertextual information can help improve search and other applications \[[Marchiori 97](http://infolab.stanford.edu/~backrub/google.html#ref)\] \[[Spertus 97](http://infolab.stanford.edu/~backrub/google.html#ref)\] \[[Weiss 96](http://infolab.stanford.edu/~backrub/google.html#ref)\] \[[Kleinberg 98](http://infolab.stanford.edu/~backrub/google.html#ref)\]. In particular, link structure \[[Page 98](http://infolab.stanford.edu/~backrub/google.html#ref)\] and link text provide a lot of information for making relevance judgments and quality filtering. Google makes use of both link structure and anchor text (see Sections [2.1](http://infolab.stanford.edu/~backrub/google.html#pr) and [2.2](http://infolab.stanford.edu/~backrub/google.html#anchor)).

#### 1.3.2 Academic Search Engine Research

Aside from tremendous growth, the Web has also become increasingly commercial over time. In 1993, 1.5% of web servers were on .com domains. This number grew to over 60% in 1997. At the same time, search engines have migrated from the academic domain to the commercial. Up until now most search engine development has gone on at companies with little publication of technical details. This causes search engine technology to remain largely a black art and to be advertising oriented (see [Appendix A](http://infolab.stanford.edu/~backrub/google.html#a)). With Google, we have a strong goal to push more development and understanding into the academic realm.

Another important design goal was to build systems that reasonable numbers of people can actually use. Usage was important to us because we think some of the most interesting research will involve leveraging the vast amount of usage data that is available from modern web systems. For example, there are many tens of millions of searches performed every day. However, it is very difficult to get this data, mainly because it is considered commercially valuable.

Our final design goal was to build an architecture that can support novel research activities on large-scale web data. To support novel research uses, Google stores all of the actual documents it crawls in compressed form. One of our main goals in designing Google was to set up an environment where other researchers can come in quickly, process large chunks of the web, and produce interesting results that would have been very difficult to produce otherwise. In the short time the system has been up, there have already been several papers using databases generated by Google, and many others are underway. Another goal we have is to set up a Spacelab-like environment where researchers or even students can propose and do interesting experiments on our large-scale web data.

## 2\. System Features

The Google search engine has two important features that help it produce high precision results. First, it makes use of the link structure of the Web to calculate a quality ranking for each web page. This ranking is called PageRank and is described in detail in \[Page 98\]. Second, Google utilizes link to improve search results.

### 2.1 PageRank: Bringing Order to the Web

The citation (link) graph of the web is an important resource that has largely gone unused in existing web search engines. We have created maps containing as many as 518 million of these hyperlinks, a significant sample of the total. These maps allow rapid calculation of a web page's "PageRank", an objective measure of its citation importance that corresponds well with people's subjective idea of importance. Because of this correspondence, PageRank is an excellent way to prioritize the results of web keyword searches. For most popular subjects, a simple text matching search that is restricted to web page titles performs admirably when PageRank prioritizes the results (demo available at [google.stanford.edu](http://google.stanford.edu/)). For the type of full text searches in the main Google system, PageRank also helps a great deal.

#### 2.1.1 Description of PageRank Calculation

Academic citation literature has been applied to the web, largely by counting citations or backlinks to a given page. This gives some approximation of a page's importance or quality. PageRank extends this idea by not counting links from all pages equally, and by normalizing by the number of links on a page. PageRank is defined as follows:

> _We assume page A has pages T1...Tn which point to it (i.e., are citations). The parameter d is a damping factor which can be set between 0 and 1. We usually set d to 0.85. There are more details about d in the next section. Also C(A) is defined as the number of links going out of page A. The PageRank of a page A is given as follows:_
> 
> _PR(A) = (1-d) + d (PR(T1)/C(T1) + ... + PR(Tn)/C(Tn))_
> 
> _Note that the PageRanks form a probability distribution over web pages, so the sum of all web pages' PageRanks will be one._

PageRank or _PR(A)_ can be calculated using a simple iterative algorithm, and corresponds to the principal eigenvector of the normalized link matrix of the web. Also, a PageRank for 26 million web pages can be computed in a few hours on a medium size workstation. There are many other details which are beyond the scope of this paper.

#### 2.1.2 Intuitive Justification

PageRank can be thought of as a model of user behavior. We assume there is a "random surfer" who is given a web page at random and keeps clicking on links, never hitting "back" but eventually gets bored and starts on another random page. The probability that the random surfer visits a page is its PageRank. And, the _d_ damping factor is the probability at each page the "random surfer" will get bored and request another random page. One important variation is to only add the damping factor _d_ to a single page, or a group of pages. This allows for personalization and can make it nearly impossible to deliberately mislead the system in order to get a higher ranking. We have several other extensions to PageRank, again see \[[Page 98](http://infolab.stanford.edu/~backrub/google.html#ref)\].

Another intuitive justification is that a page can have a high PageRank if there are many pages that point to it, or if there are some pages that point to it and have a high PageRank. Intuitively, pages that are well cited from many places around the web are worth looking at. Also, pages that have perhaps only one citation from something like the [Yahoo!](http://www.yahoo.com/) homepage are also generally worth looking at. If a page was not high quality, or was a broken link, it is quite likely that Yahoo's homepage would not link to it. PageRank handles both these cases and everything in between by recursively propagating weights through the link structure of the web.

### 2.2 Anchor Text

The text of links is treated in a special way in our search engine. Most search engines associate the text of a link with the page that the link is on. In addition, we associate it with the page the link points to. This has several advantages. First, anchors often provide more accurate descriptions of web pages than the pages themselves. Second, anchors may exist for documents which cannot be indexed by a text-based search engine, such as images, programs, and databases. This makes it possible to return web pages which have not actually been crawled. Note that pages that have not been crawled can cause problems, since they are never checked for validity before being returned to the user. In this case, the search engine can even return a page that never actually existed, but had hyperlinks pointing to it. However, it is possible to sort the results, so that this particular problem rarely happens.

This idea of propagating anchor text to the page it refers to was implemented in the World Wide Web Worm \[[McBryan 94](http://infolab.stanford.edu/~backrub/google.html#ref)\] especially because it helps search non-text information, and expands the search coverage with fewer downloaded documents. We use anchor propagation mostly because anchor text can help provide better quality results. Using anchor text efficiently is technically difficult because of the large amounts of data which must be processed. In our current crawl of 24 million pages, we had over 259 million anchors which we indexed.

### 2.3 Other Features

Aside from PageRank and the use of anchor text, Google has several other features. First, it has location information for all hits and so it makes extensive use of proximity in search. Second, Google keeps track of some visual presentation details such as font size of words. Words in a larger or bolder font are weighted higher than other words. Third, full raw HTML of pages is available in a repository.

## 3 Related Work

Search research on the web has a short and concise history. The World Wide Web Worm (WWWW) [\[McBryan 94\]](http://www.cs.colorado.edu/home/mcbryan/mypapers/www94.ps) was one of the first web search engines. It was subsequently followed by several other academic search engines, many of which are now public companies. Compared to the growth of the Web and the importance of search engines there are precious few documents about recent search engines \[[Pinkerton 94](http://info.webcrawler.com/bp/WWW94.html)\]. According to Michael Mauldin (chief scientist, Lycos Inc) [\[Mauldin\]](http://www.computer.org/pubs/expert/1997/trends/x1008/mauldin.htm), "the various services (including Lycos) closely guard the details of these databases". However, there has been a fair amount of work on specific features of search engines. Especially well represented is work which can get results by post-processing the results of existing commercial search engines, or produce small scale "individualized" search engines. Finally, there has been a lot of research on information retrieval systems, especially on well controlled collections. In the next two sections, we discuss some areas where this research needs to be extended to work better on the web.

### 3.1 Information Retrieval

Work in information retrieval systems goes back many years and is well developed \[[Witten 94](http://infolab.stanford.edu/~backrub/google.html#ref)\]. However, most of the research on information retrieval systems is on small well controlled homogeneous collections such as collections of scientific papers or news stories on a related topic. Indeed, the primary benchmark for information retrieval, the Text Retrieval Conference \[[TREC 96](http://infolab.stanford.edu/~backrub/google.html#ref)\], uses a fairly small, well controlled collection for their benchmarks. The "Very Large Corpus" benchmark is only 20GB compared to the 147GB from our crawl of 24 million web pages. Things that work well on TREC often do not produce good results on the web. For example, the standard vector space model tries to return the document that most closely approximates the query, given that both query and document are vectors defined by their word occurrence. On the web, this strategy often returns very short documents that are the query plus a few words. For example, we have seen a major search engine return a page containing only "Bill Clinton Sucks" and picture from a "Bill Clinton" query. Some argue that on the web, users should specify more accurately what they want and add more words to their query. We disagree vehemently with this position. If a user issues a query like "Bill Clinton" they should get reasonable results since there is a enormous amount of high quality information available on this topic. Given examples like these, we believe that the standard information retrieval work needs to be extended to deal effectively with the web.

### 3.2 Differences Between the Web and Well Controlled Collections

The web is a vast collection of completely uncontrolled heterogeneous documents. Documents on the web have extreme variation internal to the documents, and also in the external meta information that might be available. For example, documents differ internally in their language (both human and programming), vocabulary (email addresses, links, zip codes, phone numbers, product numbers), type or format (text, HTML, PDF, images, sounds), and may even be machine generated (log files or output from a database). On the other hand, we define external meta information as information that can be inferred about a document, but is not contained within it. Examples of external meta information include things like reputation of the source, update frequency, quality, popularity or usage, and citations. Not only are the possible sources of external meta information varied, but the things that are being measured vary many orders of magnitude as well. For example, compare the usage information from a major homepage, like Yahoo's which currently receives millions of page views every day with an obscure historical article which might receive one view every ten years. Clearly, these two items must be treated very differently by a search engine.

Another big difference between the web and traditional well controlled collections is that there is virtually no control over what people can put on the web. Couple this flexibility to publish anything with the enormous influence of search engines to route traffic and companies which deliberately manipulating search engines for profit become a serious problem. This problem that has not been addressed in traditional closed information retrieval systems. Also, it is interesting to note that metadata efforts have largely failed with web search engines, because any text on the page which is not directly represented to the user is abused to manipulate search engines. There are even numerous companies which specialize in manipulating search engines for profit.

## 4 System Anatomy

First, we will provide a high level discussion of the architecture. Then, there is some in-depth descriptions of important data structures. Finally, the major applications: crawling, indexing, and searching will be examined in depth.

![](http://infolab.stanford.edu/~backrub/over.gif)

Figure 1. High Level Google Architecture

  

### 4.1 Google Architecture Overview

In this section, we will give a high level overview of how the whole system works as pictured in Figure 1. Further sections will discuss the applications and data structures not mentioned in this section. Most of Google is implemented in C or C++ for efficiency and can run in either Solaris or Linux.

In Google, the web crawling (downloading of web pages) is done by several distributed crawlers. There is a URLserver that sends lists of URLs to be fetched to the crawlers. The web pages that are fetched are then sent to the storeserver. The storeserver then compresses and stores the web pages into a repository. Every web page has an associated ID number called a docID which is assigned whenever a new URL is parsed out of a web page. The indexing function is performed by the indexer and the sorter. The indexer performs a number of functions. It reads the repository, uncompresses the documents, and parses them. Each document is converted into a set of word occurrences called hits. The hits record the word, position in document, an approximation of font size, and capitalization. The indexer distributes these hits into a set of "barrels", creating a partially sorted forward index. The indexer performs another important function. It parses out all the links in every web page and stores important information about them in an anchors file. This file contains enough information to determine where each link points from and to, and the text of the link.

The URLresolver reads the anchors file and converts relative URLs into absolute URLs and in turn into docIDs. It puts the anchor text into the forward index, associated with the docID that the anchor points to. It also generates a database of links which are pairs of docIDs. The links database is used to compute PageRanks for all the documents.

The sorter takes the barrels, which are sorted by docID (this is a simplification, see [Section 4.2.5](http://infolab.stanford.edu/~backrub/google.html#hits)), and resorts them by wordID to generate the inverted index. This is done in place so that little temporary space is needed for this operation. The sorter also produces a list of wordIDs and offsets into the inverted index. A program called DumpLexicon takes this list together with the lexicon produced by the indexer and generates a new lexicon to be used by the searcher. The searcher is run by a web server and uses the lexicon built by DumpLexicon together with the inverted index and the PageRanks to answer queries.

### 4.2 Major Data Structures

Google's data structures are optimized so that a large document collection can be crawled, indexed, and searched with little cost. Although, CPUs and bulk input output rates have improved dramatically over the years, a disk seek still requires about 10 ms to complete. Google is designed to avoid disk seeks whenever possible, and this has had a considerable influence on the design of the data structures.

#### 4.2.1 BigFiles

BigFiles are virtual files spanning multiple file systems and are addressable by 64 bit integers. The allocation among multiple file systems is handled automatically. The BigFiles package also handles allocation and deallocation of file descriptors, since the operating systems do not provide enough for our needs. BigFiles also support rudimentary compression options.

#### 4.2.2 Repository

  

![](http://infolab.stanford.edu/~backrub/repos.gif)

Figure 2. Repository Data Structure

The repository contains the full HTML of every web page. Each page is compressed using zlib (see [RFC1950](ftp://ftp.uu.net/graphics/png/documents/zlib/zdoc-index.html)). The choice of compression technique is a tradeoff between speed and compression ratio. We chose zlib's speed over a significant improvement in compression offered by [bzip](http://www.muraroa.demon.co.uk/). The compression rate of bzip was approximately 4 to 1 on the repository as compared to zlib's 3 to 1 compression. In the repository, the documents are stored one after the other and are prefixed by docID, length, and URL as can be seen in Figure 2. The repository requires no other data structures to be used in order to access it. This helps with data consistency and makes development much easier; we can rebuild all the other data structures from only the repository and a file which lists crawler errors.

#### 4.2.3 Document Index

The document index keeps information about each document. It is a fixed width ISAM (Index sequential access mode) index, ordered by docID. The information stored in each entry includes the current document status, a pointer into the repository, a document checksum, and various statistics. If the document has been crawled, it also contains a pointer into a variable width file called docinfo which contains its URL and title. Otherwise the pointer points into the URLlist which contains just the URL. This design decision was driven by the desire to have a reasonably compact data structure, and the ability to fetch a record in one disk seek during a search

Additionally, there is a file which is used to convert URLs into docIDs. It is a list of URL checksums with their corresponding docIDs and is sorted by checksum. In order to find the docID of a particular URL, the URL's checksum is computed and a binary search is performed on the checksums file to find its docID. URLs may be converted into docIDs in batch by doing a merge with this file. This is the technique the URLresolver uses to turn URLs into docIDs. This batch mode of update is crucial because otherwise we must perform one seek for every link which assuming one disk would take more than a month for our 322 million link dataset.

#### 4.2.4 Lexicon

The lexicon has several different forms. One important change from earlier systems is that the lexicon can fit in memory for a reasonable price. In the current implementation we can keep the lexicon in memory on a machine with 256 MB of main memory. The current lexicon contains 14 million words (though some rare words were not added to the lexicon). It is implemented in two parts -- a list of the words (concatenated together but separated by nulls) and a hash table of pointers. For various functions, the list of words has some auxiliary information which is beyond the scope of this paper to explain fully.

#### 4.2.5 Hit Lists

A hit list corresponds to a list of occurrences of a particular word in a particular document including position, font, and capitalization information. Hit lists account for most of the space used in both the forward and the inverted indices. Because of this, it is important to represent them as efficiently as possible. We considered several alternatives for encoding position, font, and capitalization -- simple encoding (a triple of integers), a compact encoding (a hand optimized allocation of bits), and Huffman coding. In the end we chose a hand optimized compact encoding since it required far less space than the simple encoding and far less bit manipulation than Huffman coding. The details of the hits are shown in Figure 3.

Our compact encoding uses two bytes for every hit. There are two types of hits: fancy hits and plain hits. Fancy hits include hits occurring in a URL, title, anchor text, or meta tag. Plain hits include everything else. A plain hit consists of a capitalization bit, font size, and 12 bits of word position in a document (all positions higher than 4095 are labeled 4096). Font size is represented relative to the rest of the document using three bits (only 7 values are actually used because 111 is the flag that signals a fancy hit). A fancy hit consists of a capitalization bit, the font size set to 7 to indicate it is a fancy hit, 4 bits to encode the type of fancy hit, and 8 bits of position. For anchor hits, the 8 bits of position are split into 4 bits for position in anchor and 4 bits for a hash of the docID the anchor occurs in. This gives us some limited phrase searching as long as there are not that many anchors for a particular word. We expect to update the way that anchor hits are stored to allow for greater resolution in the position and docIDhash fields. We use font size relative to the rest of the document because when searching, you do not want to rank otherwise identical documents differently just because one of the documents is in a larger font.

![](http://infolab.stanford.edu/~backrub/barrels.gif)

Figure 3. Forward and Reverse Indexes and the Lexicon

 

The length of a hit list is stored before the hits themselves. To save space, the length of the hit list is combined with the wordID in the forward index and the docID in the inverted index. This limits it to 8 and 5 bits respectively (there are some tricks which allow 8 bits to be borrowed from the wordID). If the length is longer than would fit in that many bits, an escape code is used in those bits, and the next two bytes contain the actual length.

#### 4.2.6 Forward Index

The forward index is actually already partially sorted. It is stored in a number of barrels (we used 64). Each barrel holds a range of wordID's. If a document contains words that fall into a particular barrel, the docID is recorded into the barrel, followed by a list of wordID's with hitlists which correspond to those words. This scheme requires slightly more storage because of duplicated docIDs but the difference is very small for a reasonable number of buckets and saves considerable time and coding complexity in the final indexing phase done by the sorter. Furthermore, instead of storing actual wordID's, we store each wordID as a relative difference from the minimum wordID that falls into the barrel the wordID is in. This way, we can use just 24 bits for the wordID's in the unsorted barrels, leaving 8 bits for the hit list length.

#### 4.2.7 Inverted Index

The inverted index consists of the same barrels as the forward index, except that they have been processed by the sorter. For every valid wordID, the lexicon contains a pointer into the barrel that wordID falls into. It points to a doclist of docID's together with their corresponding hit lists. This doclist represents all the occurrences of that word in all documents.

An important issue is in what order the docID's should appear in the doclist. One simple solution is to store them sorted by docID. This allows for quick merging of different doclists for multiple word queries. Another option is to store them sorted by a ranking of the occurrence of the word in each document. This makes answering one word queries trivial and makes it likely that the answers to multiple word queries are near the start. However, merging is much more difficult. Also, this makes development much more difficult in that a change to the ranking function requires a rebuild of the index. We chose a compromise between these options, keeping two sets of inverted barrels -- one set for hit lists which include title or anchor hits and another set for all hit lists. This way, we check the first set of barrels first and if there are not enough matches within those barrels we check the larger ones.

### 4.3 Crawling the Web

Running a web crawler is a challenging task. There are tricky performance and reliability issues and even more importantly, there are social issues. Crawling is the most fragile application since it involves interacting with hundreds of thousands of web servers and various name servers which are all beyond the control of the system.

In order to scale to hundreds of millions of web pages, Google has a fast distributed crawling system. A single URLserver serves lists of URLs to a number of crawlers (we typically ran about 3). Both the URLserver and the crawlers are implemented in Python. Each crawler keeps roughly 300 connections open at once. This is necessary to retrieve web pages at a fast enough pace. At peak speeds, the system can crawl over 100 web pages per second using four crawlers. This amounts to roughly 600K per second of data. A major performance stress is DNS lookup. Each crawler maintains a its own DNS cache so it does not need to do a DNS lookup before crawling each document. Each of the hundreds of connections can be in a number of different states: looking up DNS, connecting to host, sending request, and receiving response. These factors make the crawler a complex component of the system. It uses asynchronous IO to manage events, and a number of queues to move page fetches from state to state.

It turns out that running a crawler which connects to more than half a million servers, and generates tens of millions of log entries generates a fair amount of email and phone calls. Because of the vast number of people coming on line, there are always those who do not know what a crawler is, because this is the first one they have seen. Almost daily, we receive an email something like, "Wow, you looked at a lot of pages from my web site. How did you like it?" There are also some people who do not know about the [robots exclusion protocol](http://info.webcrawler.com/mak/projects/robots/norobots.html), and think their page should be protected from indexing by a statement like, "This page is copyrighted and should not be indexed", which needless to say is difficult for web crawlers to understand. Also, because of the huge amount of data involved, unexpected things will happen. For example, our system tried to crawl an online game. This resulted in lots of garbage messages in the middle of their game! It turns out this was an easy problem to fix. But this problem had not come up until we had downloaded tens of millions of pages. Because of the immense variation in web pages and servers, it is virtually impossible to test a crawler without running it on large part of the Internet. Invariably, there are hundreds of obscure problems which may only occur on one page out of the whole web and cause the crawler to crash, or worse, cause unpredictable or incorrect behavior. Systems which access large parts of the Internet need to be designed to be very robust and carefully tested. Since large complex systems such as crawlers will invariably cause problems, there needs to be significant resources devoted to reading the email and solving these problems as they come up.

### 4.4 Indexing the Web

-   **Parsing --** Any parser which is designed to run on the entire Web must handle a huge array of possible errors. These range from typos in HTML tags to kilobytes of zeros in the middle of a tag, non-ASCII characters, HTML tags nested hundreds deep, and a great variety of other errors that challenge anyone's imagination to come up with equally creative ones. For maximum speed, instead of using YACC to generate a CFG parser, we use flex to generate a lexical analyzer which we outfit with its own stack. Developing this parser which runs at a reasonable speed and is very robust involved a fair amount of work.
-   **Indexing** **Documents into Barrels --** After each document is parsed, it is encoded into a number of barrels. Every word is converted into a wordID by using an in-memory hash table -- the lexicon. New additions to the lexicon hash table are logged to a file. Once the words are converted into wordID's, their occurrences in the current document are translated into hit lists and are written into the forward barrels. The main difficulty with parallelization of the indexing phase is that the lexicon needs to be shared. Instead of sharing the lexicon, we took the approach of writing a log of all the extra words that were not in a base lexicon, which we fixed at 14 million words. That way multiple indexers can run in parallel and then the small log file of extra words can be processed by one final indexer.
-   **Sorting** -- In order to generate the inverted index, the sorter takes each of the forward barrels and sorts it by wordID to produce an inverted barrel for title and anchor hits and a full text inverted barrel. This process happens one barrel at a time, thus requiring little temporary storage. Also, we parallelize the sorting phase to use as many machines as we have simply by running multiple sorters, which can process different buckets at the same time. Since the barrels don't fit into main memory, the sorter further subdivides them into baskets which do fit into memory based on wordID and docID. Then the sorter, loads each basket into memory, sorts it and writes its contents into the short inverted barrel and the full inverted barrel.

### 4.5 Searching

The goal of searching is to provide quality search results efficiently. Many of the large commercial search engines seemed to have made great progress in terms of efficiency. Therefore, we have focused more on quality of search in our research, although we believe our solutions are scalable to commercial volumes with a bit more effort. The google query evaluation process is show in Figure 4.

1.  Parse the query.
2.  Convert words into wordIDs.
3.  Seek to the start of the doclist in the short barrel for every word.
4.  Scan through the doclists until there is a document that matches all the search terms.
5.  Compute the rank of that document for the query.
6.  If we are in the short barrels and at the end of any doclist, seek to the start of the doclist in the full barrel for every word and go to step 4.
7.  If we are not at the end of any doclist go to step 4.
  
Sort the documents that have matched by rank and return the top k.

Figure 4. Google Query Evaluation

 

To put a limit on response time, once a certain number (currently 40,000) of matching documents are found, the searcher automatically goes to step 8 in Figure 4. This means that it is possible that sub-optimal results would be returned. We are currently investigating other ways to solve this problem. In the past, we sorted the hits according to PageRank, which seemed to improve the situation.

#### 4.5.1 The Ranking System

Google maintains much more information about web documents than typical search engines. Every hitlist includes position, font, and capitalization information. Additionally, we factor in hits from anchor text and the PageRank of the document. Combining all of this information into a rank is difficult. We designed our ranking function so that no particular factor can have too much influence. First, consider the simplest case -- a single word query. In order to rank a document with a single word query, Google looks at that document's hit list for that word. Google considers each hit to be one of several different types (title, anchor, URL, plain text large font, plain text small font, ...), each of which has its own type-weight. The type-weights make up a vector indexed by type. Google counts the number of hits of each type in the hit list. Then every count is converted into a count-weight. Count-weights increase linearly with counts at first but quickly taper off so that more than a certain count will not help. We take the dot product of the vector of count-weights with the vector of type-weights to compute an IR score for the document. Finally, the IR score is combined with PageRank to give a final rank to the document.

For a multi-word search, the situation is more complicated. Now multiple hit lists must be scanned through at once so that hits occurring close together in a document are weighted higher than hits occurring far apart. The hits from the multiple hit lists are matched up so that nearby hits are matched together. For every matched set of hits, a proximity is computed. The proximity is based on how far apart the hits are in the document (or anchor) but is classified into 10 different value "bins" ranging from a phrase match to "not even close". Counts are computed not only for every type of hit but for every type and proximity. Every type and proximity pair has a type-prox-weight. The counts are converted into count-weights and we take the dot product of the count-weights and the type-prox-weights to compute an IR score. All of these numbers and matrices can all be displayed with the search results using a special debug mode. These displays have been very helpful in developing the ranking system.

#### 4.5.2 Feedback

The ranking function has many parameters like the type-weights and the type-prox-weights. Figuring out the right values for these parameters is something of a black art. In order to do this, we have a user feedback mechanism in the search engine. A trusted user may optionally evaluate all of the results that are returned. This feedback is saved. Then when we modify the ranking function, we can see the impact of this change on all previous searches which were ranked. Although far from perfect, this gives us some idea of how a change in the ranking function affects the search results.

## 5 Results and Performance

   The most important measure of a search engine is the quality of its search results. While a complete user evaluation is beyond the scope of this paper, our own experience with Google has shown it to produce better results than the major commercial search engines for most searches. As an example which illustrates the use of PageRank, anchor text, and proximity, Figure 4 shows Google's results for a search on "bill clinton". These results demonstrates some of Google's features. The results are clustered by server. This helps considerably when sifting through result sets. A number of results are from the whitehouse.gov domain which is what one may reasonably expect from such a search. Currently, most major commercial search engines do not return any results from whitehouse.gov, much less the right ones. Notice that there is no title for the first result. This is because it was not crawled. Instead, Google relied on anchor text to determine this was a good answer to the query. Similarly, the fifth result is an email address which, of course, is not crawlable. It is also a result of anchor text.

All of the results are reasonably high quality pages and, at last check, none were broken links. This is largely because they all have high PageRank. The PageRanks are the percentages in red along with bar graphs. Finally, there are no results about a Bill other than Clinton or about a Clinton other than Bill. This is because we place heavy importance on the proximity of word occurrences. Of course a true test of the quality of a search engine would involve an extensive user study or results analysis which we do not have room for here. Instead, we invite the reader to try Google for themselves at [http://google.stanford.edu](http://google.stanford.edu/).

### 5.1 Storage Requirements

Aside from search quality, Google is designed to scale cost effectively to the size of the Web as it grows. One aspect of this is to use storage efficiently. Table 1 has a breakdown of some statistics and storage requirements of Google. Due to compression the total size of the repository is about 53 GB, just over one third of the total data it stores. At current disk prices this makes the repository a relatively cheap source of useful data. More importantly, the total of all the data used by the search engine requires a comparable amount of storage, about 55 GB. Furthermore, most queries can be answered using just the short inverted index. With better encoding and compression of the Document Index, a high quality web search engine may fit onto a 7GB drive of a new PC.  
  

Storage Statistics

Total Size of Fetched Pages

147.8 GB

Compressed Repository

53.5 GB

Short Inverted Index

4.1 GB

Full Inverted Index

37.2 GB

Lexicon

293 MB

Temporary Anchor Data   
(not in total)

6.6 GB

Document Index Incl.   
Variable Width Data

9.7 GB

Links Database

3.9 GB

Total Without Repository

55.2 GB

Total With Repository

108.7 GB

Web Page Statistics

Number of Web Pages Fetched

24 million

Number of Urls Seen

76.5 million

Number of Email Addresses

1.7 million

Number of 404's

1.6 million

 

Table 1. Statistics

  

###  5.2 System Performance

It is important for a search engine to crawl and index efficiently. This way information can be kept up to date and major changes to the system can be tested relatively quickly. For Google, the major operations are Crawling, Indexing, and Sorting. It is difficult to measure how long crawling took overall because disks filled up, name servers crashed, or any number of other problems which stopped the system. In total it took roughly 9 days to download the 26 million pages (including errors). However, once the system was running smoothly, it ran much faster, downloading the last 11 million pages in just 63 hours, averaging just over 4 million pages per day or 48.5 pages per second. We ran the indexer and the crawler simultaneously. The indexer ran just faster than the crawlers. This is largely because we spent just enough time optimizing the indexer so that it would not be a bottleneck. These optimizations included bulk updates to the document index and placement of critical data structures on the local disk. The indexer runs at roughly 54 pages per second. The sorters can be run completely in parallel; using four machines, the whole process of sorting takes about 24 hours.

### 5.3 Search Performance

Improving the performance of search was not the major focus of our research up to this point. The current version of Google answers most queries in between 1 and 10 seconds. This time is mostly dominated by disk IO over NFS (since disks are spread over a number of machines). Furthermore, Google does not have any optimizations such as query caching, subindices on common terms, and other common optimizations. We intend to speed up Google considerably through distribution and hardware, software, and algorithmic improvements. Our target is to be able to handle several hundred queries per second. Table 2 has some sample query times from the current version of Google. They are repeated to show the speedups resulting from cached IO.

 

**Initial Query**

**Same Query Repeated (IO mostly cached)** 

**Query**

**CPU Time(s)**

**Total Time(s)**

**CPU Time(s)**

**Total Time(s)**

al gore

0.09

2.13

0.06

0.06

vice president

1.77

3.84

1.66

1.80

hard disks

0.25

4.86

0.20

0.24

search engines

1.31

9.63

1.16

1.16

 

Table 2. Search Times

  

## 6 Conclusions

Google is designed to be a scalable search engine. The primary goal is to provide high quality search results over a rapidly growing World Wide Web. Google employs a number of techniques to improve search quality including page rank, anchor text, and proximity information. Furthermore, Google is a complete architecture for gathering web pages, indexing them, and performing search queries over them.

### 6.1 Future Work

A large-scale web search engine is a complex system and much remains to be done. Our immediate goals are to improve search efficiency and to scale to approximately 100 million web pages. Some simple improvements to efficiency include query caching, smart disk allocation, and subindices. Another area which requires much research is updates. We must have smart algorithms to decide what old web pages should be recrawled and what new ones should be crawled. Work toward this goal has been done in \[[Cho 98](http://infolab.stanford.edu/~backrub/google.html#ref)\]. One promising area of research is using proxy caches to build search databases, since they are demand driven. We are planning to add simple features supported by commercial search engines like boolean operators, negation, and stemming. However, other features are just starting to be explored such as relevance feedback and clustering (Google currently supports a simple hostname based clustering). We also plan to support user context (like the user's location), and result summarization. We are also working to extend the use of link structure and link text. Simple experiments indicate PageRank can be personalized by increasing the weight of a user's home page or bookmarks. As for link text, we are experimenting with using text surrounding links in addition to the link text itself. A Web search engine is a very rich environment for research ideas. We have far too many to list here so we do not expect this Future Work section to become much shorter in the near future.

### 6.2 High Quality Search

The biggest problem facing users of web search engines today is the quality of the results they get back. While the results are often amusing and expand users' horizons, they are often frustrating and consume precious time. For example, the top result for a search for "Bill Clinton" on one of the most popular commercial search engines was the [Bill Clinton Joke of the Day: April 14, 1997](http://www.io.com/~cjburke/clinton/970414.html). Google is designed to provide higher quality search so as the Web continues to grow rapidly, information can be found easily. In order to accomplish this Google makes heavy use of hypertextual information consisting of link structure and link (anchor) text. Google also uses proximity and font information. While evaluation of a search engine is difficult, we have subjectively found that Google returns higher quality search results than current commercial search engines. The analysis of link structure via PageRank allows Google to evaluate the quality of web pages. The use of link text as a description of what the link points to helps the search engine return relevant (and to some degree high quality) results. Finally, the use of proximity information helps increase relevance a great deal for many queries.

### 6.3 Scalable Architecture

Aside from the quality of search, Google is designed to scale. It must be efficient in both space and time, and constant factors are very important when dealing with the entire Web. In implementing Google, we have seen bottlenecks in CPU, memory access, memory capacity, disk seeks, disk throughput, disk capacity, and network IO. Google has evolved to overcome a number of these bottlenecks during various operations. Google's major data structures make efficient use of available storage space. Furthermore, the crawling, indexing, and sorting operations are efficient enough to be able to build an index of a substantial portion of the web -- 24 million pages, in less than one week. We expect to be able to build an index of 100 million pages in less than a month.

### 6.4 A Research Tool

In addition to being a high quality search engine, Google is a research tool. The data Google has collected has already resulted in many other papers submitted to conferences and many more on the way. Recent research such as \[[Abiteboul 97](http://infolab.stanford.edu/~backrub/google.html#ref)\] has shown a number of limitations to queries about the Web that may be answered without having the Web available locally. This means that Google (or a similar system) is not only a valuable research tool but a necessary one for a wide range of applications. We hope Google will be a resource for searchers and researchers all around the world and will spark the next generation of search engine technology.

## 7 Acknowledgments

Scott Hassan and Alan Steremberg have been critical to the development of Google. Their talented contributions are irreplaceable, and the authors owe them much gratitude. We would also like to thank Hector Garcia-Molina, Rajeev Motwani, Jeff Ullman, and Terry Winograd and the whole WebBase group for their support and insightful discussions. Finally we would like to recognize the generous support of our equipment donors IBM, Intel, and Sun and our funders. The research described here was conducted as part of the Stanford Integrated Digital Library Project, supported by the National Science Foundation under Cooperative Agreement IRI-9411306. Funding for this cooperative agreement is also provided by DARPA and NASA, and by Interval Research, and the industrial partners of the Stanford Digital Libraries Project.

## References

-   Best of the Web 1994 -- Navigators [http://botw.org/1994/awards/navigators.html](http://botw.org/1994/awards/navigators.html)
-   Bill Clinton Joke of the Day: April 14, 1997. [http://www.io.com/~cjburke/clinton/970414.html.](http://www.io.com/~cjburke/clinton/970414.html)
-   Bzip2 Homepage [http://www.muraroa.demon.co.uk/](http://www.muraroa.demon.co.uk/)
-   Google Search Engine [http://google.stanford.edu/](http://google.stanford.edu/)
-   Harvest [http://harvest.transarc.com/](http://harvest.transarc.com/)
-   Mauldin, Michael L. Lycos Design Choices in an Internet Search Service, IEEE Expert Interview [http://www.computer.org/pubs/expert/1997/trends/x1008/mauldin.htm](http://www.computer.org/pubs/expert/1997/trends/x1008/mauldin.htm)
-   The Effect of Cellular Phone Use Upon Driver Attention [http://www.webfirst.com/aaa/text/cell/cell0toc.htm](http://www.webfirst.com/aaa/text/cell/cell0toc.htm)
-   Search Engine Watch [http://www.searchenginewatch.com/](http://www.searchenginewatch.com/)
-   RFC 1950 (zlib) [ftp://ftp.uu.net/graphics/png/documents/zlib/zdoc-index.html](ftp://ftp.uu.net/graphics/png/documents/zlib/zdoc-index.html)
-   Robots Exclusion Protocol: [http://info.webcrawler.com/mak/projects/robots/exclusion.htm](http://info.webcrawler.com/mak/projects/robots/exclusion.html)
-   Web Growth Summary: [http://www.mit.edu/people/mkgray/net/web-growth-summary.html](http://www.mit.edu/people/mkgray/net/web-growth-summary.html)
-   Yahoo! [http://www.yahoo.com/](http://www.yahoo.com/)

-   \[Abiteboul 97\] Serge Abiteboul and Victor Vianu, _Queries and Computation on the Web_. Proceedings of the International Conference on Database Theory. Delphi, Greece 1997.
-   \[Bagdikian 97\] Ben H. Bagdikian. _The Media Monopoly_. 5th Edition. Publisher: Beacon, ISBN: 0807061557
-   \[Chakrabarti 98\] S.Chakrabarti, B.Dom, D.Gibson, J.Kleinberg, P. Raghavan and S. Rajagopalan. _Automatic Resource Compilation by Analyzing Hyperlink Structure and Associated Text._ Seventh International Web Conference (WWW 98). Brisbane, Australia, April 14-18, 1998.
-   \[Cho 98\] Junghoo Cho, Hector Garcia-Molina, Lawrence Page. _Efficient Crawling Through URL Ordering._ Seventh International Web Conference (WWW 98). Brisbane, Australia, April 14-18, 1998.
-   \[Gravano 94\] Luis Gravano, Hector Garcia-Molina, and A. Tomasic. _The Effectiveness of GlOSS for the Text-Database Discovery Problem._ Proc. of the 1994 ACM SIGMOD International Conference On Management Of Data, 1994.
-   \[Kleinberg 98\] Jon Kleinberg, _Authoritative Sources in a Hyperlinked Environment_, Proc. ACM-SIAM Symposium on Discrete Algorithms, 1998.
-   \[Marchiori 97\] Massimo Marchiori. _The Quest for Correct Information on the Web: Hyper Search Engines._ The Sixth International WWW Conference (WWW 97). Santa Clara, USA, April 7-11, 1997.
-   \[McBryan 94\] Oliver A. McBryan. GENVL and _WWWW: Tools for Taming the Web. First International Conference on the World Wide Web._ CERN, Geneva (Switzerland), May 25-26-27 1994. [http://www.cs.colorado.edu/home/mcbryan/mypapers/www94.ps](http://www.cs.colorado.edu/home/mcbryan/mypapers/www94.ps)
-   \[Page 98\] Lawrence Page, Sergey Brin, Rajeev Motwani, Terry Winograd. _The PageRank Citation Ranking: Bringing Order to the Web._ Manuscript in progress. [http://google.stanford.edu/~backrub/pageranksub.ps](http://google.stanford.edu/~backrub/pageranksub.ps)
-   \[Pinkerton 94\] Brian Pinkerton, _Finding What People Want: Experiences with the WebCrawler._ The Second International WWW Conference Chicago, USA, October 17-20, 1994. [http://info.webcrawler.com/bp/WWW94.html](http://info.webcrawler.com/bp/WWW94.html)
-   \[Spertus 97\] Ellen Spertus. _ParaSite: Mining Structural Information on the Web._ The Sixth International WWW Conference (WWW 97). Santa Clara, USA, April 7-11, 1997.
-   \[TREC 96\] _Proceedings of the fifth Text REtrieval Conference (TREC-5)._ Gaithersburg, Maryland, November 20-22, 1996. Publisher: Department of Commerce, National Institute of Standards and Technology. Editors: D. K. Harman and E. M. Voorhees. Full text at: [http://trec.nist.gov/](http://trec.nist.gov/)
-   \[Witten 94\] Ian H Witten, Alistair Moffat, and Timothy C. Bell. _Managing Gigabytes: Compressing and Indexing Documents and Images._ New York: Van Nostrand Reinhold, 1994.
-   \[Weiss 96\] Ron Weiss, Bienvenido Velez, Mark A. Sheldon, Chanathip Manprempre, Peter Szilagyi, Andrzej Duda, and David K. Gifford. _HyPursuit: A Hierarchical Network Search Engine that Exploits Content-Link Hypertext Clustering._ Proceedings of the 7th ACM Conference on Hypertext. New York, 1996.

## Vitae

![](http://infolab.stanford.edu/~backrub/sergey.jpg)![](http://infolab.stanford.edu/~backrub/larry.jpg)  
**Sergey Brin** received his B.S. degree in mathematics and computer science from the University of Maryland at College Park in 1993. Currently, he is a Ph.D. candidate in computer science at Stanford University where he received his M.S. in 1995. He is a recipient of a National Science Foundation Graduate Fellowship. His research interests include search engines, information extraction from unstructured sources, and data mining of large text collections and scientific data.

**Lawrence Page** was born in East Lansing, Michigan, and received a B.S.E. in Computer Engineering at the University of Michigan Ann Arbor in 1995. He is currently a Ph.D. candidate in Computer Science at Stanford University. Some of his research interests include the link structure of the web, human computer interaction, search engines, scalability of information access interfaces, and personal data mining.

## 8 Appendix A: Advertising and Mixed Motives

Currently, the predominant business model for commercial search engines is advertising. The goals of the advertising business model do not always correspond to providing quality search to users. For example, in our prototype search engine one of the top results for cellular phone is "[The Effect of Cellular Phone Use Upon Driver Attention](http://www.webfirst.com/aaa/text/cell/cell0toc.htm)", a study which explains in great detail the distractions and risk associated with conversing on a cell phone while driving. This search result came up first because of its high importance as judged by the PageRank algorithm, an approximation of citation importance on the web \[[Page, 98](http://infolab.stanford.edu/~backrub/google.html#ref)\]. It is clear that a search engine which was taking money for showing cellular phone ads would have difficulty justifying the page that our system returned to its paying advertisers. For this type of reason and historical experience with other media \[[Bagdikian 83](http://infolab.stanford.edu/~backrub/google.html#ref)\], we expect that advertising funded search engines will be inherently biased towards the advertisers and away from the needs of the consumers.

Since it is very difficult even for experts to evaluate search engines, search engine bias is particularly insidious. A good example was OpenText, which was reported to be selling companies the right to be listed at the top of the search results for particular queries \[[Marchiori 97](http://infolab.stanford.edu/~backrub/google.html#ref)\]. This type of bias is much more insidious than advertising, because it is not clear who "deserves" to be there, and who is willing to pay money to be listed. This business model resulted in an uproar, and OpenText has ceased to be a viable search engine. But less blatant bias are likely to be tolerated by the market. For example, a search engine could add a small factor to search results from "friendly" companies, and subtract a factor from results from competitors. This type of bias is very difficult to detect but could still have a significant effect on the market. Furthermore, advertising income often provides an incentive to provide poor quality search results. For example, we noticed a major search engine would not return a large airline's homepage when the airline's name was given as a query. It so happened that the airline had placed an expensive ad, linked to the query that was its name. A better search engine would not have required this ad, and possibly resulted in the loss of the revenue from the airline to the search engine. In general, it could be argued from the consumer point of view that the better the search engine is, the fewer advertisements will be needed for the consumer to find what they want. This of course erodes the advertising supported business model of the existing search engines. However, there will always be money from advertisers who want a customer to switch products, or have something that is genuinely new. But we believe the issue of advertising causes enough mixed incentives that it is crucial to have a competitive search engine that is transparent and in the academic realm.

## 9 Appendix B: Scalability

### 9\. 1 Scalability of Google

We have designed Google to be scalable in the near term to a goal of 100 million web pages. We have just received disk and machines to handle roughly that amount. All of the time consuming parts of the system are parallelize and roughly linear time. These include things like the crawlers, indexers, and sorters. We also think that most of the data structures will deal gracefully with the expansion. However, at 100 million web pages we will be very close up against all sorts of operating system limits in the common operating systems (currently we run on both Solaris and Linux). These include things like addressable memory, number of open file descriptors, network sockets and bandwidth, and many others. We believe expanding to a lot more than 100 million pages would greatly increase the complexity of our system.

### 9.2 Scalability of Centralized Indexing Architectures

As the capabilities of computers increase, it becomes possible to index a very large amount of text for a reasonable cost. Of course, other more bandwidth intensive media such as video is likely to become more pervasive. But, because the cost of production of text is low compared to media like video, text is likely to remain very pervasive. Also, it is likely that soon we will have speech recognition that does a reasonable job converting speech into text, expanding the amount of text available. All of this provides amazing possibilities for centralized indexing. Here is an illustrative example. We assume we want to index everything everyone in the US has written for a year. We assume that there are 250 million people in the US and they write an average of 10k per day. That works out to be about 850 terabytes. Also assume that indexing a terabyte can be done now for a reasonable cost. We also assume that the indexing methods used over the text are linear, or nearly linear in their complexity. Given all these assumptions we can compute how long it would take before we could index our 850 terabytes for a reasonable cost assuming certain growth factors. Moore's Law was defined in 1965 as a doubling every 18 months in processor power. It has held remarkably true, not just for processors, but for other important system parameters such as disk as well. If we assume that Moore's law holds for the future, we need only 10 more doublings, or 15 years to reach our goal of indexing everything everyone in the US has written for a year for a price that a small company could afford. Of course, hardware experts are somewhat concerned Moore's Law may not continue to hold for the next 15 years, but there are certainly a lot of interesting centralized applications even if we only get part of the way to our hypothetical example.

Of course a distributed systems like G_l_oss \[[Gravano 94](http://infolab.stanford.edu/~backrub/google.html#ref)\] or [Harvest](http://harvest.transarc.com/) will often be the most efficient and elegant technical solution for indexing, but it seems difficult to convince the world to use these systems because of the high administration costs of setting up large numbers of installations. Of course, it is quite likely that reducing the administration cost drastically is possible. If that happens, and everyone starts running a distributed indexing system, searching would certainly improve drastically.

Because humans can only type or speak a finite amount, and as computers continue improving, text indexing will scale even better than it does now. Of course there could be an infinite amount of machine generated content, but just indexing huge amounts of human generated content seems tremendously useful. So we are optimistic that our centralized web search engine architecture will improve in its ability to cover the pertinent text information over time and that there is a bright future for search.




As we'll see, the trick is to ask the web itself to rank the importance of pages...

Imagine a library containing 25 billion documents but with no centralized organization and no librarians. In addition, anyone may add a document at any time without telling anyone. You may feel sure that one of the documents contained in the collection has a piece of information that is vitally important to you, and, being impatient like most of us, you'd like to find it in a matter of seconds. How would you go about doing it?

Posed in this way, the problem seems impossible. Yet this description is not too different from the World Wide Web, a huge, highly-disorganized collection of documents in many different formats. Of course, we're all familiar with search engines (perhaps you found this article using one) so we know that there is a solution. This article will describe Google's PageRank algorithm and how it returns pages from the web's collection of 25 billion documents that match search criteria so well that "google" has become a widely used verb.

Most search engines, including Google, continually run an army of computer programs that retrieve pages from the web, index the words in each document, and store this information in an efficient format. Each time a user asks for a web search using a search phrase, such as "search engine," the search engine determines all the pages on the web that contains the words in the search phrase. (Perhaps additional information such as the distance between the words "search" and "engine" will be noted as well.) Here is the problem: Google now claims to index 25 billion pages. Roughly 95% of the text in web pages is composed from a mere 10,000 words. This means that, for most searches, there will be a huge number of pages containing the words in the search phrase. What is needed is a means of ranking the importance of the pages that fit the search criteria so that the pages can be sorted with the most important pages at the top of the list.

One way to determine the importance of pages is to use a human-generated ranking. For instance, you may have seen pages that consist mainly of a large number of links to other resources in a particular area of interest. Assuming the person maintaining this page is reliable, the pages referenced are likely to be useful. Of course, the list may quickly fall out of date, and the person maintaining the list may miss some important pages, either unintentionally or as a result of an unstated bias.

Google's PageRank algorithm assesses the importance of web pages without human evaluation of the content. In fact, Google feels that the value of its service is largely in its ability to provide unbiased results to search queries; Google claims, "the heart of our software is PageRank." As we'll see, the trick is to ask the web itself to rank the importance of pages.

### How to tell who's important

If you've ever created a web page, you've probably included links to other pages that contain valuable, reliable information. By doing so, you are affirming the importance of the pages you link to. Google's PageRank algorithm stages a monthly popularity contest among all pages on the web to decide which pages are most important. The fundamental idea put forth by PageRank's creators, Sergey Brin and Lawrence Page, is this: the importance of a page is judged by the number of pages linking to it as well as their importance.

We will assign to each web page _P_ a measure of its importance _I(P)_, called the page's PageRank. At various sites, you may find an [approximation of a page's PageRank.](http://www.checkpagerank.com/) (For instance, the home page of The American Mathematical Society currently has a PageRank of 8 on a scale of 10. Can you find any pages with a PageRank of 10?) This reported value is only an approximation since Google declines to publish actual PageRanks in an effort to frustrate those would manipulate the rankings.

Here's how the PageRank is determined. Suppose that page _Pj_ has _lj_ links. If one of those links is to page _Pi_, then _Pj_ will pass on 1/_lj_ of its importance to _Pi_. The importance ranking of _Pi_ is then the sum of all the contributions made by pages linking to it. That is, if we denote the set of pages linking to _Pi_ by _Bi_, then

![\[  I(P_i)=\sum_{P_j\in B_i} \frac{I(P_j)}{l_j}  \] ](https://www.ams.org/featurecolumn/images/december2006/index_1.gif)

This may remind you of the chicken and the egg: to determine the importance of a page, we first need to know the importance of all the pages linking to it. However, we may recast the problem into one that is more mathematically familiar.

Let's first create a matrix, called the hyperlink matrix, ![$ {\bf H}=[H_{ij}] $ ](https://www.ams.org/featurecolumn/images/december2006/index_2.gif) in which the entry in the _ith_ row and _jth_ column is

![\[  H_{ij}=\left\{\begin{array}{ll}1/l_{j} &  \hbox{if } P_j\in B_i \\ 0 & \hbox{otherwise} \end{array}\right.  \] ](https://www.ams.org/featurecolumn/images/december2006/index_3.gif)

Notice that **H** has some special properties. First, its entries are all nonnegative. Also, the sum of the entries in a column is one unless the page corresponding to that column has no links. Matrices in which all the entries are nonnegative and the sum of the entries in every column is one are called _stochastic_; they will play an important role in our story.

We will also form a vector ![$ I=[I(P_i)] $ ](https://www.ams.org/featurecolumn/images/december2006/index_4.gif) whose components are PageRanks--that is, the importance rankings--of all the pages. The condition above defining the PageRank may be expressed as

![\[  I = {\bf H}I  \] ](https://www.ams.org/featurecolumn/images/december2006/index_5.gif)

In other words, the vector _I_ is an eigenvector of the matrix **H** with eigenvalue 1. We also call this a _stationary vector_ of **H**.

Let's look at an example. Shown below is a representation of a small collection (eight) of web pages with links represented by arrows.

![](https://www.ams.org/featurecolumn/images/december2006/goodnet.jpg)

The corresponding matrix is

![](https://www.ams.org/featurecolumn/images/december2006/matrix.0.gif)

with stationary vector

![](https://www.ams.org/featurecolumn/images/december2006/eigenvector.0.gif)

This shows that page 8 wins the popularity contest. Here is the same figure with the web pages shaded in such a way that the pages with higher PageRanks are lighter.

![](https://www.ams.org/featurecolumn/images/december2006/goodnet.shaded.jpg)

### Computing _I_

There are many ways to find the eigenvectors of a square matrix. However, we are in for a special challenge since the matrix **H** is a square matrix with one column for each web page indexed by Google. This means that **H** has about _n =_ 25 billion columns and rows. However, most of the entries in **H** are zero; in fact, studies show that web pages have an average of about 10 links, meaning that, on average, all but 10 entries in every column are zero. We will choose a method known as the _power method_ for finding the stationary vector _I_ of the matrix **H**.

How does the power method work? We begin by choosing a vector _I 0_ as a candidate for _I_ and then producing a sequence of vectors _I k_ by

![\[  I^{k+1}={\bf H}I^k  \] ](https://www.ams.org/featurecolumn/images/december2006/index_6.gif)

The method is founded on the following general principle that we will soon investigate.

_**General principle:** The sequence _I k_ will converge to the stationary vector _I_._

We will illustrate with the example above.

_I 0_

_I 1_

_I 2_

_I 3_

_I 4_

...

_I 60_

_I 61_

1

0

0

0

0.0278

...

0.06

0.06

0

0.5

0.25

0.1667

0.0833

...

0.0675

0.0675

0

0.5

0

0

0

...

0.03

0.03

0

0

0.5

0.25

0.1667

...

0.0675

0.0675

0

0

0.25

0.1667

0.1111

...

0.0975

0.0975

0

0

0

0.25

0.1806

...

0.2025

0.2025

0

0

0

0.0833

0.0972

...

0.18

0.18

0

0

0

0.0833

0.3333

...

0.295

0.295

It is natural to ask what these numbers mean. Of course, there can be no absolute measure of a page's importance, only relative measures for comparing the importance of two pages through statements such as "Page A is twice as important as Page B." For this reason, we may multiply all the importance rankings by some fixed quantity without affecting the information they tell us. In this way, we will always assume, for reasons to be explained shortly, that the sum of all the popularities is one.

### Three important questions

Three questions naturally come to mind:

-   Does the sequence _I k_ always converge?
-   Is the vector to which it converges independent of the initial vector _I 0_?
-   Do the importance rankings contain the information that we want?

Given the current method, the answer to all three questions is "No!" However, we'll see how to modify our method so that we can answer "yes" to all three.

Let's first look at a very simple example. Consider the following small web consisting of two web pages, one of which links to the other:

![](https://www.ams.org/featurecolumn/images/december2006/dangling.jpg)

with matrix

![](https://www.ams.org/featurecolumn/images/december2006/matrix.3.gif)

Here is one way in which our algorithm could proceed:

_I 0_

_I 1_

_I 2_

_I 3\=_I__

1

0

0

0

0

1

0

0

In this case, the importance rating of both pages is zero, which tells us nothing about the relative importance of these pages. The problem is that _P2_ has no links. Consequently, it takes some of the importance from page _P1_ in each iterative step but does not pass it on to any other page. This has the effect of draining all the importance from the web. Pages with no links are called _dangling nodes_, and there are, of course, many of them in the real web we want to study. We'll see how to deal with them in a minute, but first let's consider a new way of thinking about the matrix **H** and stationary vector _I_.

### A probabilitistic interpretation of **H**

Imagine that we surf the web at random; that is, when we find ourselves on a web page, we randomly follow one of its links to another page after one second. For instance, if we are on page _Pj_ with _lj_ links, one of which takes us to page _Pi_, the probability that we next end up on _Pi_ page is then ![$ 1/l_j $ ](https://www.ams.org/featurecolumn/images/december2006/index_7.gif) .

As we surf randomly, we will denote by ![$ T_j $ ](https://www.ams.org/featurecolumn/images/december2006/index_8.gif) the fraction of time that we spend on page _Pj_. Then the fraction of the time that we end up on page _Pi_ page coming from _Pj_ is ![$ T_j/l_j $ ](https://www.ams.org/featurecolumn/images/december2006/index_9.gif) . If we end up on _Pi_, we must have come from a page linking to it. This means that

![\[  T_i = \sum_{P_j\in B_i} T_j/l_j  \] ](https://www.ams.org/featurecolumn/images/december2006/index_10.gif)

where the sum is over all the pages _Pj_ linking to _Pi_. Notice that this is the same equation defining the PageRank rankings and so ![$  I(P_i) = T_i $ ](https://www.ams.org/featurecolumn/images/december2006/index_11.gif) . This allows us to interpret a web page's PageRank as the fraction of time that a random surfer spends on that web page. This may make sense if you have ever surfed around for information about a topic you were unfamiliar with: if you follow links for a while, you find yourself coming back to some pages more often than others. Just as "All roads lead to Rome," these are typically more important pages.

Notice that, given this interpretation, it is natural to require that the sum of the entries in the PageRank vector _I_ be one.

Of course, there is a complication in this description: If we surf randomly, at some point we will surely get stuck at a dangling node, a page with no links. To keep going, we will choose the next page at random; that is, we pretend that a dangling node has a link to every other page. This has the effect of modifying the hyperlink matrix **H** by replacing the column of zeroes corresponding to a dangling node with a column in which each entry is 1/_n_. We call this new matrix **S**.

In our previous example, we now have

![](https://www.ams.org/featurecolumn/images/december2006/dangling.jpg)

with matrix

![](https://www.ams.org/featurecolumn/images/december2006/matrix.4.gif)

and eigenvector

![](https://www.ams.org/featurecolumn/images/december2006/eigenvector.4.gif)

In other words, page _P2_ has twice the importance of page _P1_, which may feel about right to you.

The matrix **S** has the pleasant property that the entries are nonnegative and the sum of the entries in each column is one. In other words, it is stochastic. Stochastic matrices have several properties that will prove useful to us. For instance, stochastic matrices always have stationary vectors.

For later purposes, we will note that **S** is obtained from **H** in a simple way. If **A** is the matrix whose entries are all zero except for the columns corresponding to dangling nodes, in which each entry is 1/_n_, then **S** = **H** + **A**.

### How does the power method work?

In general, the power method is a technique for finding an eigenvector of a square matrix corresponding to the eigenvalue with the largest magnitude. In our case, we are looking for an eigenvector of **S** corresponding to the eigenvalue 1. Under the best of circumstances, to be described soon, the other eigenvalues of **S** will have a magnitude smaller than one; that is, ![$ |\lambda| < 1 $ ](https://www.ams.org/featurecolumn/images/december2006/index_12.gif) if ![$ \lambda $ ](https://www.ams.org/featurecolumn/images/december2006/index_13.gif) is an eigenvalue of **S** other than 1.

We will assume that the eigenvalues of **S** are ![$ \lambda_j $ ](https://www.ams.org/featurecolumn/images/december2006/index_14.gif) and that

![\[  1 = \lambda_1 > |\lambda_2| \geq |\lambda_3| \geq \ldots \geq |\lambda_n|   \] ](https://www.ams.org/featurecolumn/images/december2006/index_15.gif)

We will also assume that there is a basis _vj_ of eigenvectors for **S** with corresponding eigenvalues ![$ \lambda_j $ ](https://www.ams.org/featurecolumn/images/december2006/index_16.gif) . This assumption is not necessarily true, but with it we may more easily illustrate how the power method works. We may write our initial vector _I 0_ as

![\[  I^0 = c_1v_1+c_2v_2 + \ldots + c_nv_n  \] ](https://www.ams.org/featurecolumn/images/december2006/index_17.gif)

Then

![ \begin{eqnarray*} I^1={\bf S}I^0 &=&c_1v_1+c_2\lambda_2v_2 + \ldots + c_n\lambda_nv_n \\ I^2={\bf S}I^1 &=&c_1v_1+c_2\lambda_2^2v_2 + \ldots + c_n\lambda_n^2v_n \\ \vdots & & \vdots \\ I^{k}={\bf S}I^{k-1} &=&c_1v_1+c_2\lambda_2^kv_2 + \ldots + c_n\lambda_n^kv_n \\ \end{eqnarray*}  ](https://www.ams.org/featurecolumn/images/december2006/index_18.gif)

Since the eigenvalues ![$ \lambda_j $ ](https://www.ams.org/featurecolumn/images/december2006/index_19.gif) with ![$ j\geq2 $ ](https://www.ams.org/featurecolumn/images/december2006/index_20.gif) have magnitude smaller than one, it follows that ![$ \lambda_j^k\to0 $ ](https://www.ams.org/featurecolumn/images/december2006/index_21.gif) if ![$ j\geq2 $ ](https://www.ams.org/featurecolumn/images/december2006/index_22.gif) and therefore ![$ I^k\to I=c_1v_1 $ ](https://www.ams.org/featurecolumn/images/december2006/index_23.gif) , an eigenvector corresponding to the eigenvalue 1.

It is important to note here that the rate at which ![$ I^k\to I $ ](https://www.ams.org/featurecolumn/images/december2006/index_24.gif) is determined by ![$ |\lambda_2| $ ](https://www.ams.org/featurecolumn/images/december2006/index_25.gif) . When ![$ |\lambda_2| $ ](https://www.ams.org/featurecolumn/images/december2006/index_26.gif) is relatively close to 0, then ![$ \lambda_2^k\to0 $ ](https://www.ams.org/featurecolumn/images/december2006/index_27.gif) relatively quickly. For instance, consider the matrix

![\[  {\bf S} = \left[\begin{array}{cc}0.65 & 0.35 \\ 0.35 & 0.65 \end{array}\right].   \] ](https://www.ams.org/featurecolumn/images/december2006/index_28.gif)

The eigenvalues of this matrix are ![$ \lambda_1=1 $ ](https://www.ams.org/featurecolumn/images/december2006/index_29.gif) and ![$ \lambda_2=0.3 $ ](https://www.ams.org/featurecolumn/images/december2006/index_30.gif) . In the figure below, we see the vectors _I k_, shown in red, converging to the stationary vector _I_ shown in green.

![](https://www.ams.org/featurecolumn/images/december2006/power.1.jpg)

Now consider the matrix

![\[  {\bf S} = \left[\begin{array}{cc}0.85 & 0.15 \\ 0.15 & 0.85 \end{array}\right].   \] ](https://www.ams.org/featurecolumn/images/december2006/index_31.gif)

Here the eigenvalues are ![$ \lambda_1=1 $ ](https://www.ams.org/featurecolumn/images/december2006/index_32.gif) and ![$ \lambda_2=0.7 $ ](https://www.ams.org/featurecolumn/images/december2006/index_33.gif) . Notice how the vectors _I k_ converge more slowly to the stationary vector _I_ in this example in which the second eigenvalue has a larger magnitude.

![](https://www.ams.org/featurecolumn/images/december2006/power.0.jpg)

### When things go wrong

In our discussion above, we assumed that the matrix **S** had the property that ![$ \lambda_1=1 $ ](https://www.ams.org/featurecolumn/images/december2006/index_34.gif) and ![$  |\lambda_2|<1 $ ](https://www.ams.org/featurecolumn/images/december2006/index_35.gif) . This does not always happen, however, for the matrices **S** that we might find.

Suppose that our web looks like this:

![](https://www.ams.org/featurecolumn/images/december2006/cyclic.jpg)

In this case, the matrix **S** is

![](https://www.ams.org/featurecolumn/images/december2006/matrix.1.gif)

Then we see

_I 0_

_I 1_

_I 2_

_I 3_

_I 4_

_I 5_

1

0

0

0

0

1

0

1

0

0

0

0

0

0

1

0

0

0

0

0

0

1

0

0

0

0

0

0

1

0

In this case, the sequence of vectors _I k_ fails to converge. Why is this? The second eigenvalue of the matrix **S** satisfies ![$ |\lambda_2|=1 $ ](https://www.ams.org/featurecolumn/images/december2006/index_36.gif) and so the argument we gave to justify the power method no longer holds.

To guarantee that ![$ |\lambda_2|<1 $ ](https://www.ams.org/featurecolumn/images/december2006/index_37.gif) , we need the matrix **S** to be _primitive_. This means that, for some _m_, **S**_m_ has all positive entries. In other words, if we are given two pages, it is possible to get from the first page to the second after following _m_ links. Clearly, our most recent example does not satisfy this property. In a moment, we will see how to modify our matrix **S** to obtain a primitive, stochastic matrix, which therefore satisfies ![$ |\lambda_2|<1 $ ](https://www.ams.org/featurecolumn/images/december2006/index_38.gif) .

Here's another example showing how our method can fail. Consider the web shown below.

![](https://www.ams.org/featurecolumn/images/december2006/reducible.jpg)

In this case, the matrix **S** is

![](https://www.ams.org/featurecolumn/images/december2006/matrix.2.gif)

with stationary vector

![](https://www.ams.org/featurecolumn/images/december2006/eigenvector.2.gif)

Notice that the PageRanks assigned to the first four web pages are zero. However, this doesn't feel right: each of these pages has links coming to them from other pages. Clearly, somebody likes these pages! Generally speaking, we want the importance rankings of all pages to be positive. The problem with this example is that it contains a smaller web within it, shown in the blue box below.

![](https://www.ams.org/featurecolumn/images/december2006/reduciblewithbox.2.jpg)

Links come into this box, but none go out. Just as in the example of the dangling node we discussed above, these pages form an "importance sink" that drains the importance out of the other four pages. This happens when the matrix **S** is _reducible_; that is, **S** can be written in block form as

![\[  S=\left[\begin{array}{cc} * & 0 \\ * & * \end{array}\right].  \] ](https://www.ams.org/featurecolumn/images/december2006/index_39.gif)

Indeed, if the matrix **S** is irreducible, we can guarantee that there is a stationary vector with all positive entries.

A web is called _strongly connected_ if, given any two pages, there is a way to follow links from the first page to the second. Clearly, our most recent example is not strongly connected. However, strongly connected webs provide irreducible matrices **S**.

To summarize, the matrix **S** is stochastic, which implies that it has a stationary vector. However, we need **S** to also be (a) primitive so that ![$ |\lambda_2|<1 $ ](https://www.ams.org/featurecolumn/images/december2006/index_40.gif) and (b) irreducible so that the stationary vector has all positive entries.

### A final modification

To find a new matrix that is both primitive and irreducible, we will modify the way our random surfer moves through the web. As it stands now, the movement of our random surfer is determined by **S**: either he will follow one of the links on his current page or, if at a page with no links, randomly choose any other page to move to. To make our modification, we will first choose a parameter ![$\alpha$ ](https://www.ams.org/featurecolumn/images/december2006/xx.gif) between 0 and 1. Now suppose that our random surfer moves in a slightly different way. With probability ![$\alpha$ ](https://www.ams.org/featurecolumn/images/december2006/xx.gif) , he is guided by **S**. With probability ![$ 1-\alpha $ ](https://www.ams.org/featurecolumn/images/december2006/index_42.gif) , he chooses the next page at random.

If we denote by **1** the ![$ n\times n $ ](https://www.ams.org/featurecolumn/images/december2006/index_43.gif) matrix whose entries are all one, we obtain the _Google matrix_:

![\[  {\bf G}=\alpha{\bf S}+ (1-\alpha)\frac{1}{n}{\bf 1}  \] ](https://www.ams.org/featurecolumn/images/december2006/index_44.gif)

Notice now that **G** is stochastic as it is a combination of stochastic matrices. Furthermore, all the entries of **G** are positive, which implies that **G** is both primitive and irreducible. Therefore, **G** has a unique stationary vector _I_ that may be found using the power method.

The role of the parameter ![$\alpha$ ](https://www.ams.org/featurecolumn/images/december2006/xx.gif) is an important one. Notice that if ![$ \alpha=1 $ ](https://www.ams.org/featurecolumn/images/december2006/index_45.gif) , then **G** = **S**. This means that we are working with the original hyperlink structure of the web. However, if ![$ \alpha=0 $ ](https://www.ams.org/featurecolumn/images/december2006/index_46.gif) , then ![$ {\bf G}=1/n{\bf 1} $ ](https://www.ams.org/featurecolumn/images/december2006/index_47.gif) . In other words, the web we are considering has a link between any two pages and we have lost the original hyperlink structure of the web. Clearly, we would like to take ![$\alpha$ ](https://www.ams.org/featurecolumn/images/december2006/xx.gif) close to 1 so that we hyperlink structure of the web is weighted heavily into the computation.

However, there is another consideration. Remember that the rate of convergence of the power method is governed by the magnitude of the second eigenvalue ![$ |\lambda_2| $ ](https://www.ams.org/featurecolumn/images/december2006/index_48.gif) . For the Google matrix, it has been proven that the magnitude of the second eigenvalue ![$ |\lambda_2|=\alpha $ ](https://www.ams.org/featurecolumn/images/december2006/index_49.gif) . This means that when ![$\alpha$ ](https://www.ams.org/featurecolumn/images/december2006/xx.gif) is close to 1 the convergence of the power method will be very slow. As a compromise between these two competing interests, Serbey Brin and Larry Page, the creators of PageRank, chose ![$ \alpha=0.85 $ ](https://www.ams.org/featurecolumn/images/december2006/index_50.gif) .

### Computing _I_

What we've described so far looks like a good theory, but remember that we need to apply it to ![$ n\times n $ ](https://www.ams.org/featurecolumn/images/december2006/index_51.gif) matrices where _n_ is about 25 billion! In fact, the power method is especially well-suited to this situation.

Remember that the stochastic matrix **S** may be written as

![\[  {\bf S}={\bf H} + {\bf A}  \] ](https://www.ams.org/featurecolumn/images/december2006/index_52.gif)

and therefore the Google matrix has the form

![\[  {\bf G}=\alpha{\bf H} + \alpha{\bf A} + \frac{1-\alpha}{n}{\bf 1}  \] ](https://www.ams.org/featurecolumn/images/december2006/index_53.gif)

Therefore,

![\[  {\bf G}I^k=\alpha{\bf H}I^k + \alpha{\bf A}I^k + \frac{1-\alpha}{n}{\bf 1}I^k  \] ](https://www.ams.org/featurecolumn/images/december2006/index_54.gif)

Now recall that most of the entries in **H** are zero; on average, only ten entries per column are nonzero. Therefore, evaluating **H**_I k_ requires only ten nonzero terms for each entry in the resulting vector. Also, the rows of **A** are all identical as are the rows of **1**. Therefore, evaluating **A**_I k_ and **1**_I k_ amounts to adding the current importance rankings of the dangling nodes or of all web pages. This only needs to be done once.

With the value of ![$\alpha$ ](https://www.ams.org/featurecolumn/images/december2006/xx.gif) chosen to be near 0.85, Brin and Page report that 50 - 100 iterations are required to obtain a sufficiently good approximation to _I_. The calculation is reported to take a few days to complete.

Of course, the web is continually changing. First, the content of web pages, especially for news organizations, may change frequently. In addition, the underlying hyperlink structure of the web changes as pages are added or removed and links are added or removed. It is rumored that Google recomputes the PageRank vector _I_ roughly every month. Since the PageRank of pages can be observed to fluctuate considerably during this time, it is known to some as the Google Dance. (In 2002, Google held a [Google Dance!](https://www.google.com/googledance2002/))

### Summary

Brin and Page introduced Google in 1998, a time when the pace at which the web was growing began to outstrip the ability of current search engines to yield useable results. At that time, most search engines had been developed by businesses who were not interested in publishing the details of how their products worked. In developing Google, Brin and Page wanted to "push more development and understanding into the academic realm." That is, they hoped, first of all, to improve the design of search engines by moving it into a more open, academic environment. In addition, they felt that the usage statistics for their search engine would provide an interesting data set for research. It appears that the federal government, which recently tried to gain some of Google's statistics, feels the same way.

There are other algorithms that use the hyperlink structure of the web to rank the importance of web pages. One notable example is the HITS algorithm, produced by Jon Kleinberg, which forms the basis of the [Teoma search engine.](http://www.ask.com/) In fact, it is interesting to compare the results of searches sent to different search engines as a way to understand why some complain of a Googleopoly.
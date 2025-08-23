# What is ElasticSearch
ElasticSearch is a near realtime search engine.


## Cluster
* A collection of nodes (servers).
* Consists of one or more nodes, depending on the scale.
* A cluster provides indexing and search capabilities across all nodes.


## Node
* A single server that is part of a ClusterStores searchable data
* Participates in a cluster's indexing and search capabilities. Nodes collaborate on
completing requests.

## Index
* A collection of documents (eg: product, account, movie)
* Corresponds to a database within a relational database system
* You can define as many indexes as you want within a cluster

## Type
* Represents a class or category of similar documents (eg user)
* The Type is equivalent to a table on a relational database
* Stored within a metadata field named '_ type' because because Lucene has no concept of
document types.

## Mapping
* Similar to a database schema for a table in a relational database.
* Describes the fields that a document of a given type may have.
* Includes the data type for each field, eg string, integer, date.
* It includes information on how fields should be indexed and stored by Lucene.
* Dynamic mapping means that it is optional to define a mapping explicitly.

## Document
* A basic unit of information that can be indexed.
* Consists of fields which are key/value pairs.
* A value can be a string, date, object.
* Corresponds to an object in an object-oriented programming language.
* A document can be a single user, order, product etc.
* Documents are expressed in JSON.
* you can store as many documents within an index as you want.

## Shards
* An index can be divided into multiple pieces called Shards.
* Useful if a n index contains more data than the hardware of a node can store (e.g 1TB data on a 500 GB disk).
* A shard is a fully functional and independent index* Can be stored on any node in a cluster.
* The number of shards can be specified when creating an index.
* Allows to scale horizontally by content volume (index space).
* Allows to distribute and parallelize operations across shards, which increases performance.

## Replicas
* A replica is a copy of a shard.
* Provides high availability in case a shard or node fails.
* A replica never resides on the same node as the original shard.
* It allows scaling search volume, because search queries can be executed on all replicas in parallel.
* By default, ElasticSearch adds 5 primary shards and 1 replica for each index. 

Association of ElasticSearch to relational databases
Index --> database
Type --> table
Mapping --> Table schema
Document --> row
Fields of document --> columns



* [] ElasticSearch tutorial and getting started (course preview) https://www.youtube.com/watch?v=ksTTlXNLick&t=3051s (coding_explained)

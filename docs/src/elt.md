# ELT.jl

ETL Data Warehouse vs ELT Data Lake debate, is like vim vs emacs, linux vs windows never ending discussions.

It means different things and may represent different concepts, but end of the day leads to one conclusion.

*Data is a mineral, if you handle it with care and delicacy, polish and move it to a fine safe enclosure, it will age as fine gold.* - Amit Shukla

In the following lessons, we will discuss different strategies to Extract, Transform, Load data from different sources to different enclosures.

**Why this package?**
There are a dozen ETL/ELT and Data warehouse/ Data lake solutions available in the market today. All of them are extremely capable of extraction, load and transforming almost any type of data structure like structured, un-structured, binary, BLOB, sound, image or simple text in large quantities.

``` This package neither challenges or aims to build anything different. ```
.
Instead, this package will use existing RDBMS, DataLakes, or Document databases available in the market.

This package should be seen as providing a DataType environment, where we can first understand and define subject data structure, then do ELT operations on it.
This is what I meant earlier by saying handle with care and delicacy.

``` Inheriting behavior is much more important than being able to inherit structure.```

Just to give an example,
Normally, we ingest all vendor tables/transactions into a Date warehouse or Data lake or any self-service environment, and then let SMEs run meaningful analytics on it.
instead,
Lets first define a Vendor DataType and then build ELT or ETL operations on it.
This simple concept will age your data to fine gold and SME enjoy back seat ride on driverless AI.

Another example is, 
Instead of loading all your accounting data into RDBMS tables,
developers take time to pre-define an accounting Data Structure such as JOURNALS, LEDGER, ACCOUNTINGLINES, CHARTFIELDs and HIERARCHY data types, then ELTdata into these Data Structures and push it to the reporting database.
This will lead to a much powerful driverless self-service live reporting/ predictive analytics environment.

In the following chapters, we will build ELT strategies.

## Extract

## Load

## Transform

Let's get started.



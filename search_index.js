var documenterSearchIndex = {"docs":
[{"location":"elt/#ELT.jl","page":"ELT vs ETL","title":"ELT.jl","text":"","category":"section"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"ETL Data Warehouse vs ELT Data Lake debate, is like vim vs emacs, linux vs windows never ending discussions.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"It means different things and may represent different concepts, but end of the day leads to one conclusion.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"Data is a mineral, if you handle it with care and delicacy, polish and move it to a fine safe enclosure, it will age as fine gold. - Amit Shukla","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"In the following lessons, we will discuss different strategies to Extract, Transform, Load data from different sources to different enclosures.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"Why this package? There are a dozen ETL/ELT and Data warehouse/ Data lake solutions available in the market today. All of them are extremely capable of extraction, load and transforming almost any type of data structure like structured, un-structured, binary, BLOB, sound, image or simple text in large quantities.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"This package neither challenges or aims to build anything different. . Instead, this package will use existing RDBMS, DataLakes, or Document databases available in the market.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"This package should be seen as providing a DataType environment, where we can first understand and define subject data structure, then do ELT operations on it. This is what I meant earlier by saying handle with care and delicacy.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"Inheriting behavior is much more important than being able to inherit structure.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"Just to give an example, Normally, we ingest all vendor tables/transactions into a Date warehouse or Data lake or any self-service environment, and then let SMEs run meaningful analytics on it. instead, Lets first define a Vendor DataType and then build ELT or ETL operations on it. This simple concept will age your data to fine gold and SME enjoy back seat ride on driverless AI.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"Another example is,  Instead of loading all your accounting data into RDBMS tables, developers take time to pre-define an accounting Data Structure such as JOURNALS, LEDGER, ACCOUNTINGLINES, CHARTFIELDs and HIERARCHY data types, then ELTdata into these Data Structures and push it to the reporting database. This will lead to a much powerful driverless self-service live reporting/ predictive analytics environment.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"In the following sections, we will discuss ELT & ELT strategies.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"","category":"page"},{"location":"elt/#Extract","page":"ELT vs ETL","title":"Extract","text":"","category":"section"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"Data Extraction from a known source is simple, the difficult part is, automating to fetch data on pre-defined schedules. Further, almost impossible task is, identify deltas on every single data extract execution and fetch only changed datasets.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"In this lesson, we will see different strategies to extract different types of data.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"**Stage or not to stage: ** keeping an original copy of data into a local/hadoop directory or storing the first original copy in RDBMS tables brings extra benefit to your Analytics. You will always be able to go back in time and restore from originals, however, it also brings unmanageable clutter, junk and storage costs.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"Before trying to read data from source, you must think, how would you want to use it in near future.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"You can store the original copy as-is to a directory or RDBMS table. This works well, when you are dealing with txt, image files. Storage is cheaper than computing.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"for example","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"consider storing a copy of the APPL SEC Balance sheet filing PDF from the internet rather than building NLP AI to read certain dollar amounts or quantities from a PDF.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"Your AI scripts will bill more for compute hours than storing a few extra KBs.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"on contrast, reading 5 lines from 5000 pages PDF, doesn't justify the need to store the entire document. Instead, use a web crawler or good OCR or text reader AI-bot to fetch data that is meaningful to you.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"while reading data from a RDBMS, consider using a where lastupdatedate > lastrundate to fetch only deltas.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"storing <last_run_date> will be discussed in *LOAD* section later.","category":"page"},{"location":"elt/#automating-data-pull","page":"ELT vs ETL","title":"automating data pull","text":"","category":"section"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"In this section, we will build a simple script and automate to run it on certain schedules.","category":"page"},{"location":"elt/#file-download","page":"ELT vs ETL","title":"file download","text":"","category":"section"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"In this section, We will download a simple file from a website, FTP or hadoop location.","category":"page"},{"location":"elt/#web-crawler","page":"ELT vs ETL","title":"web crawler","text":"","category":"section"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"using Selenium and webdriver.jl to crawl the web, search & load data from the website.","category":"page"},{"location":"elt/#RDBMS","page":"ELT vs ETL","title":"RDBMS","text":"","category":"section"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"connecting to Oracle, MY SQL or MS SQL Server","category":"page"},{"location":"elt/#JSON,-XML","page":"ELT vs ETL","title":"JSON, XML","text":"","category":"section"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"working with JSON, XML like files and parsing data","category":"page"},{"location":"elt/#Load","page":"ELT vs ETL","title":"Load","text":"","category":"section"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"Now once data is identified, we will need a storage system, typically a database, data warehouse or data lake to keep data. Before loading into a Target system, let's work on our load strategy.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"Think of these scenarios you will be dealing after data is loaded.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"simple excel files first row will be used as RDBMS table names. Often, RDBMS will change column headers and this will be a challenge to map with original excel files each time a newer file is downloaded.\nyou dont want to fetch the same file if it already exists in the local/hadoop directory.\nin case of RDBMS, you may want to mark each record with CRUD date (when a row was first created, updated and read. You may never want to hard delete a row, and just do a soft delete instead to hide from the user's view).","category":"page"},{"location":"elt/#Transform","page":"ELT vs ETL","title":"Transform","text":"","category":"section"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"What seems hardest, is the easiest part to deal with. Once a correct dataset is read and loaded into the system. There are several transformation techniques and tools available.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"In ELT like environments, Transformation is mostly done on Analytical tool, like Microsoft Power BI, Tableau, Oracle Analytics are extremely powerful and provide out of the box transformation techniques.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"However, here are some useful scripts, which can be run on local environment for data cleansing. These scripts are extremely powerful when dealing with extreme large Big data sets.","category":"page"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"removing unwanted chars in columns headers or rows.\nremoving duplicates\nremoving missing, NA\nreplacing chars/ strings\ncategorizing data\ncreating Hierarchy, Tree like dimensional structure","category":"page"},{"location":"elt/#ETL-Data-warehouse","page":"ELT vs ETL","title":"ETL Data warehouse","text":"","category":"section"},{"location":"elt/","page":"ELT vs ETL","title":"ELT vs ETL","text":"Lets discuss how to create a Data warehouse like structure while ETL- extracting, loading and transforming data into a Data warehouse structure for faster ad-hoc self service star-schema like reporting.","category":"page"},{"location":"ds/#Data-Science-Operations","page":"Data Science Operations","title":"Data Science Operations","text":"","category":"section"},{"location":"ds/","page":"Data Science Operations","title":"Data Science Operations","text":"Taxes are monetary charges collected by governments to fund building, maintaining and growth local and federal community infrastructure. These taxes are imposed on individuals and organizations.","category":"page"},{"location":"ds/","page":"Data Science Operations","title":"Data Science Operations","text":"The scope of this package is limited to tax data analytics for organizations only.","category":"page"},{"location":"ds/","page":"Data Science Operations","title":"Data Science Operations","text":"Problem Statement: ","category":"page"},{"location":"ds/","page":"Data Science Operations","title":"Data Science Operations","text":"Often vendor invoices are inclusive of sales, use, freight and other taxes as applicable on Good & Services offered.","category":"page"},{"location":"ds/","page":"Data Science Operations","title":"Data Science Operations","text":"However, due to various laws and tax exemptions available, buyers are overcharged due to lack of a vigilant business process.  Larger the organization, bigger the over accrued tax amounts are.","category":"page"},{"location":"ds/","page":"Data Science Operations","title":"Data Science Operations","text":"Over the period of time, Organizations bear huge costs to sort, correct and claim these over accrued invoices, taxes and spend tremendous amounts of time money to correct these invoices, which could have been prevented at data ingestion.","category":"page"},{"location":"ds/","page":"Data Science Operations","title":"Data Science Operations","text":"This package addresses the above problem statement.","category":"page"},{"location":"ds/","page":"Data Science Operations","title":"Data Science Operations","text":"TaxAnalytics.jl package is used to automate loading, sorting, finding patterns and mis-match on such Vendor or general Accounts Payable transactions.","category":"page"},{"location":"ds/","page":"Data Science Operations","title":"Data Science Operations","text":"Further, TaxAanlytics.jl package can be used as a platform to build live, ad-hoc, analytics, advance visualization and data science operations on Accounts Payable data.","category":"page"},{"location":"ds/","page":"Data Science Operations","title":"Data Science Operations","text":"This package helps load data from various source including structured / unstructured data to a unified platform and build an advanced self-service analytic data reporting environment.","category":"page"},{"location":"features/#Features-Engineering","page":"Feature Engineering","title":"Features Engineering","text":"","category":"section"},{"location":"features/","page":"Feature Engineering","title":"Feature Engineering","text":"Taxes are monetary charges collected by governments to fund building, maintaining and growth local and federal community infrastructure. These taxes are imposed on individuals and organizations.","category":"page"},{"location":"features/","page":"Feature Engineering","title":"Feature Engineering","text":"The scope of this package is limited to tax data analytics for organizations only.","category":"page"},{"location":"features/","page":"Feature Engineering","title":"Feature Engineering","text":"Problem Statement: ","category":"page"},{"location":"features/","page":"Feature Engineering","title":"Feature Engineering","text":"Often vendor invoices are inclusive of sales, use, freight and other taxes as applicable on Good & Services offered.","category":"page"},{"location":"features/","page":"Feature Engineering","title":"Feature Engineering","text":"However, due to various laws and tax exemptions available, buyers are overcharged due to lack of a vigilant business process.  Larger the organization, bigger the over accrued tax amounts are.","category":"page"},{"location":"features/","page":"Feature Engineering","title":"Feature Engineering","text":"Over the period of time, Organizations bear huge costs to sort, correct and claim these over accrued invoices, taxes and spend tremendous amounts of time money to correct these invoices, which could have been prevented at data ingestion.","category":"page"},{"location":"features/","page":"Feature Engineering","title":"Feature Engineering","text":"This package addresses the above problem statement.","category":"page"},{"location":"features/","page":"Feature Engineering","title":"Feature Engineering","text":"TaxAnalytics.jl package is used to automate loading, sorting, finding patterns and mis-match on such Vendor or general Accounts Payable transactions.","category":"page"},{"location":"features/","page":"Feature Engineering","title":"Feature Engineering","text":"Further, TaxAanlytics.jl package can be used as a platform to build live, ad-hoc, analytics, advance visualization and data science operations on Accounts Payable data.","category":"page"},{"location":"features/","page":"Feature Engineering","title":"Feature Engineering","text":"This package helps load data from various source including structured / unstructured data to a unified platform and build an advanced self-service analytic data reporting environment.","category":"page"},{"location":"visuals/#Data-Visualizations","page":"Data Visualization","title":"Data Visualizations","text":"","category":"section"},{"location":"visuals/","page":"Data Visualization","title":"Data Visualization","text":"Taxes are monetary charges collected by governments to fund building, maintaining and growth local and federal community infrastructure. These taxes are imposed on individuals and organizations.","category":"page"},{"location":"visuals/","page":"Data Visualization","title":"Data Visualization","text":"The scope of this package is limited to tax data analytics for organizations only.","category":"page"},{"location":"visuals/","page":"Data Visualization","title":"Data Visualization","text":"Problem Statement: ","category":"page"},{"location":"visuals/","page":"Data Visualization","title":"Data Visualization","text":"Often vendor invoices are inclusive of sales, use, freight and other taxes as applicable on Good & Services offered.","category":"page"},{"location":"visuals/","page":"Data Visualization","title":"Data Visualization","text":"However, due to various laws and tax exemptions available, buyers are overcharged due to lack of a vigilant business process.  Larger the organization, bigger the over accrued tax amounts are.","category":"page"},{"location":"visuals/","page":"Data Visualization","title":"Data Visualization","text":"Over the period of time, Organizations bear huge costs to sort, correct and claim these over accrued invoices, taxes and spend tremendous amounts of time money to correct these invoices, which could have been prevented at data ingestion.","category":"page"},{"location":"visuals/","page":"Data Visualization","title":"Data Visualization","text":"This package addresses the above problem statement.","category":"page"},{"location":"visuals/","page":"Data Visualization","title":"Data Visualization","text":"TaxAnalytics.jl package is used to automate loading, sorting, finding patterns and mis-match on such Vendor or general Accounts Payable transactions.","category":"page"},{"location":"visuals/","page":"Data Visualization","title":"Data Visualization","text":"Further, TaxAanlytics.jl package can be used as a platform to build live, ad-hoc, analytics, advance visualization and data science operations on Accounts Payable data.","category":"page"},{"location":"visuals/","page":"Data Visualization","title":"Data Visualization","text":"This package helps load data from various source including structured / unstructured data to a unified platform and build an advanced self-service analytic data reporting environment.","category":"page"},{"location":"tax/#About-Taxes","page":"About Taxes","title":"About Taxes","text":"","category":"section"},{"location":"tax/","page":"About Taxes","title":"About Taxes","text":"Taxes are monetary charges collected by governments to fund building, maintaining and growth local and federal community infrastructure. These taxes are imposed on individuals and organizations.","category":"page"},{"location":"tax/","page":"About Taxes","title":"About Taxes","text":"The scope of this package is limited to tax data analytics for organizations only.","category":"page"},{"location":"tax/","page":"About Taxes","title":"About Taxes","text":"Problem Statement: ","category":"page"},{"location":"tax/","page":"About Taxes","title":"About Taxes","text":"Often vendor invoices are inclusive of sales, use, freight and other taxes as applicable on Good & Services offered.","category":"page"},{"location":"tax/","page":"About Taxes","title":"About Taxes","text":"However, due to various laws and tax exemptions available, buyers are overcharged due to lack of a vigilant business process.  Larger the organization, bigger the over accrued tax amounts are.","category":"page"},{"location":"tax/","page":"About Taxes","title":"About Taxes","text":"Over the period of time, Organizations bear huge costs to sort, correct and claim these over accrued invoices, taxes and spend tremendous amounts of time money to correct these invoices, which could have been prevented at data ingestion.","category":"page"},{"location":"tax/","page":"About Taxes","title":"About Taxes","text":"This package addresses the above problem statement.","category":"page"},{"location":"tax/","page":"About Taxes","title":"About Taxes","text":"TaxAnalytics.jl package is used to automate loading, sorting, finding patterns and mis-match on such Vendor or general Accounts Payable transactions.","category":"page"},{"location":"tax/","page":"About Taxes","title":"About Taxes","text":"Further, TaxAanlytics.jl package can be used as a platform to build live, ad-hoc, analytics, advance visualization and data science operations on Accounts Payable data.","category":"page"},{"location":"tax/","page":"About Taxes","title":"About Taxes","text":"This package helps load data from various source including structured / unstructured data to a unified platform and build an advanced self-service analytic data reporting environment.","category":"page"},{"location":"ml/#ML-Models","page":"Deploy ML Models","title":"ML Models","text":"","category":"section"},{"location":"ml/","page":"Deploy ML Models","title":"Deploy ML Models","text":"Taxes are monetary charges collected by governments to fund building, maintaining and growth local and federal community infrastructure. These taxes are imposed on individuals and organizations.","category":"page"},{"location":"ml/","page":"Deploy ML Models","title":"Deploy ML Models","text":"The scope of this package is limited to tax data analytics for organizations only.","category":"page"},{"location":"ml/","page":"Deploy ML Models","title":"Deploy ML Models","text":"Problem Statement: ","category":"page"},{"location":"ml/","page":"Deploy ML Models","title":"Deploy ML Models","text":"Often vendor invoices are inclusive of sales, use, freight and other taxes as applicable on Good & Services offered.","category":"page"},{"location":"ml/","page":"Deploy ML Models","title":"Deploy ML Models","text":"However, due to various laws and tax exemptions available, buyers are overcharged due to lack of a vigilant business process.  Larger the organization, bigger the over accrued tax amounts are.","category":"page"},{"location":"ml/","page":"Deploy ML Models","title":"Deploy ML Models","text":"Over the period of time, Organizations bear huge costs to sort, correct and claim these over accrued invoices, taxes and spend tremendous amounts of time money to correct these invoices, which could have been prevented at data ingestion.","category":"page"},{"location":"ml/","page":"Deploy ML Models","title":"Deploy ML Models","text":"This package addresses the above problem statement.","category":"page"},{"location":"ml/","page":"Deploy ML Models","title":"Deploy ML Models","text":"TaxAnalytics.jl package is used to automate loading, sorting, finding patterns and mis-match on such Vendor or general Accounts Payable transactions.","category":"page"},{"location":"ml/","page":"Deploy ML Models","title":"Deploy ML Models","text":"Further, TaxAanlytics.jl package can be used as a platform to build live, ad-hoc, analytics, advance visualization and data science operations on Accounts Payable data.","category":"page"},{"location":"ml/","page":"Deploy ML Models","title":"Deploy ML Models","text":"This package helps load data from various source including structured / unstructured data to a unified platform and build an advanced self-service analytic data reporting environment.","category":"page"},{"location":"#TaxAnalytics.jl","page":"Introduction","title":"TaxAnalytics.jl","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"TaxAnalytics Julia package provide a unified Analytics platform to support data analytical operations on all sort of Vendor, Use, Freight, Misc Tax Accruals data.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Objective: TaxAnalytics package is one complete solution to address complete Tax data wrangling operations.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"This package will provide a complete Analytic Software package, which can be deployed as a bolt-on or independent application for all data extract, load, transformation, ad-hoc reporting & Analytics, visualizations and tooling to support Data Science, AI, ML predictive Analytics.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"This package is intended for small, medium, large and very Big Organizations who require a Big Data Tools which can ELT i.e. Extract very large amount of structured and unstructured data, load data into a uniform platform such as RDBMS, Hadoop Data Lake or non-SQL environment.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"info: Info\nPlatform: Oracle OCI, AWS, Google or Microsoft Azure data cloud.Analytics: Power BI, Tableau, Oracle Analytics Cloud or KibanaELT/ETL: Ascential Datastage, Informatica, Ab Initio etc. Programming/Framework: Python, Julia, JuliaDB, Pytorch, TensorFlow or Flux","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Further, advance data transformation wrangling techniques can be applied to prepare data for operations reporting, data analytic, advance data visualizations, data science operations including AI, ML for predictions.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"This package also show case reporting, visualizations to support real time, live reporting on all mobile, web devices. ","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"info: Info\nAuthor: Amit ShuklaLast Update Date: Jan 25, 2021Who should read this: small, medium, large ERP ConsultantsVersion: 0.22Consulting: info@elishconsulting.comSponsorship: open for funding","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Business Process diagram","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"(Image: Business Process Diagram)","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Technical Process Diagram","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"(Image: Tech Process Diagram)","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"note: Note\nERP Systems- Oracle, PeopleSoft, SAP, Intuit etc.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Pages = [\"tax.md\", \"elt.md\", \"service.md\", \"visuals.md\", \"ds.md\", \"thesis.md\", \"features.md\", \"ml.md\"]\nDepth = 3","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Table of Contents:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"About Taxes\nETL or ETL\nself service data analysis\nData Visualization\nData Science Operations\np-value Null hypothesis tests\nFeature Engineering\nML Models\nLive Reporting\nPredictive analytic","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"!!! info ERP Systems     Oracle, PeopleSoft, SAP, Tally, Intuit, QuickBooks etc.     I will cover examples from ERP Domains like GL (General Ledger), AP (Accounts Payable), AR (Account Receivables), B2P (Buy to Pay), Expense, Travel & Time, HCM Human Capital Management, CRM etc.","category":"page"},{"location":"thesis/#Null-Hypothesis-Tests","page":"p-value Null hypothesis tests","title":"Null Hypothesis Tests","text":"","category":"section"},{"location":"thesis/","page":"p-value Null hypothesis tests","title":"p-value Null hypothesis tests","text":"Taxes are monetary charges collected by governments to fund building, maintaining and growth local and federal community infrastructure. These taxes are imposed on individuals and organizations.","category":"page"},{"location":"thesis/","page":"p-value Null hypothesis tests","title":"p-value Null hypothesis tests","text":"The scope of this package is limited to tax data analytics for organizations only.","category":"page"},{"location":"thesis/","page":"p-value Null hypothesis tests","title":"p-value Null hypothesis tests","text":"Problem Statement: ","category":"page"},{"location":"thesis/","page":"p-value Null hypothesis tests","title":"p-value Null hypothesis tests","text":"Often vendor invoices are inclusive of sales, use, freight and other taxes as applicable on Good & Services offered.","category":"page"},{"location":"thesis/","page":"p-value Null hypothesis tests","title":"p-value Null hypothesis tests","text":"However, due to various laws and tax exemptions available, buyers are overcharged due to lack of a vigilant business process.  Larger the organization, bigger the over accrued tax amounts are.","category":"page"},{"location":"thesis/","page":"p-value Null hypothesis tests","title":"p-value Null hypothesis tests","text":"Over the period of time, Organizations bear huge costs to sort, correct and claim these over accrued invoices, taxes and spend tremendous amounts of time money to correct these invoices, which could have been prevented at data ingestion.","category":"page"},{"location":"thesis/","page":"p-value Null hypothesis tests","title":"p-value Null hypothesis tests","text":"This package addresses the above problem statement.","category":"page"},{"location":"thesis/","page":"p-value Null hypothesis tests","title":"p-value Null hypothesis tests","text":"TaxAnalytics.jl package is used to automate loading, sorting, finding patterns and mis-match on such Vendor or general Accounts Payable transactions.","category":"page"},{"location":"thesis/","page":"p-value Null hypothesis tests","title":"p-value Null hypothesis tests","text":"Further, TaxAanlytics.jl package can be used as a platform to build live, ad-hoc, analytics, advance visualization and data science operations on Accounts Payable data.","category":"page"},{"location":"thesis/","page":"p-value Null hypothesis tests","title":"p-value Null hypothesis tests","text":"This package helps load data from various source including structured / unstructured data to a unified platform and build an advanced self-service analytic data reporting environment.","category":"page"},{"location":"service/#Self-Service-Reporting","page":"Self-Service Data Analysis","title":"Self-Service Reporting","text":"","category":"section"},{"location":"service/","page":"Self-Service Data Analysis","title":"Self-Service Data Analysis","text":"Taxes are monetary charges collected by governments to fund building, maintaining and growth local and federal community infrastructure. These taxes are imposed on individuals and organizations.","category":"page"},{"location":"service/","page":"Self-Service Data Analysis","title":"Self-Service Data Analysis","text":"The scope of this package is limited to tax data analytics for organizations only.","category":"page"},{"location":"service/","page":"Self-Service Data Analysis","title":"Self-Service Data Analysis","text":"Problem Statement: ","category":"page"},{"location":"service/","page":"Self-Service Data Analysis","title":"Self-Service Data Analysis","text":"Often vendor invoices are inclusive of sales, use, freight and other taxes as applicable on Good & Services offered.","category":"page"},{"location":"service/","page":"Self-Service Data Analysis","title":"Self-Service Data Analysis","text":"However, due to various laws and tax exemptions available, buyers are overcharged due to lack of a vigilant business process.  Larger the organization, bigger the over accrued tax amounts are.","category":"page"},{"location":"service/","page":"Self-Service Data Analysis","title":"Self-Service Data Analysis","text":"Over the period of time, Organizations bear huge costs to sort, correct and claim these over accrued invoices, taxes and spend tremendous amounts of time money to correct these invoices, which could have been prevented at data ingestion.","category":"page"},{"location":"service/","page":"Self-Service Data Analysis","title":"Self-Service Data Analysis","text":"This package addresses the above problem statement.","category":"page"},{"location":"service/","page":"Self-Service Data Analysis","title":"Self-Service Data Analysis","text":"TaxAnalytics.jl package is used to automate loading, sorting, finding patterns and mis-match on such Vendor or general Accounts Payable transactions.","category":"page"},{"location":"service/","page":"Self-Service Data Analysis","title":"Self-Service Data Analysis","text":"Further, TaxAanlytics.jl package can be used as a platform to build live, ad-hoc, analytics, advance visualization and data science operations on Accounts Payable data.","category":"page"},{"location":"service/","page":"Self-Service Data Analysis","title":"Self-Service Data Analysis","text":"This package helps load data from various source including structured / unstructured data to a unified platform and build an advanced self-service analytic data reporting environment.","category":"page"}]
}
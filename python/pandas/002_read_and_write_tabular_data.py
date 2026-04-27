import pandas as pd

# Reference: https://pandas.pydata.org/docs/getting_started/intro_tutorials/02_read_write.html

# Read the Titanic dataset from a CSV file
titanic = pd.read_csv('titanic.csv')
print(titanic.head(8)) # Display the first 8 rows of the DataFrame
print(titanic.dtypes) # Display the data types of each column

titanic.to_excel('titanic.xlsx', sheet_name="passengers", index=False) # Write the DataFrame to an Excel file without the index

titanic1 = pd.read_excel('titanic.xlsx', sheet_name="passengers") # Read the Excel file back into a DataFrame
print(titanic1.head(8)) # Display the first 8 rows of the new DataFrame
print(titanic1.info()) # Display information about the DataFrame, including data types and non-null counts
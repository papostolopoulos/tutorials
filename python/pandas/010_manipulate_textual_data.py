import pandas as pd

# Reference: https://pandas.pydata.org/docs/getting_started/intro_tutorials/10_text_data.html

titanic = pd.read_csv('titanic.csv') # Read the Titanic dataset from a CSV file into a DataFrame

print(titanic["Name"].str.lower()) # Convert all string values in the DataFrame to lowercase using the str.lower method

# Extract the surname from the "Name" column by splitting the string on the comma and taking the first part, and store it in a new column called "Surname"
titanic["Surname"] = titanic["Name"].str.split(",").str[0] 
print(titanic["Surname"]) # Print the "Surname" column of the DataFrame

# Create a boolean Series that indicates whether each name in the "Name" column contains the substring "Countess" using the str.contains method, and print the resulting Series
name_contains_countess = titanic[titanic["Name"].str.contains("Countess")]
print(name_contains_countess) 

name_length = titanic["Name"].str.len() # Calculate the length of each name in the "Name" column using the str.len method and store it in a new Series called "name_length"
print(name_length) # Print the "name_length" Series

# Find the index of the longest name in the "Name" column by using the str.len method to calculate the length of each name, and then using the idxmax method to find the index of the maximum length
longest_name = titanic["Name"].str.len().idxmax() 
print(longest_name) # Print the index of the longest name in the "Name" column

# Use the loc indexer to access the value in the "Name" column at the index of the longest name, and print the longest name
longest_name = titanic.loc[titanic["Name"].str.len().idxmax(), "Name"]
print(longest_name) # Print the longest name in the "Name" column by using the loc indexer to access the value at the index of the longest name
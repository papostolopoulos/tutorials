import pandas as pd

# Reference https://pandas.pydata.org/docs/getting_started/intro_tutorials/03_subset_data.html

# Read the Titanic dataset from a CSV file
titanic = pd.read_csv('titanic.csv')

# Select a subset of columns from the DataFrame
age_sex_subset = titanic[['Age', 'Sex']]  # Select only the 'Age' and 'Sex' columns
print(age_sex_subset.head())  # Display the first few rows of the subset DataFrame

print(type(titanic[['Age', 'Sex']]))  # Confirm that the result is a DataFrame
print(titanic[['Age','Sex']].shape)  # Display the shape of the subset DataFrame (rows, columns)

# Select rows where 'Age' is greater than 30
above_30 = titanic[titanic['Age'] > 30]  # Select rows where 'Age' is greater than 30
print(above_30.head())  # Display the first few rows of the filtered DataFrame

# Select rows where 'Pclass' is either 2 or 3. 
# The method .isin() is used to check if the values in the 'Pclass' column are in the list [2, 3], and the resulting boolean Series is used to filter the DataFrame.
class_23 = titanic[titanic['Pclass'].isin([2, 3])]  # Select rows where 'Pclass' is either 2 or 3
print(class_23.head())  # Display the first few rows of the filtered DataFrame

# The above is equivalent to filtering by rows for which the class is either 2 or 3 and combining the two statements with an | (or) operator
class_23_alt = titanic[(titanic['Pclass'] == 2) | (titanic['Pclass'] == 3)]  # Alternative way to select rows where 'Pclass' is either 2 or 3
print(class_23_alt.head())  # Display the first few rows of the filtered DataFrame

# Select rows where 'Age' is not null (not NA). 
# The method .notna() is used to check for non-null values in the 'Age' column, and the resulting boolean Series is used to filter the DataFrame.
age_no_na = titanic[titanic['Age'].notna()]  # Select rows where 'Age' is not null (not NA)
print(age_no_na.head())  # Display the first few rows of the filtered DataFrame

# Select the 'Name' column for rows where 'Age' is greater than or equal to 18. 
# The method .loc[] is used to select rows and columns by label. The first argument specifies the row selection criteria, and the second argument specifies the column(s) to select.
adult_names = titanic.loc[titanic['Age'] >= 18, 'Name']  # Select the 'Name' column for rows where 'Age' is greater than or equal to 18
print(adult_names.head())  # Display the first few names of adults in the dataset

# Select a subset of the DataFrame using .iloc[] for integer-location based indexing.
subset = titanic.iloc[9:25, 2:5]  # Select rows from index 9 to 24 (inclusive) and columns from index 2 to 4 (inclusive) using .iloc[] for integer-location based indexing
print(subset)  # Display the selected subset of the DataFrame
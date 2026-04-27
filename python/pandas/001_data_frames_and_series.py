import pandas as pd

# Reference: https://pandas.pydata.org/docs/getting_started/intro_tutorials/01_table_oriented.html

# Create a DataFrame with duplicate column names
df = pd.DataFrame({
    'Name' : ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
    'Age' : [25, 30, 35, 40, 45],
    'City' : ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
    'Gender' : ['F', 'M', 'M', 'M', 'F'],
})

print(df)
print(df['Name'])  # Accessing the 'Name' column

# Create a Series with the name 'Age'
ages = pd.Series([25, 30, 35, 40, 45], name='Age')
print(ages)  # Print the 'Age' Series


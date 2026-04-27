import pandas as pd
import matplotlib.pyplot as plt

# Reference: https://pandas.pydata.org/docs/getting_started/intro_tutorials/07_reshape_table_layout.html

titanic = pd.read_csv('titanic.csv') # Read the Titanic dataset from a CSV file into a DataFrame
air_quality = pd.read_csv('air_quality_long.csv', index_col='date.utc', parse_dates=True) # Read the air quality dataset from a CSV file, setting the first column as the index and parsing it as dates

# Sort the DataFrame by the "Age" column in ascending order using the sort_values method
sort_by_age = titanic.sort_values(by="Age")
print(sort_by_age.head()) # Print the first few rows of the sorted DataFrame

# Sort the DataFrame by the "Pclass" column in ascending order and then by the "Age" column in descending order using the sort_values method
sort_by_pclass_age = titanic.sort_values(by=["Pclass", "Age"], ascending=[True, False]) 
print(sort_by_pclass_age.head()) # Print the first few rows of the sorted DataFrame

# Select rows from the air_quality DataFrame where the "parameter" column is equal to "no2"
no2 = air_quality[air_quality["parameter"] == "no2"] # Select rows from the air_quality DataFrame where the "parameter" column is equal to "no2"
print(no2.head()) # Print the first few rows of the filtered DataFrame

# Sort the no2 DataFrame by the index (which is the date) in ascending order, group it by the "location" column, and select the first 2 rows for each location using the sort_index, groupby, and head methods
no2_subset = no2.sort_index().groupby(["location"]).head(2)
print(no2_subset) # Print the subset of the no2 DataFrame

# # Pivot the no2_subset DataFrame to reshape it from a long format to a wide format using the pivot method, where the columns are defined by the unique values in the "location" column 
# and the values are taken from the "value" column
no2_pivot = no2_subset.pivot(columns="location", values="value") 
print(no2_pivot) # Print the pivoted DataFrame

no2.pivot(columns="location", values="value").plot() # Pivot the no2 DataFrame and plot the resulting DataFrame using the plot method, which creates a line plot by default
plt.show() # Display the plot using the show function from the matplotlib library

# Create a pivot table from the air_quality DataFrame using the pivot_table method, where the values are taken from the "value" column, the index (rows) is defined by the unique values 
# in the "location" column, and the columns are defined by the unique values in the "parameter" column, with the mean function applied to aggregate the values
mean_no2_pm25 = air_quality.pivot_table(values='value', index='location', columns='parameter', aggfunc='mean') 
print(mean_no2_pm25) # Print the pivot table containing the mean values for each location and parameter

# Create a pivot table from the air_quality DataFrame using the pivot_table method, where the values are taken from the "value" column, 
# the index (rows) is defined by the unique values in the "location" column, and the columns are defined by the unique values in the "parameter" column, 
# with the mean function applied to aggregate the values and margins (subtotals) set to True to include subtotals for each row and column.
mean_no2_pm25_margin = air_quality.pivot_table(values='value', index='location', columns='parameter', aggfunc='mean', margins=True)
print(mean_no2_pm25_margin) # Print the pivot table containing the mean values for each location and parameter with margins

# Note: pivot_table() is linked to groupby() and can be used to perform groupby operations on the data while reshaping it. 
# The pivot_table method allows you to specify the aggregation function (aggfunc) to apply to the values when there are multiple entries 
# for a given index/column combination, whereas the pivot method does not allow for aggregation and will raise an error if there are duplicate entries.

# Pivot the no2 DataFrame and reset the index to convert the date index back into a regular column
no2_pivoted = no2.pivot(columns="location", values="value").reset_index() 
print(no2_pivoted.head()) # Print the first few rows of the pivoted Data

# .melt() is the inverse of pivot() and can be used to reshape a DataFrame from a wide format back to a long format.
# Reshape the no2_pivoted DataFrame from a wide format back to a long format using the melt method, where the id_vars parameter 
# specifies the column to use as identifier variables, var_name specifies the name for the variable column, and value_name specifies the name for the value column
no_2 = no2_pivoted.melt(id_vars="date.utc", var_name="location", value_name="value") 
print(no_2.head()) # Print the first few rows of the reshaped DataFrame
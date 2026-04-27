import pandas as pd

# Reference: https://pandas.pydata.org/docs/getting_started/intro_tutorials/06_calculate_statistics.html

titanic = pd.read_csv('titanic.csv') # Read the Titanic dataset from a CSV file into a DataFrame

# Calculate the mean of the "Age" column in the DataFrame using the mean method
avg = titanic['Age'].mean() 
print(avg) # Print the mean value for the "Age" column

# Calculate the median of the "Age" and "Fare" columns in the DataFrame using the median method
age_fare_median = titanic[["Age", "Fare"]].median() 
print(age_fare_median) # Print the median values for the "Age" and "Fare" columns

# Calculate summary statistics for the "Age" and "Fare" columns in the DataFrame using the describe method, 
# which returns a DataFrame containing various statistics such as count, mean, standard deviation, minimum, and maximum values
age_fare_describe = titanic[["Age", "Fare"]].describe() 
print(age_fare_describe) # Print the summary statistics for the "Age" and "Fare" columns

# Calculate specific summary statistics (minimum, maximum, mean, and median) for the "Age" and "Fare" columns in the DataFrame using the agg method
age_fare_aggregate = titanic[["Age", "Fare"]].agg(["min", "max", "mean", "median"]) 
print(age_fare_aggregate) # Print the aggregated summary statistics for the "Age" and "Fare" columns

# Group the "Age" and "Sex" columns by the "Sex" column and calculate the mean age for each sex using the groupby method followed by the mean method
age_sex_groupby = titanic[["Age", "Sex"]].groupby("Sex").mean()
print(age_sex_groupby) # Print the grouped summary statistics for the "Age" and "Sex" columns

#In the previous example, we explicitly selected the 2 columns first. If not, the mean method 
# is applied to each column containing numerical columns by passing numeric_only=True
# Group the DataFrame by the "Sex" column and calculate the mean for each numerical column using the groupby method followed by the mean method with numeric_only=True to apply it only to numerical columns
sex_group_by = titanic.groupby("Sex").mean(numeric_only=True) 
print(sex_group_by) # Print the grouped summary statistics for all numerical columns in the DataFrame grouped by the "Sex" column

# Group the DataFrame by the "Sex" and "Pclass" columns, select the "Fare" column, and calculate the mean fare for each group using the groupby method followed by the mean method
sex_pclass_group_by_fare_mean = titanic.groupby(["Sex", "Pclass"])["Fare"].mean() 
print(sex_pclass_group_by_fare_mean) # Print the grouped summary statistics for the "Fare" column in the DataFrame grouped by the "Sex" and "Pclass" columns

# Calculate the count of each unique value in the "Pclass" column using the value_counts method
pclass_value_counts = titanic["Pclass"].value_counts() # Alternatively you can write the code as titanic.groupby("Pclass")["Pclass"].count()
print(pclass_value_counts) # Print the count of each unique value in the "Pclass" column

# Both size and count can be used in combination with groupby. Whereas size includes NaN values and just provides the number of rows (size of the table), 
# count excludes the missing values. In the value_counts method, use the dropna argument to include or exclude the NaN values.
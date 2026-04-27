import pandas as pd

# Reference: https://pandas.pydata.org/docs/getting_started/intro_tutorials/05_add_columns.html

air_quality = pd.read_csv('air_quality_no2.csv', index_col=0, parse_dates=True) # Read the air quality dataset from a CSV file, setting the first column as the index and parsing it as dates

# Create a new column "london_mg_per_cubic" by multiplying the values in the "station_london" column by 1.882, which converts the NO2 concentration from µg/m³ to mg/m³
# The calculation of the values is done element-wise. This means all values in the given column are multiplied by the value 1.882 at once. You do not need to use a loop to iterate each of the rows!
air_quality["london_mg_per_cubic"] = air_quality["station_london"] * 1.882 # Create a new column "london_mg_per_cubic" by multiplying the values in the "station_london" column by 1.882, 
# which converts the NO2 concentration from µg/m³ to mg/m³
print(air_quality.head()) # Print the first few rows of the updated DataFrame to verify that the new column has been added correctly

# Create a new column "ratio_paris_antwerp" by dividing the values in the "station_paris" column by the values in the "station_antwerp" column, which calculates the ratio of NO2 concentrations between Paris and Antwerp
# The calculation of the values is done element-wise. This means all values in the given column are divided by the corresponding values in the other column at once. You do not need to use a loop to iterate each of the rows!
air_quality["ratio_paris_antwerp"] = air_quality["station_paris"] / air_quality["station_antwerp"] # Create a new column "ratio_paris_antwerp" by dividing the values in the "station_paris" 
# column by the values in the "station_antwerp" column, which calculates the ratio of NO2 concentrations between Paris and Antwerp
print(air_quality.head()) # Print the first few rows of the updated DataFrame to verify that the new column has been added correctly

# Create a new DataFrame by renaming the columns of the original DataFrame using the rename method, which takes a dictionary mapping old column names to new column names
air_quality_renamed = air_quality.rename(columns={"station_antwerp": "BETR801", "station_paris": "FR04014", "station_london": "London Westminster"}) 
print(air_quality_renamed.head()) # Print the first few rows of the renamed DataFrame to verify that the columns have been renamed correctly

# Create a new DataFrame by renaming the columns of the original DataFrame using the rename method, which takes a dictionary mapping old column names to new column names. 
air_quality_renamed = air_quality_renamed.rename(columns=str.lower) # The str.lower function is passed to the rename method to convert all column names to lowercase, which can be useful for consistency and ease of use when accessing columns in the DataFrame
print(air_quality_renamed.head()) # Print the first few rows of the renamed DataFrame to verify that the columns have been renamed correctly
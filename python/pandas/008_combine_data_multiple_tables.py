import pandas as pd

# Reference: https://pandas.pydata.org/docs/getting_started/intro_tutorials/08_combine_dataframes.html

# Read the air quality dataset from a CSV file, parsing the dates in the first column
air_quality_no2 = pd.read_csv('air_quality_no2_long.csv', parse_dates=True)

# Select only the relevant columns from the air_quality_no2 DataFrame, which are "date.utc", "location", "parameter", and "value"
air_quality_no2 = air_quality_no2[["date.utc", "location", "parameter", "value"]]

# Read the air quality PM2.5 dataset from a CSV file, parsing the dates in the first column
air_quality_pm25 = pd.read_csv('air_quality_pm25_long.csv', parse_dates=True)

# Select only the relevant columns from the air_quality_pm25 DataFrame, which are "date.utc", "location", "parameter", and "value"
air_quality_pm25 = air_quality_pm25[["date.utc", "location", "parameter", "value"]]

# .concat() function is used to concatenate the two DataFrames, air_quality_no2 and air_quality_pm25, along the rows (axis=0) to create a new DataFrame called air_quality
air_quality = pd.concat([air_quality_no2, air_quality_pm25], axis=0)
print(air_quality.head()) # Print the first few rows of the combined air_quality DataFrame to verify that the data has been combined correctly

# Print the shapes of the original air_quality_pm25 and air_quality_no2 DataFrames, as well as the shape of the combined air_quality DataFrame, 
# to confirm that the number of rows in the combined DataFrame is equal to the sum of the rows in the original DataFrames
print('Shape of the ``air_quality_pm25`` table: ', air_quality_pm25.shape)
print('Shape of the ``air_quality_no2`` table: ', air_quality_no2.shape)
print('Shape of the ``air_quality`` table: ', air_quality.shape)

# The .sort_values() method is used to sort the air_quality DataFrame by the "date.utc" column in ascending order, 
# which ensures that the data is ordered chronologically based on the date and time of the measurements
air_quality = air_quality.sort_values("date.utc")
print(air_quality.head()) # Print the first few rows of the sorted air_quality DataFrame to verify that the data has been sorted correctly by date

# Read the air quality stations dataset from a CSV file, which contains information about the locations of the air quality monitoring stations, including their coordinates and other metadata
stations_coordinates = pd.read_csv('air_quality_stations.csv') 

# The .merge() method is used to merge the air_quality DataFrame with the stations_coordinates DataFrame based on the "location" column,
# which is common to both DataFrames. The on="location" parameter specifies that the merge should be performed using the "location" column as the key,
# and the how="left" parameter indicates that a left join should be performed, meaning that all rows from the air_quality DataFrame will be included in the resulting DataFrame, 
# and any matching rows from the stations_coordinates DataFrame will be added based on the "location" key.
air_quality = air_quality.merge(stations_coordinates, on="location", how="left") 
print(air_quality.head()) # Print the first few rows of the merged air_quality DataFrame to verify that the station coordinates have been successfully merged with the air quality data

# Read the air quality parameters dataset from a CSV file, which contains information about the different air quality parameters being measured, such as their units and descriptions
air_quality_parameters = pd.read_csv('air_quality_parameters.csv') 

# The .merge() method is used again to merge the air_quality DataFrame with the air_quality_parameters DataFrame based on the "parameter" column 
# from the air_quality DataFrame and the "id" column from the air_quality_parameters DataFrame.
# The left_on="parameter" and right_on="id" parameters specify that the merge should be performed using the "parameter" column from the air_quality 
# DataFrame and the "id" column from the air_quality_parameters DataFrame as the keys for the merge,
# and the how="left" parameter indicates that a left join should be performed, meaning that all rows from the air_quality DataFrame will be included 
# in the resulting DataFrame, and any matching rows from the air_quality_parameters DataFrame will be added based on the specified keys. 
air_quality = pd.merge(air_quality, air_quality_parameters, how="left", left_on="parameter", right_on="id")
print(air_quality.head()) # Print the first few rows of the final merged air_quality DataFrame to verify that the parameter information has been successfully merged with the air quality data and station coordinates

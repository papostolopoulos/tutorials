import pandas as pd
import matplotlib.pyplot as plt
# Reference: https://pandas.pydata.org/docs/getting_started/intro_tutorials/09_timeseries.html

# Read the air quality dataset from a CSV file
air_quality = pd.read_csv('air_quality_no2_long.csv')

# Rename the "date.utc" column to "datetime" for better readability and to reflect that it contains date and time information
air_quality = air_quality.rename(columns={"date.utc": "datetime"}) 

# Get the unique values in the "city" column of the air_quality DataFrame, which represents the different cities for which air quality data is available
print(air_quality.city.unique())

# USING PANDAS DATETIME PROPERTIES
# Convert the "datetime" column of the air_quality DataFrame to datetime objects using the pd.to_datetime() function, 
# which allows for easier manipulation and analysis of date and time data
air_quality["datetime"] = pd.to_datetime(air_quality["datetime"]) 
print(air_quality.head()) # Print the first few rows of the air_quality DataFrame to verify that the "datetime" column has been successfully converted to datetime objects

# Initially, the values in datetime are character strings and do not provide any datetime operations (e.g. extract the year, day of the week, …). 
# By applying the to_datetime function, pandas interprets the strings and convert these to datetime (i.e. datetime64[ns, UTC]) objects. 
# In pandas we call these datetime objects that are similar to datetime.datetime from the standard library as pandas.Timestamp.

# Note: pd.read_csv("../data/air_quality_no2_long.csv", parse_dates=["datetime"]) can be used to directly parse the "datetime" column 
# as datetime objects while reading the CSV file, which eliminates the need for a separate step to convert the column to datetime format after loading the data into the DataFrame.

# Calculate the time span of the air quality data by finding the difference between the maximum and minimum values in the "datetime" column, 
# which gives an indication of the range of dates covered by the dataset
time_span = air_quality["datetime"].max() - air_quality["datetime"].min()
print(time_span) 

# Extract the month from the "datetime" column and create a new column called "month" in the air_quality DataFrame
air_quality["month"] = air_quality["datetime"].dt.month 
print(air_quality.head()) # Print the first few rows of the air_quality DataFrame to verify that the "month" column has been successfully created with the extracted month values from the "datetime" column


# The .groupby() method is used to group the air_quality DataFrame by the weekday (extracted from the "datetime" column using the dt.weekday attribute) and the "location" column,
# and then calculate the mean of the "value" column for each group using the .mean() method. This results in a new DataFrame called avg_per_weekday that contains the average 
# air quality values for each combination of weekday and location.
avg_per_weekday = air_quality.groupby([air_quality["datetime"].dt.weekday, "location"])["value"].mean()
print(avg_per_weekday.head(10)) # Print the first few rows of the avg_per_weekday DataFrame to verify that the average air quality values have been successfully calculated for each combination of weekday and location


fig, axs = plt.subplots(figsize=(12, 4)) # Create a figure and a set of subplots with a specified figure size
# The .groupby() method is used again to group the air_quality DataFrame by the hour (extracted from the "datetime" column using the dt.hour attribute) 
# and calculate the mean of the "value" column for each hour using the .mean() method.
air_quality.groupby(air_quality["datetime"].dt.hour)["value"].mean().plot(kind="bar", rot=0, ax=axs) 

# The plot method is used to create a bar plot of the average air quality values for each hour of the day, with the x-axis representing the hours (0-23) 
# and the y-axis representing the average NO2 concentration in micrograms per cubic meter (µg/m³).
plt.xlabel("Hour of the day") # Set the x-axis label for the plot
plt.ylabel("Average NO$_2$ concentration (µg/m³)") # Set the y-axis label for the plot
plt.title("Average NO$_2$ concentration by hour of the day") # Set the title
plt.show() # Display the plot using the show function from the matplotlib library

# DATETIME AS INDEX
# The .pivot() method is used to reshape the air_quality DataFrame by pivoting the "datetime" column to become the index, 
# the unique values from the "location" column to become the columns, and the values from the "value" column to fill the corresponding cells in the resulting DataFrame.
no_2 = air_quality.pivot(index="datetime", columns="location", values="value")
print(no_2.head()) # Print the first few rows of the no_2 DataFrame to verify that the pivot operation has been successfully performed, resulting in a DataFrame where the index is the "datetime" column, 
# the columns are the unique values from the "location" column, and the values are taken from the "value" column of the original air_quality DataFrame

# Note: Working with a datetime index (i.e. DatetimeIndex) provides powerful functionalities. 
# For example, we do not need the dt accessor to get the time series properties, but have these properties available on the index directly
print(no_2.index.year) # Print the year component of the datetime index of the no_2 DataFrame to demonstrate that the datetime index allows 
# for easy access to time series properties without the need for a separate dt accessor
print(no_2.index.weekday) # Print the weekday component of the datetime index of the no_2 DataFrame to demonstrate that the datetime 
# index allows for easy access to time series properties without the need for a separate dt accessor

# The .plot() method is used to create a line plot of the air quality data for the specified date range from May 20, 2019 to May 21, 2019,
# which allows for visualization of the air quality trends over that specific time period.
no_2["2019-05-20":"2019-05-21"].plot();
plt.xlabel("Date and time") # Set the x-axis label for the plot
plt.ylabel("NO$_2$ concentration (µg/m³)") # Set the y-axis label for the plot
plt.title("NO$_2$ concentration from May 20, 2019 to May 21, 2019") # Set the title for the plot
plt.show() # Display the plot using the show function from the matplotlib library

# RESAMPLE A TIME SERIES TO ANOTHER FREQUENCY
# The .resample() method is used to resample the no_2 DataFrame to a monthly frequency using the "MS" (month start) offset, and then calculate 
# the maximum value for each month using the .max() method.
monthly_max = no_2.resample("MS").max() 
print(monthly_max.head()) # Print the first few rows of the monthly_max DataFrame to verify that the resampling operation has been successfully performed, 
# resulting in a DataFrame where the index is resampled to a monthly frequency and the values represent the maximum NO2 concentration for each month

# The .plot() method is used to create a line plot of the resampled monthly maximum NO2 concentration values, with a specified figure size and marker style for the data points.
# The x-axis represents the months, and the y-axis represents the maximum NO2 concentration in micrograms per cubic meter (µg/m³) for each month.
# The style="-o" parameter specifies that the plot should use a line with circular markers for the data points, and the figsize=(10, 5) parameter sets the size of the plot to 10 inches wide and 5 inches tall.
# The "D" offset in the resample method stands for "day start", which means that the resampling will be done at the start of each day, resulting in daily frequency for the resampled data.
no_2.resample("D").mean().plot(style="-o", figsize=(10, 5));
plt.xlabel("Date and time") # Set the x-axis label for the plot
plt.ylabel("NO$_2$ concentration (µg/m³)") # Set the y-axis label for the plot
plt.title("NO$_2$ concentration from May 20, 2019 to May 21, 2019") # Set the title for the plot
plt.show() # Display the plot using the show function from the matplotlib library
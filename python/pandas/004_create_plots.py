import pandas as pd
import matplotlib.pyplot as plt 

# Reference https://pandas.pydata.org/docs/getting_started/intro_tutorials/04_plotting.html


# Read the air quality dataset from a CSV file, setting the first column as the index and parsing it as dates
# The index_col=0 and parse_dates=True parameters passed to the read_csv function define the first (0th) column 
# as index of the resulting DataFrame and convert the dates in the column to Timestamp objects, respectively.
air_quality = pd.read_csv('air_quality_no2.csv', index_col=0, parse_dates=True) # Read the air quality dataset from a CSV file, setting the first column as the index and parsing it as dates
print(air_quality.head())

# Plot the air quality data using the plot method of the DataFrame, which creates a line plot by default
air_quality.plot() # Plot the air quality data using the plot method of the DataFrame, which creates a line plot by default
plt.show() # Display the plot using the show function from the matplotlib library

# Plot the "station_paris" column of the air_quality DataFrame using the plot method, which creates a line plot by default
air_quality["station_paris"].plot() # Plot the "station_paris" column of the air_quality DataFrame using the plot method, which creates a line plot by default
plt.show() # Display the plot using the show function from the matplotlib library

# Create a scatter plot of the "station_paris" and "station_london" columns of the air_quality DataFrame using the plot.scatter method
air_quality.plot.scatter(x="station_paris", y="station_london", alpha=0.5) # The alpha parameter is set to 0.5 to make the points semi-transparent, which can help to visualize overlapping points in the scatter plot
plt.show() # Display the plot using the show function from the matplotlib library

# Create a box plot of the air_quality DataFrame using the plot.box method, which shows the distribution of the data for each column
air_quality.plot.box() # Create a box plot of the air_quality DataFrame using the plot.box method, which shows the distribution of the data for each column
plt.show() # Display the plot using the show function from the matplotlib library

# Create area plots for each column of the air_quality DataFrame using the plot.area method, with a specified figure size and subplots for each column
axs = air_quality.plot.area(figsize=(12, 4), subplots=True) # Create area plots for each column of the air_quality DataFrame using the plot.area method, with a specified figure size and subplots for each column
plt.show() # Display the plots using the show function from the matplotlib library

# Create a figure and a set of subplots with 2 rows and 1 column, and a specified figure size
fig, axs = plt.subplots(figsize=(12, 8)) # Create a figure and a set of subplots with one row for each column and a specified figure size
air_quality.plot.area(ax=axs, subplots=True) # Create area plots for each column of the air_quality DataFrame using the plot.area method and specify the axes array
axs.set_ylabel("NO$_2$ concentration (µg/m³)") # Set the y-axis label for each subplot
fig.savefig("air_quality_area_plots.png") # Save the figure containing the area plots to a file named "air_quality_area_plots.png" using the savefig method of the figure object
plt.show() # Display the plots using the show function from the matplotlib library
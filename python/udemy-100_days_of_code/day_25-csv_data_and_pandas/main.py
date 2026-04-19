# Reading CSV files without pandas.
# import csv

# with open("c:/Users/Paris Apostolopoulos/Documents/coding/tutorials/python/Udemy - 100 Days of Code/Day 25 - CSV Data and Pandas/weather_data.csv") as data_file:
#     data = csv.reader(data_file)
#     temperatures = []
#     for row in data:
#         if row[1] != "temp":
#             temperatures.append(int(row[1]))
#     print(temperatures)

# Reading CSV files with pandas.
import pandas
data = pandas.read_csv("weather_data.csv")
print(data)

# Convert the data to a dictionary.
data_dict = data.to_dict()
print(data_dict)

# Convert the data to a list.
temp_list = data["temp"].to_list()
print(temp_list)

# Get the average, maximum, minimum, and median temperatures from the data.
median = data["temp"].median()
print(f"Median: {median}")

mean = data["temp"].mean()
print(f"Mean: {mean}")

max_temp = data["temp"].max()
print(f"Max: {max_temp}")

min_temp = data["temp"].min()
print(f"Min: {min_temp}")

# Get data in columns.
print(data["condition"])
print(data.condition)

# Get data in rows.
print(data[data.day == "Monday"])
print(data[data.temp == data.temp.max()])

monday = data[data.day == "Monday"]
print(monday.condition)

monday_temp = monday.temp[0]
monday_temp_f = (monday_temp * 9/5) + 32
print(f"Monday's temperature in Fahrenheit: {monday_temp_f}")

# Create a dataframe from scratch.
data_dict = {
    "students": ["Amy", "James", "Angela"],
    "scores": [76, 56, 65]
}

data = pandas.DataFrame(data_dict)
data.to_csv("new_data.csv")
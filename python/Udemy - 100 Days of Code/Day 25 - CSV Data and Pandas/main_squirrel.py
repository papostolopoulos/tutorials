import pandas
data = pandas.read_csv("2018_Central_Park_Squirrel_Census_-_Squirrel_Data.csv")
print(data.columns)
print(data["Primary Fur Color"].value_counts())

# Create a dictionary with the fur colors as keys and the counts as values. Solution from Visual Studio Code.
# data_dict = {
#     "Fur Color": data["Primary Fur Color"].value_counts().index,
#     "Count": data["Primary Fur Color"].value_counts().values
# }

# Create a dictionary with the fur colors as keys and the counts as values. Solution from Udemy.
gray_squirrels_count = len(data[data["Primary Fur Color"] == "Gray"])
red_squirrels_count = len(data[data["Primary Fur Color"] == "Cinnamon"])
black_squirrels_count = len(data[data["Primary Fur Color"] == "Black"])

data_dict = {
    "Fur Color": ["Gray", "Cinnamon", "Black"],
    "Count": [gray_squirrels_count, red_squirrels_count, black_squirrels_count]
}
print(data_dict)

# Create a dataframe from the data_dict and save it as a CSV file.
data = pandas.DataFrame(data_dict)
data.to_csv("squirrel_count.csv")
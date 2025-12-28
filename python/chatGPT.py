def line():
    print("-------------------")

#Define variables about yourself and print them using an f-string.
name = "Paris"
age = 51
hobby = "swimming"
times_per_week = 3
print(f"Hello, my name is {name}. I am {age} years old. I love {hobby} and I do it {times_per_week} times a week.")
line()

# Perform and print results of basic arithmetic operations between two numbers.
num1 = 8
num2 = 12
sum_result = num1 + num2
print(f"The sum of {num1} and {num2} is {sum_result}.")
diff_result = num2 - num1
print(f"The difference when subtracting {num1} from {num2} is {diff_result}.")
product_result = num1 * num2
print(f"The product of {num1} and {num2} is {product_result}.")
quotient_result = num2 / num1
print(f"The quotient when dividing {num2} by {num1} is {quotient_result}.")
modulus_result = num2 % num1
print(f"The modulus when dividing {num2} by {num1} is {modulus_result}.")
exponent_result = num1 ** 2
print(f"{num1} raised to the power of 2 is {exponent_result}.")
line()

# Create and manipulate a list of your hobbies.
hobbies = ["swimming", "boxing", "running", "cycling", "reading"]
print(f"Some of my hobbies are: {hobbies[0]} and {hobbies[4]}.")
hobbies.append("hiking")
hobbies.remove("reading")
print(f"My updated list of hobbies is: {hobbies}.")

# Use a loop to print each hobby in the list.
for hobby in hobbies:
    print(f"I enjoy {hobby}.")
for i in range(len(hobbies)):
    print(f"Hobby {i+1}: {hobbies[i]}")
line()

# Use a loop to count down from 5 to 1 and print each number.
count = 5
while count > 0:
    print(f"Countdown: {count}")
    count -= 1
line()

# Use conditional statements to print messages based on the number of times you do your hobby per week.
if times_per_week == 0:
    print("I should get back to my hobbies!")
elif times_per_week <= 2:
    print("I need to make more time for my hobbies.")
elif times_per_week >= 3:
    print("I am doing great with my hobbies!")
line()

# Use a dictionary to store your hobbies and how many times you do each per week, then print messages based on the frequency.
hobbies_dict = {
    "swimming": 3,
    "boxing": 2,
    "running": 4,
    "cycling": 1,
    "hiking": 2
}

for hobby, frequency in hobbies_dict.items():
    if frequency == 0:
        print(f"I should get back to {hobby}. I do this activity {frequency} times per week!")
    elif frequency <= 2:
        print(f"I need to make more time for {hobby}. I do this activity {frequency} times per week!")
    else:
        print(f"I am doing great with {hobby}! I do this activity {frequency} times per week!")
line()

# Define and call a function that greets a person by name.
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
greet("Bob")
line() 

# Define and call a function that calculates the square of a number and prints the result.
def square(num):
    return num * num

print(f"The square of 5 is {square(5)}.")
line()

# Define and call a function that takes a hobby and frequency as arguments and returns a message based on the frequency.
def hobby_message(hobby, frequency):
     if frequency == 0:
          return f"I should get back to {hobby}. I do this activity {frequency} times per week!"
     elif frequency <= 2:
        return f"I need to make more time for {hobby}. I do this activity {frequency} times per week!"
     else:
        return f"I am doing great with {hobby}! I do this activity {frequency} times per week!"

print(hobby_message("swimming", 1))
response = hobby_message("running", 3)
print(response)
line()

# Create a list of dictionaries representing your hobbies and their frequencies. Use a loop to print messages for each hobby using the function you defined earlier.
activities = [
    {"name": "swimming", "frequency": 3},
    {"name": "boxing", "frequency": 2},
    {"name": "running", "frequency": 4},
    {"name": "cycling", "frequency": 1},
    {"name": "hiking", "frequency": 2}
]

for activity in activities:
    print(hobby_message(activity["name"], activity["frequency"]))
line()

# Sort the list of activities by frequency, by name, and by both frequency and name. Print the sorted lists.
sorted_by_frequency = sorted(activities, key=lambda x: x["frequency"])
sorted_by_name = sorted(activities, key=lambda x: x["name"])
sorted_multiple = sorted(activities, key=lambda x: (-x["frequency"], x["name"]))
print(f"The original activities list is: {activities}")
print(f"The activities list sorted by frequency is: {sorted_by_frequency}")
print(f"The activities list sorted by name is: {sorted_by_name}")
print(f"The activities list sorted by frequency and name is: {sorted_multiple}")[1]
line()

# Create a new list containing only the names of the activities from each of the sorted lists and print those lists.
names_by_frequency = [activity["name"] for activity in sorted_by_frequency]
names_by_name = [activity["name"] for activity in sorted_by_name]
names_by_multiple = [activity["name"] for activity in sorted_multiple]
print(f"The names of activities sorted by frequency are: {names_by_frequency}")
print(f"The names of activities sorted by name are: {names_by_name}")
print(f"The names of activities sorted by frequency and name are: {names_by_multiple}")
line()

# Sort the list of activities by frequency and print the sorted list. Then, create a new list containing only the activities you do more than twice a week and print that list.
print(f"the first three activities on the activities list are: {activities[:3]}")
print(f"the names of the first three activities on the activities list are: {[activity['name'] for activity in activities[:3]]}")

activities.sort(key=lambda x: x["frequency"])

print(f"The activities list sorted by frequency are: {activities}")

frequentActivities= []
for activity in activities:
    if activity["frequency"] >= 2:
        frequentActivities.append(activity)

print(f"The most frequent activities are: {frequentActivities}")

line()
print("Dictionaries crash course")

# Create a dictionary to store information about yourself and print specific values using both direct key access and the get() method with a default value.
person = {"name": "Paris", "age": 51, "hobby": "Swimming"}
print("Name:", person["name"])
print("City (with default):", person.get("city", "Unknown"))

# Update the dictionary with new key-value pairs and modify existing values, then print the updated dictionary.
person["city"] = "Athens"
person["age"] += 1
print("Updated person dictionary:", person)

#Increment a "visits" key in the dictionary each time the code is run, initializing it to 0 if it doesn't exist, and print the updated number of visits.
if "visits" not in person:
    person["visits"] = 0
person["visits"] += 1
print("Number of visits:", person["visits"])

#Use setdefault to initialize another key "visits2" to 0 if it doesn't exist, then increment it and print the updated number of visits.
person.setdefault("visits2", 0)
person["visits2"] += 1
print("Number of visits2:", person["visits2"])

removed = person.pop("city")
print("Removed city:", removed)

for key in person:
    print(f"{key} -> {person[key]}")

for key, value in person.items():
    print(f"{key}: {value}")

line()

print("Working with hobbies dictionary")

# Find and print the hobby you do most frequently using the hobbies_dict defined earlier.
most_freq = max(hobbies_dict.items(), key=lambda kv: kv[1])
print(most_freq)
print(f"My most frequent hobby is {most_freq[0]} which I do {most_freq[1]} times a week.")

#Update a frequency value in the hobbies_dict and print the updated dictionary.
print("Original hobbies.dict['swimming']:", hobbies_dict["swimming"])
hobbies_dict["swimming"] = hobbies_dict.get("swimming", 0) + 1
print("Updated hobbies.dict['swimming']:", hobbies_dict["swimming"])

# Filter with dict comprehension
active = {h: f for h, f in hobbies_dict.items() if f >= 2}
print("Active hobbies (>=2 / week):", active)

# Sort the hobbies_dict by frequency, by name, and by both frequency and name, then print the sorted lists.
sorted_by_freq = sorted(hobbies_dict.items(), key=lambda kv: kv[1])
sorted_by_name = sorted(hobbies_dict.items(), key=lambda kv: kv[0])
sorted_hobbies = sorted(hobbies_dict.items(), key=lambda kv: (-kv[1], kv[0]))
print("Hobbies sorted by frequency:", sorted_by_freq)
print("Hobbies sorted by name:", sorted_by_name)
print("Hobbies sorted by frequency and name:", sorted_hobbies)

# Merge hobbies_dict with another dictionary containing additional hobbies and their frequencies, then print the merged dictionary.
more = {"cooking": 2, "traveling": 1}
merged = hobbies_dict | more
print("Merged hobbies dictionary:", merged)
print(hobbies_dict.items())
line()
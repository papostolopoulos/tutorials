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
        print(f"I should get back to {hobby}!")
    elif frequency <= 2:
        print(f"I need to make more time for {hobby}.")
    else:
        print(f"I am doing great with {hobby}!")
line()

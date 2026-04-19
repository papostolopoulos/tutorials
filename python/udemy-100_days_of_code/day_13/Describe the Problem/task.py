def my_function():
    for i in range(1, 21):
        if i == 20:
            print("You got it")


my_function()

# Describe the Problem - Write your answers as comments:
# the for loop iterates through the numbers of 1 to 19, not 20. The range should be range(1,21)
# 1. What is the for loop doing?
# 2. When is the function meant to print "You got it"?
# The function is meant to print "You got it" when i = 20 but the range limits the iteration up to 19
# 3. What are your assumptions about the value of i?

def fizz_buzz(target):
    for number in range(1, target + 1):
        if number % 3 == 0 and number % 5 == 0:
            print(f"{number}: number % 3 == 0 and number % 5 == 0")
            print("FizzBuzz")
        elif number % 3 == 0:
            print(f"{number}: number % 3 == 0")
            print("Fizz")
        elif number % 5 == 0:
            print(f"{number}: number % 5 == 0")
            print("Buzz")
        else:
            print([number])

fizz_buzz(20)

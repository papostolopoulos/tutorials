print("Welcome to the rollercoaster!")
height = int(input("What is your height in cm? "))

if height >= 120:
    print("You can ride the rollercoaster")
    age = int(input("What is your age? "))
    if age < 12:
        print("That will be $5")
    elif age < 19:
        print("That will be $7")
    else:
        print("That will be $12")
else:
    print("Sorry you have to grow taller before you can ride.")

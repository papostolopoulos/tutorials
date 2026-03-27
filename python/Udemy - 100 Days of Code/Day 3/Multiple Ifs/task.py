print("Welcome to the rollercoaster!")
height = int(input("What is your height in cm? "))

if height >= 120:
    print("You can ride the rollercoaster")
    age = int(input("What is your age? "))
    cost = 0
    if age <= 12:
        print("Children's tickets are $5.")
        cost = 5
    elif age <= 18:
        print("Youth tickets are $7.")
        cost = 7
    else:
        print("Adult tickets are $12.")
        cost = 12

    photos =  input("Do you want photos with your ticket?\nPlease type y for 'Yes' and n for 'No' ")

    if photos == "y":
        cost += 3

    print(f"Your final cost is ${cost}")
else:
    print("Sorry you have to grow taller before you can ride.")

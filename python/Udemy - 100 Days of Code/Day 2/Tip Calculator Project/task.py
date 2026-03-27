print("Welcome to the tip calculator!")
bill = float(input("What was the total bill? \n$"))
tip = int(input("What percentage tip would you like to give? 10 12 15 ")) / 100
people = int(input("How many people to split the bill? "))

print(f"Cost of the bill including tip is: ${bill + (bill * tip)}")


costPerPerson = (bill + (bill * tip)) / people

print(f"Each person should pay ${costPerPerson}")



from http.cookiejar import request_port

MENU = {
    "espresso": {
        "ingredients": {
            "water": 50,
            "coffee": 18,
        },
        "cost": 1.5,
    },
    "latte": {
        "ingredients": {
            "water": 200,
            "milk": 150,
            "coffee": 24,
        },
        "cost": 2.5,
    },
    "cappuccino": {
        "ingredients": {
            "water": 250,
            "milk": 100,
            "coffee": 24,
        },
        "cost": 3.0,
    }
}

resources = {
    "water": 300,
    "milk": 200,
    "coffee": 100,
    "money": 0.0,
}

#Penny 1
# Nickel 4
# Dime 10
# Quarter 25

# Print a report
# check resources are sufficient
# Process coins
# Check transaction successful?

# What would you like? (espresso/latte/cappuccino)
# Please insert coins:
# How many quarters?
# How many dimes?
# How many nickles?
# How many pennies?
# Sorry, that's not enough money. Money refunded.
# Here is $2.14 in change
# Here is your espresso. Enjoy!

# 1. Prompt user by asking “What would you like? (espresso/latte/cappuccino):”
# a. Check the user’s input to decide what to do next.
# b. The prompt should show every time action has completed, e.g. once the drink is
# dispensed. The prompt should show again to serve the next customer.
# 2. Turn off the Coffee Machine by entering “off” to the prompt.
# a. For maintainers of the coffee machine, they can use “off” as the secret word to turn off
# the machine. Your code should end execution when this happens.
# 3. Print report.
# a. When the user enters “report” to the prompt, a report should be generated that shows
# the current resource values. e.g.
# Water: 100ml
# Milk: 50ml
# Coffee: 76g
# Money: $2.5
# 4. Check resources sufficient?
# a. When the user chooses a drink, the program should check if there are enough
# resources to make that drink.
# b. E.g. if Latte requires 200ml water but there is only 100ml left in the machine. It should
# not continue to make the drink but print: “Sorry there is not enough water.”
# c. The same should happen if another resource is depleted, e.g. milk or coffee.
# 5. Process coins.
# a. If there are sufficient resources to make the drink selected, then the program should
# prompt the user to insert coins.
# b. Remember that quarters = $0.25, dimes = $0.10, nickles = $0.05, pennies = $0.01
# c. Calculate the monetary value of the coins inserted. E.g. 1 quarter, 2 dimes, 1 nickel, 2
# pennies = 0.25 + 0.1 x 2 + 0.05 + 0.01 x 2 = $0.52
# 6. Check transaction successful?
# a. Check that the user has inserted enough money to purchase the drink they selected.
# E.g Latte cost $2.50, but they only inserted $0.52 then after counting the coins the
# program should say “Sorry that's not enough money. Money refunded.”.
# b. But if the user has inserted enough money, then the cost of the drink gets added to the
# machine as the profit and this will be reflected the next time “report” is triggered. E.g.
# Water: 100ml
# Milk: 50ml
# Coffee: 76g
# Money: $2.5
# c. If the user has inserted too much money, the machine should offer change.
# E.g. “Here is $2.45 dollars in change.” The change should be rounded to 2 decimal
# places.

def turn_machine_off():
    '''Function that turns off the coffee machine'''
    print("Turning off coffee machine")
    return False

def resources_report(machine_resources):
    """Check the amount of resources the coffee machine has"""
    for key in resources:
        if key == "coffee":
            print(f"{key.capitalize()}: {machine_resources[key]}g")
        elif key == "money":
            print(f"{key.capitalize()}: ${machine_resources[key]}")
        else:
            print(f"{key.capitalize()}: {machine_resources[key]}ml")

def check_machine_resources(coffee_ingredients):
    '''Check if the machine has enough resources to make a coffee cup
    If not, turn off the machine'''
    for ingredient in coffee_ingredients:
        if coffee_ingredients[ingredient] > resources[ingredient]:
            print(f"Sorry, there is not enough {ingredient}.")
            return False
    return True

def check_money_paid(drink_select, cost):
    '''Check if the user paid the money required for the coffee'''
    print(f"The cost of your {drink_select.capitalize()} is ${cost}")
    print("Please insert coins:")
    quarters = int(input("How many quarters? "))
    dimes = int(input("How many dimes? "))
    nickles = int(input("How many nickles? "))
    pennies = int(input("How many pennies? "))
    money_inserted = round(quarters * 0.25 + dimes * 0.10 + nickles * 0.05 + pennies * 0.01, 2)
    print(f"You have inserted ${money_inserted} dollars")

    if money_inserted < cost:
        print("Sorry that's not enough money. Money refunded.")

    return money_inserted

def make_coffee(paid_money, select_drink, selection, resource):
    '''Prepare the user's coffee. Give change if necessary'''
    if paid_money >= select_drink["cost"]:
        change = round(paid_money - select_drink["cost"], 2)
        for key in select_drink["ingredients"]:
            resource[key] -= select_drink["ingredients"][key]
        resource["money"] += select_drink["cost"]
        if paid_money > select_drink["cost"]:
            print(f"Here is ${change} dollars in change.")
        print(f"Here is your {selection}. Enjoy!")


coffee_machine_on = True

while coffee_machine_on:
    drink_selection = input("What would you like? (espresso/latte/cappuccino): ").lower()

    if drink_selection == "off": #Turn off the machine
        coffee_machine_on = turn_machine_off()

    elif drink_selection == "report": #Get a report from the machine
        resources_report(resources)

    elif drink_selection in MENU: #The user made a valid entry for a beverage
        coffee_machine_on = check_machine_resources(MENU[drink_selection]["ingredients"]) #check if enough resources
        money_paid = 0

        if coffee_machine_on:
            money_paid = check_money_paid(drink_selection, MENU[drink_selection]["cost"]) #check if user paid enough money

            if money_paid >= MENU[drink_selection]["cost"]:
                make_coffee(money_paid, MENU[drink_selection], drink_selection, resources) #Prepare the user's coffee, give change

    else: #Wrong entry
        print("Sorry, this coffee machine cannot produce your request. Try again")





# 7. Make Coffee.
# a. If the transaction is successful and there are enough resources to make the drink the
# user selected, then the ingredients to make the drink should be deducted from the
# coffee machine resources.
# E.g. report before purchasing latte:
# Water: 300ml
# Milk: 200ml
# Coffee: 100g
# Money: $0
# Report after purchasing latte:
# Water: 100ml
# Milk: 50ml
# Coffee: 76g
# Money: $2.5
# b. Once all resources have been deducted, tell the user “Here is your latte. Enjoy!”. If
# latte was their choice of drink
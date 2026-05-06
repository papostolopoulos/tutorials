from menu import Menu, MenuItem
from coffee_maker import CoffeeMaker
from money_machine import MoneyMachine

coffee_macnine_on = True

coffee_selection = input("Welcome to the Coffee Machine!"
      "\nPlease select from the following options:"
      "\nEspresso - $1.5"
      "\nLatte - $2.5"
      "\nCappuccino - $3.0: ").lower() 

items = Menu().get_items().split("/")[:-1]

if coffee_selection == "off":
    coffee_macnine_on = False
elif coffee_selection == "report":
    CoffeeMaker().report()
    MoneyMachine().report()
elif coffee_selection in Menu().get_items():
    drink = Menu().find_drink(coffee_selection)
    if CoffeeMaker().is_resource_sufficient(drink) and MoneyMachine().make_payment(drink.cost):
        CoffeeMaker().make_coffee(drink)
else:    print("Sorry, that is not a valid selection.")



from menu import Menu, MenuItem
from coffee_maker import CoffeeMaker
from money_machine import MoneyMachine

money_machine = MoneyMachine()
coffee_maker = CoffeeMaker()
menu = Menu()

coffee_machine_on = True

while coffee_machine_on:
    options = menu.get_items()
    coffee_selection = input(f"Welcome to the Coffee Machine!\nPlease select from the following options:\n{options}: ").lower()
    if coffee_selection == "off": #Turn off the machine
        coffee_machine_on = False
    elif coffee_selection == "report": #Get a report from the machine
        coffee_maker.report()
        money_machine.report()
    else: 
        drink = menu.find_drink(coffee_selection)
        if coffee_maker.is_resource_sufficient(drink) and money_machine.make_payment(drink.cost):
                coffee_maker.make_coffee(drink)
   
        
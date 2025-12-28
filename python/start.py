# start.py
# This is the entry Python file for your project.

from datetime import datetime

def bday():
    #define the dates
    christmas_date = datetime(datetime.now().year, 12, 25)
    birthday_date = datetime(year=2026, month=5, day=17)  # Replace with your birthday
    #Calculate the difference in days
    delta = birthday_date - christmas_date
    print(f"There are {delta.days} days between Christmas and my birthday.")

def main():
    print("Hello, world!")

if __name__ == "__main__":
    main()

    bday()


def line():
    print("-" * 40)
line()


def drink(time_hour):
    if time_hour >= 0 and time_hour <= 24:
       print('Suggesting a drink option...')
    if mood == 'sleepy' and time_hour < 10:
       print('coffee')
    elif mood == 'thirsty' or time_hour < 2:
        print('lemonade')
    else:
        print('water')

drink(9)
drink(14)
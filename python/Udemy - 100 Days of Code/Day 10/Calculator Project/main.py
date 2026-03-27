from art import logo
print(logo)

continue_calculations = True
result = 0
entries = []

def first_entry():
    first_number = float(input("What's the first number?: "))
    return entries.append(first_number)

def user_entries():
    print('+\n-\n*\n/')
    operation = input("What's the operation?: ")
    entries.append(operation)
    second_number = float(input("What's the second number?: "))
    entries.append(second_number)
    return entries

def calculation(num1, oper, num2):
    if oper == "+":
        return num1 + num2
    elif oper == "-":
        return num1 - num2
    elif oper == "*":
        return num1 * num2
    elif oper == "/":
        return num1 / num2

while continue_calculations == True:
    if entries == []:
        first_entry()

    entries = user_entries()
    result = calculation(entries[0], entries[1], entries[2])
    print(f"{entries[0]} {entries[1]} {entries[2]} = {result}")
    entries[0] = result
    entries.pop(-1)
    entries.pop(-1)
    another_round = input(f"Type 'y' to continue calculating with {result} to continue or 'n' to exit: ").lower()
    if another_round != "y":
        continue_calculations = False



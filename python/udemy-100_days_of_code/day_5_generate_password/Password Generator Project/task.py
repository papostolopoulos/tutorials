import random
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

print("Welcome to the PyPassword Generator!")
nr_letters = int(input("How many letters would you like in your password?\n"))
nr_numbers = int(input(f"How many numbers would you like?\n"))
nr_symbols = int(input(f"How many symbols would you like?\n"))

characters_list = []

for nr_letter in range(nr_letters):
    characters_list.append(letters[random.randint(0,len(letters)-1)])

for nr_number in range(nr_numbers):
    characters_list.append(numbers[random.randint(0,len(numbers)-1)])

for nr_symbol in range(nr_symbols):
    characters_list.append(symbols[random.randint(0,len(symbols)-1)])

print(characters_list)

final_password = ""

while len(characters_list) > 0:
    rnd_num = random.randint(0,len(characters_list)-1)
    final_password += characters_list[rnd_num]
    characters_list.remove(characters_list[rnd_num])
    print(characters_list)

print(f"Your pasword is: {final_password}")


# SOLUTION OF THE LADY
pwd_list = []
for char in range(0, nr_letters):
    random_char = random.choice(letters)
    pwd_list.append(random_char)

for char in range(0, nr_numbers):
    random_char = random.choice(numbers)
    pwd_list.append(random_char)

for char in range(0, nr_symbols):
    random_char = random.choice(symbols)
    pwd_list.append(random_char)

print(pwd_list)
random.shuffle(pwd_list)
print(pwd_list)
print("".join(pwd_list))

pwd = ""
for char in pwd_list:
    pwd += char

print(f"Your password is: {pwd}")
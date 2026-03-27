# Functions with input

def greet_with_name(name):
    print(f"Hello {name}")
    print(f"How do you do {name}?")


greet_with_name("Jack Bauer")


def greet_with(name, location):
    print(f"Hello {name}")
    print(f"What is it like in {location}?")

greet_with("Jack Bauer", "London")
greet_with(location="Spain", name="Jorge")



def calculate_love_score(name1, name2):
    names=(name1 + name2).lower()
    first_number = 0
    second_number = 0
    first_word = "true"
    second_word = "love"
    for letter in names:
        if letter in first_word:
            first_number += 1

        if letter in second_word:
            second_number += 1

    print(str(first_number) + str(second_number))



from art import logo
from random import randint
print(logo)

print("Welcome to the Number Guessing Name")

# Set a random number between 1 and 100
print("I'm thinking of a number between 1 and 100.")
#random_number = random.randint(1, 100)

#Define the difficulty of the game
EASY_LEVEL_TURNS = 10
HARD_LEVEL_TURNS = 5
def set_difficulty():
    difficulty = input("Choose a difficulty. Type 'easy' or 'hard': ").lower()
    if difficulty == "easy":
        return EASY_LEVEL_TURNS
    else:
        return HARD_LEVEL_TURNS

turns = set_difficulty()


#Game function
def game(remaining_turns, random_num):
    print(f"You have {remaining_turns} attempts remaining to guess the number")
    while remaining_turns > 0:
        guess = int(input("Make a guess: "))
        if guess == random_num:
            print(f"You got it! The answer was {random_num}")
            break
        elif guess > random_num:
            print("Too high!")
        else:
            print("Too low!")
        remaining_turns -= 1

        if remaining_turns == 0:
            print(f"Sorry. You run out of turns. The number was {random_num}")
        else:
            print(f"You have {remaining_turns} attempts remaining to guess the number")

game(turns, randint(1, 100))




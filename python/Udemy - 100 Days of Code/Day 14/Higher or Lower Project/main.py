from art import logo, vs
from game_data import data
from random import choice

#variable that helps iterate through the game and score
won_round = True
score = 0
choice1 = choice(data)

while won_round:
    # Print the game logo
    print(logo)

    #Select two random choices from data

    choice2 = choice(data)
    while choice1 == choice2:
        choice2 = choice(data)


    #Select who has the most followers
    print(f"Compare A: {choice1["name"]}, a {choice1["description"]} from {choice1["country"]}")
    print(vs)
    print(f"Against B: {choice2["name"]}, a {choice2["description"]} from {choice2["country"]}")

    selection = input("Who has the most followers? Type 'A' or 'B': ").upper()

    #Compare the two choices and respond if the user won or lost
    if (selection == "A" and choice1["follower_count"] > choice2["follower_count"]) or (selection == "B" and choice1["follower_count"] < choice2["follower_count"]):
        score += 1
        print(f"You are right! Current score: {score}")
        #Change choice1 value to equal to choice 2 value since this is the value that will be used for the next iteration of the game.
        if choice1["follower_count"] < choice2["follower_count"]:
            choice1 = choice2
    else:
        print(f"Sorry, that's wrong. Final score: {score}")
        won_round = False


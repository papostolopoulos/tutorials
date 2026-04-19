from art import logo
import random
print(logo)
cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]

while input("Do you want to play a game of Blackjack? Type 'y' or 'n': ").lower() == "y":
    player_cards = []
    player_score = 0
    computer_cards = []
    computer_score = 0

    def draw_card(hand, score):
        card = random.choice(cards)
        hand.append(card)
        score += card
        return score

    #Add first two cards for player
    for x in range(2):
        player_score = draw_card(player_cards, player_score)
    print(f"Your cards: {player_cards}, current score: {player_score}")
    #Add one card for the computer
    computer_score = draw_card(computer_cards, computer_score)
    print(f"Computer's first card: {computer_score}")

    #Ask the player if they want a new card
    def new_card():
        return input("Type 'y' to get another card, 'n' to pass: ").lower()

    # while the player keeps on saying yes, we draw another card
    while new_card() == "y":
        player_score = draw_card(player_cards, player_score)
        print(f"Your cards: {player_cards}, current score: {player_score}")
        if player_score > 21:
            print("You went bust")
            break

    if player_score <= 21:
        print(f"Your final hand: {player_cards}, final score: {player_score}")


    #while the computer's score is lower than the player's score, keep on drawing
    while computer_score < player_score and player_score <= 21:
        print("In computer's while loop")
        computer_score = draw_card(computer_cards, computer_score)
        if computer_score > player_score and computer_score <= 21:
            print(f"Computer's final hand: {computer_cards}, final score: {computer_score}")
            print("Computer wins.")
        elif computer_score > 21:
            print(f"Computer's final hand: {computer_cards}, final score: {computer_score}")
            print("Computer went over. You win!")


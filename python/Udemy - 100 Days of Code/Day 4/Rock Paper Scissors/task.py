import random

rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''

selection = int(input("What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors. "))
computer_choice = random.randint(0,2)
r_p_s = ["Rock", "Paper", "Scissors"]
game_images =[rock, paper, scissors]

if selection == 0 and computer_choice == 0:
    print(f"You chose {r_p_s[selection]}")
    print(game_images[selection])
    print(f"The computer chose {r_p_s[computer_choice]}")
    print(game_images[computer_choice])
    print("It's a draw")
elif selection == 0 and computer_choice == 1:
    print(f"You chose {r_p_s[selection]}")
    print(game_images[selection])
    print(f"The computer chose {r_p_s[computer_choice]}")
    print(game_images[computer_choice])
    print("You loose")
elif selection == 0 and computer_choice == 2:
    print(f"You chose {r_p_s[selection]}")
    print(game_images[selection])
    print(f"The computer chose {r_p_s[computer_choice]}")
    print(game_images[computer_choice])
    print("You win!")
elif selection == 1 and computer_choice == 0:
    print(f"You chose {r_p_s[selection]}")
    print(game_images[selection])
    print(f"The computer chose {r_p_s[computer_choice]}")
    print(game_images[computer_choice])
    print("You win!")
elif selection == 1 and computer_choice == 1:
    print(f"You chose {r_p_s[selection]}")
    print(game_images[selection])
    print(f"The computer chose {r_p_s[computer_choice]}")
    print(game_images[computer_choice])
    print("It's a draw")
elif selection == 1 and computer_choice == 2:
    print(f"You chose {r_p_s[selection]}")
    print(game_images[selection])
    print(f"The computer chose {r_p_s[computer_choice]}")
    print(game_images[computer_choice])
    print("You lose")
elif selection == 2 and computer_choice == 0:
    pprint(f"You chose {r_p_s[selection]}")
    print(game_images[selection])
    print(f"The computer chose {r_p_s[computer_choice]}")
    print(game_images[computer_choice])
    print("You lose")
elif selection == 2 and computer_choice == 1:
    print(f"You chose {r_p_s[selection]}")
    print(game_images[selection])
    print(f"The computer chose {r_p_s[computer_choice]}")
    print(game_images[computer_choice])
    print("You win!")
elif selection == 2 and computer_choice == 2:
    print(f"You chose {r_p_s[selection]}")
    print(game_images[selection])
    print(f"The computer chose {r_p_s[computer_choice]}")
    print(game_images[computer_choice])
    print("It's a draw")
else:
    print("You chose an incorrect option. Try again.")

# TODO-1: Ask the user for input
# TODO-2: Save data into dictionary {name: price}
# TODO-3: Whether if new bids need to be added
# TODO-4: Compare bids in dictionary
from art import logo

bids = {}
highest_bid = 0
winner = ""
replay = "yes"

print(logo)

while replay == "yes":
    user_name = input("What is your name?\n")
    user_bid = input("What is your bid?\n$")
    bids[user_name] = int(user_bid)
    print(bids)

    replay = input("Are there any other bidders? Type \"yes\" or \"no\"\n").lower()
    print("\n" * 100)

for key in bids:
    if bids[key] > highest_bid:
        winner = key
        highest_bid = bids[key]

print(f"The highest bidder is {winner} who bid ${highest_bid}")


#Instead of the for loom, I could had used the max function. max(bids, key=bids.get)

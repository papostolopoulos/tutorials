import tkinter as tk
import random as rd
import pandas as pd
import time

BACKGROUND_COLOR = "#B1DDC6"
current_card = {}
to_learn = {}

try:
    data = pd.read_csv("c:/Users/Paris Apostolopoulos/Documents/coding/tutorials/python/udemy-100_days_of_code/day_31_flach_card_app/data/words_to_learn.csv")
except FileNotFoundError:
    original_data = pd.read_csv("c:/Users/Paris Apostolopoulos/Documents/coding/tutorials/python/udemy-100_days_of_code/day_31_flach_card_app/data/dutch_words.csv")
    to_learn = original_data.to_dict(orient="records")
else:
    to_learn = data.to_dict(orient="records")



# ---------------------------- NEXT CARD ------------------------------- #

def next_card():
    global current_card, flip_timer
    window.after_cancel(flip_timer)
    current_card = rd.choice(to_learn)
    canvas.itemconfig(card_title, text="Dutch", fill="black")
    canvas.itemconfig(card_word, text=current_card["Dutch"], fill="black")
    canvas.itemconfig(card_background, image=card_front_img)
    flip_timer = window.after(3000, func=flip_card)
    # If the check button was clicked, then pop the card
    # to_learn.pop(to_learn.index(current_card))


# ---------------------------- FLIP CARD ------------------------------- #

def flip_card():
    canvas.itemconfig(card_title, text="English", fill="white")
    canvas.itemconfig(card_word, text=current_card["English"], fill="white")
    canvas.itemconfig(card_background, image=card_back_img)

# ---------------------------- UI SETUP ------------------------------- #

def is_known():
    to_learn.remove(current_card)
    next_card()
    data = pd.DataFrame(to_learn)
    data.to_csv("c:/Users/Paris Apostolopoulos/Documents/coding/tutorials/python/udemy-100_days_of_code/day_31_flach_card_app/data/words_to_learn.csv", index=False)

# ---------------------------- UI SETUP ------------------------------- #

# WINDOW
window = tk.Tk()
window.title("Dutch to English Flash Cards")
window.config(padx=50, pady=50, background=BACKGROUND_COLOR)

flip_timer = window.after(3000, func=flip_card)

# CANVAS
#Create canvas variable and insert background image
canvas = tk.Canvas(width=800, height=526, background=BACKGROUND_COLOR)
card_front_img = tk.PhotoImage(file="c:/Users/Paris Apostolopoulos/Documents/coding/tutorials/python/udemy-100_days_of_code/day_31_flach_card_app/images/card_front.png")
card_back_img = tk.PhotoImage(file="c:/Users/Paris Apostolopoulos/Documents/coding/tutorials/python/udemy-100_days_of_code/day_31_flach_card_app/images/card_back.png")
card_background = canvas.create_image(400, 263, image=card_front_img)
canvas.config(background=BACKGROUND_COLOR, highlightthickness=0)
canvas.grid(column=0, row=0, columnspan=2)

# Text area where the Language is displayed
card_title = canvas.create_text(400, 150, text="", font=("Arial", 40, "italic"))
# Text area where the word is displayed
card_word = canvas.create_text(400, 263, text="", font=("Arial", 60, "bold"))

# BUTTONS
# Known button
check_image = tk.PhotoImage(file="c:/Users/Paris Apostolopoulos/Documents/coding/tutorials/python/udemy-100_days_of_code/day_31_flach_card_app/images/right.png")
known_button =tk.Button(window, image=check_image, command=is_known, highlightthickness=0, borderwidth=0)
known_button.grid(column=1, row=1)

#Unknown button
cross_image = tk.PhotoImage(file="c:/Users/Paris Apostolopoulos/Documents/coding/tutorials/python/udemy-100_days_of_code/day_31_flach_card_app/images/wrong.png")
unknown_button = tk.Button(window, image=cross_image, command=next_card, highlightthickness=0, borderwidth=0)
unknown_button.grid(column=0, row=1)

next_card()

window.mainloop()


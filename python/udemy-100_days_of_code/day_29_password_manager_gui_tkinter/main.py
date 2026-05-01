import tkinter as tk
from tkinter import messagebox
from random import choice, randint, shuffle
import pyperclip

# ---------------------------- PASSWORD GENERATOR ------------------------------- #

def generate_password():
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

    # Create lists of random characters from the letters, numbers and symbols lists
    password_letters = [choice(letters) for _ in range(randint(8, 10))]
    password_numbers = [choice(numbers) for _ in range(randint(2, 4))]
    password_symbols = [choice(symbols) for _ in range(randint(2, 4))]

    # Combine the three lists in the "password_list"
    password_list = password_letters + password_numbers + password_symbols
    shuffle(password_list)

    #Add the characters from the password_list to the "password" string
    password = "".join(password_list)

    # Add the "password" in the password_entry
    password_entry.delete(0, tk.END)
    password_entry.insert(0, password)

# ---------------------------- SAVE PASSWORD ------------------------------- #
def save_password():
    # Get all the entries from the form and save them in a new string.
    web_entry = website_entry.get()
    username_entry = email_entry.get()
    pw_entry = password_entry.get()
    new_entry = f"{web_entry} | {username_entry} | {pw_entry}"
    print(new_entry)

    # copy the password in the clipboard to use it in another application if necessary
    pyperclip.copy(pw_entry)

    if web_entry == "" or username_entry == "" or pw_entry == "":
        tk.messagebox.showinfo(title = "Missing entry!", message = "Please don't leave any fields empty!")
    else:
        # Create a popup message asking the user if they are satisfied with their entries
        is_okay = tk.messagebox.askokcancel(title = web_entry, message = f"These are the details entered "
                                f"\nEmail/username: {username_entry} \nPassword: {pw_entry}" 
                                f"\nIs it okay to save?")
        #If the entries are okay, register them in the txt file
        if is_okay:
            # Add the entries in the txt file
            with open("passwords.txt", "a") as file:
                file.write(new_entry + "\n")

                # Delete the entries from the form
                website_entry.delete(0, tk.END)
                password_entry.delete(0, tk.END)

# ---------------------------- UI SETUP ------------------------------- #

# WINDOW
window = tk.Tk()
window.title("Password Manager")
window.config(padx=50, pady=50)

# CANVAS
canvas = tk.Canvas(width=200, height=200)
logo_img = tk.PhotoImage(file="logo.png")
canvas.create_image(100, 100, image=logo_img)
canvas.grid(column=1, row=0)

# LABELS
website_label = tk.Label(text="Website:")
website_label.grid(column=0, row=1, sticky="E")
email_label = tk.Label(text="Email/Username:")
email_label.grid(column=0, row=2, sticky="E")
password_label = tk.Label(text="Password:")
password_label.grid(column=0, row=3, sticky="E")

# ENTRIES
# Entry for the website that the password will be saved for
website_entry = tk.Entry(width=43)
website_entry.grid(column=1, row=1, columnspan=2, sticky="W")
website_entry.focus()

# Entry of the username for the website
email_entry = tk.Entry(width=43)
email_entry.grid(column=1, row=2, columnspan=2, sticky="W")
email_entry.insert(0, "papostolopoulos@gmail.com")

# Create frame to include "password_entry" and "generate password" button
password_frame = tk.Frame(window)
password_frame.grid(column=1, row=3, columnspan=2, sticky="W")

# a text field to enter the password of the website
password_entry = tk.Entry(password_frame, width=24)
password_entry.pack(side="left")

# A button that auto generates a password when clicked
generate_password_button = tk.Button(password_frame, text="Generate Password", command=generate_password)
generate_password_button.pack(side="left", padx=(5, 0))
# password_entry = tk.Entry(width=24)
# password_entry.grid(column=1, row=3, columnspan=1, sticky="W")
# generate_password_button = tk.Button(text="Generate Password", command=generate_password)
# generate_password_button.grid(column=2, row=3, sticky="W")

# A button that allows us to save the username and password for the website we want to register
add_button = tk.Button(text="Add", width=36, command=save_password)
add_button.grid(column=1, row=4, columnspan=2, sticky="W")

window.mainloop()
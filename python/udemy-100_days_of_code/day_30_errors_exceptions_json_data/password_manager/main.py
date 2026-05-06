import tkinter as tk
from tkinter import messagebox
from random import choice, randint, shuffle
import pyperclip
import json

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
    new_data = {
        web_entry: {
            "username": username_entry,
            "password": pw_entry
        }
    }


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
            # Add the new entries in the txt file
            # with open("passwords.json", "w") as json_file: # Create and / or open the json file in write mode
            #     json.dump(new_data, json_file, indent=4) # Add data in the json file. Indent so it looks pretty

            # Print the datafile in the console instead of writting the data. open("passwords.json", "w") has to change to open("passwords.json", "r")
            # with open("passwords.json", "r") as json_file: # Open the json file i nread mode
                # data = json.load(json_file)
                # print(data)

            #Update / add data. Try to open the file if it exists in read mode
            try:
                with open("passwords.json", "r") as json_file: # Open the json file in read mode 
                    # Read the old data in the json file
                    data = json.load(json_file)
            # If file not found, create a new file and open in write mode and add the new data directly
            except FileNotFoundError:
                with open("passwords.json", "w") as json_file: # Open the json file in write mode
                    json.dump(new_data, json_file, indent=4)
            # If the file exists and the try mode was successful, go ahead and update the data with the new data
            # Then write the new data in the file
            else:
                # Update the old data with new data
                data.update(new_data)
                with open("passwords.json", "w") as json_file: # Open the json file in write mode
                    # Save the updated data
                    json.dump(data, json_file, indent=4)
            
            finally:
                # Delete the entries from the form
                website_entry.delete(0, tk.END)
                password_entry.delete(0, tk.END)

# ---------------------------- SEARCH EXISTING ENTRY ------------------------------- #
def search_entry():
    try:
        with open("passwords.json", "r") as json_file: # Open the json file in read mode 
            # Read the old data in the json file
            data = json.load(json_file)
    except:
        tk.messagebox.showerror(title = "No file exists", message = "There are currently no entries at all.")
    else:
        web_entry = website_entry.get()
        if web_entry in data:
            tk.messagebox.showinfo(title = web_entry, message = f"These are the login info for {web_entry}: "
                                   f"\nEmail/username: {data[web_entry]["username"]} \nPassword: {data[web_entry]["password"]}")
        else:
            tk.messagebox.showwarning(title = "No entry found", message = f"There is no entry for {web_entry} in the database.")

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
# website_entry = tk.Entry(width=24)
# website_entry.grid(column=1, row=1, columnspan=2, sticky="W")
# website_entry.focus()

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

# Create frame to include "website_entry" and "Search" button
website_frame = tk.Frame(window)
website_frame.grid(column=1, row=1)

# a text field to enter the password of the website
website_entry = tk.Entry(website_frame, width=24)
website_entry.pack(side="left")
website_entry.focus()

# BUTTONS
# A button that searches and displays the username and password for the existing entry in a popup window
search_entry_button = tk.Button(website_frame, text="Search", command=search_entry, width=14)
search_entry_button.pack(side="left", padx=(5, 0))

# A button that auto generates a password when clicked
generate_password_button = tk.Button(password_frame, text="Generate Password", command=generate_password)
generate_password_button.pack(side="left", padx=(5, 0))

# A button that allows us to save the username and password for the website we want to register
add_button = tk.Button(text="Add", width=36, command=save_password)
add_button.grid(column=1, row=4, columnspan=2, sticky="W")

window.mainloop()
import tkinter as tk

def button_clicked():
    print("I got clicked")
    new_text = entry.get() # Gets the text from the entry field
    my_label.config(text=new_text) # Updates the label with the text from the entry field

window = tk.Tk()
window.title("My First GUI Program")
window.minsize(width=500, height=300)
window.config(padx=20, pady=20) # Add some padding around the window

# Label
my_label = tk.Label(text="I am a Label", font=("Arial", 24, "bold"))
my_label["text"] = "New Text"
my_label.config(text="New Text")
my_label.grid(column=0, row=0) # Place the label in the first column and first row of the grid
my_label.config(padx=50, pady=50) # Add some padding around the label

# Button
button = tk.Button(text="Click Me", command=button_clicked)
button.grid(column=1, row=1) # Place the button in the second column and second row of the grid

# New Button
new_button = tk.Button(text="New! Click Me", command=button_clicked)
new_button.grid(column=2, row=0) # Place the new button in the third column and first row of the grid

# Entry
entry = tk.Entry(width=10)
# Add some text to begin with
entry.insert(0, "Some text to begin with.")
entry.grid(column=4, row=3) # Place the entry field in the fifth column and fourth row of the grid

# #Text
# text = tk.Text(height=5, width=30)
# text.focus() # Place cursor in the text field
# text.insert(tk.END, "Example of multi-line text entry.")
# text.pack()

# # Spinbox
# def spinbox_used():
#     print(spinbox.get())

# spinbox = tk.Spinbox(from_=0, to=10, width=5, command=spinbox_used)
# spinbox.pack()

# # Scale
# def scale_used(value):
#     print(value)

# scale = tk.Scale(from_=0, to=100, command=scale_used)
# scale.pack()

# # Checkbutton
# def checkbutton_used():
#     print(checked_state.get()) # 0 if unchecked, 1 if checked

# checked_state = tk.IntVar()
# checkbutton = tk.Checkbutton(text="Is On?", variable=checked_state, command=checkbutton_used)
# checked_state.get()
# checkbutton.pack()

# # Radiobutton
# def radio_used():
#     print(radio_state.get()) # 1 if selected, 0 if not selected

# radio_state = tk.IntVar()
# radiobutton1 = tk.Radiobutton(text="Option 1", value=1, variable=radio_state, command=radio_used)
# radiobutton2 = tk.Radiobutton(text="Option 2", value=2, variable=radio_state, command=radio_used)
# radiobutton1.pack()
# radiobutton2.pack()

# # Listbox
# def listbox_used(event):
#     print(listbox.get(listbox.curselection())) # Gets the current selection from the listbox and prints it to the console

# listbox = tk.Listbox(height=4)
# fruits = ["Apple", "Pear", "Orange", "Banana"]
# for item in fruits:
#     listbox.insert(fruits.index(item), item)
# listbox.bind("<<ListboxSelect>>", listbox_used) # Bind the listbox selection event to the listbox_used function
# listbox.pack()

window.mainloop()
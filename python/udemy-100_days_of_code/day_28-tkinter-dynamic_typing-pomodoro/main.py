import tkinter as tk
import math
# ---------------------------- CONSTANTS ------------------------------- #
PINK = "#e2979c"
RED = "#e7305b"
GREEN = "#9bdeac"
YELLOW = "#f7f5dd"
FONT_NAME = "Courier"
WORK_MIN = 25
SHORT_BREAK_MIN = 5
LONG_BREAK_MIN = 20

# ---------------------------- TIMER RESET ------------------------------- # 

# ---------------------------- TIMER MECHANISM ------------------------------- # 

def start_timer():
    count_down(WORK_MIN * 60) # Start the countdown with a specified time (in seconds). In this case, it starts the countdown with 5 seconds for testing purposes.

# ---------------------------- COUNTDOWN MECHANISM ------------------------------- # 

def count_down(count):
    count_min = math.floor(count / 60) # Calculate the number of minutes by dividing the count (in seconds) by 60.
    print(count_min)
    count_sec = count % 60 # Calculate the remaining seconds by taking the modulus of the count (in seconds) by 60.
    print(count_sec)
    canvas.itemconfig(timer_text, text=f"{count_min}:{count_sec:02d}") # Update the timer text on the canvas with the remaining time in minutes and seconds format.

# ---------------------------- UI SETUP ------------------------------- #
window = tk.Tk() # Create a new instance of the Tk class from the tkinter library, which represents the main application window
window.title("Pomodoro")
# Configure the window with padding and a background color using the config method, 
# which sets the padding on the x and y axes to 100 and 100 pixels, respectively, and sets the background color to YELLOW. 
# The config method is used to modify the properties of the window after it has been created.
window.config(padx=100, pady=100, bg=YELLOW)
# The after method is used to schedule a function to be called after a specified amount of time.
window.after(1000, count_down, 5) # Call the count_down function with an initial value of 5 seconds after 1000 milliseconds (1 second).

# Create a new Label widget with specified text, font, background color, and foreground color. The Label widget is used to display text or images in the window.
title_label = tk.Label(text="Timer", font=(FONT_NAME, 35, "bold"), bg=YELLOW, fg=GREEN) # Create a new Label widget with specified text, font, background color, and foreground color.
# Place the label in the second column and first row of the grid using the grid geometry manager. The grid manager organizes widgets in a table- like structure, where you can specify 
# the column and row for each widget. In this case, the label is placed in the second column (column=1) and first row (row=0) of the grid.
title_label.grid(column=1, row=0) 

# Create a new Label widget with specified text, font, background color, and foreground color. The Label widget is used to display text or images in the window.
checkmark_label = tk.Label(text="✔", font=(FONT_NAME, 35, "bold"), bg=YELLOW, fg=GREEN) # Create a new Label widget with specified text, font, background color, and foreground color.
# Place the label in the second column and third row of the grid using the grid geometry manager. 
# The grid manager organizes widgets in a table- like structure, where you can specify the column and row for each widget. 
# In this case, the label is placed in the second column (column=1) and third row (row=2) of the grid.
checkmark_label.grid(column=1, row=3)

# Create a new Button widget with specified text, background color, foreground color, and no highlight border. The Button widget is used to create clickable buttons in the window.
start_button = tk.Button(text="Start", highlightthickness=0, bg=YELLOW, fg=GREEN, font=(FONT_NAME, 12, "bold"), command=start_timer)
# Place the button in the first column and third row of the grid using the grid geometry manager. 
# The grid manager organizes widgets in a table- like structure, where you can specify the column and row for each widget. 
# In this case, the button is placed in the first column (column=0) and third row (row=2) of the grid.
start_button.grid(column=0, row=2)
# start_button.config(command=start_timer) # Set the command for the start button to call the start_timer function when clicked

# Create a new Button widget with specified text, background color, foreground color, and no highlight border. The Button widget is used to create clickable buttons in the window.
reset_button = tk.Button(text="Reset", highlightthickness=0, bg=YELLOW, fg=GREEN, font=(FONT_NAME, 12, "bold"))
# Place the button in the third column and third row of the grid using the grid geometry manager. 
# The grid manager organizes widgets in a table- like structure, where you can specify the column and row for each widget. 
# In this case, the button is placed in the third column (column=2) and third row (row=2) of the grid.
reset_button.grid(column=2, row=2)

# Create a new Canvas widget with a specified width, height, background color, and no highlight border. The Canvas widget is used for drawing shapes, images, and text in the window.
canvas = tk.Canvas(width=204, height=224, bg=YELLOW, highlightthickness=0) # Create a new Canvas widget with a specified width, height, background color, and no highlight border. 
# The Canvas widget is used for drawing shapes, images, and text in the window.
tomato_image = tk.PhotoImage(file="tomato.png") # Load the image file and keep a reference to prevent garbage collection
canvas.create_image(101, 112, image=tomato_image) # Add the image to the canvas at the specified coordinates
# Create a new text item on the canvas with specified coordinates, text, fill color, and font. 
# The create_text method is used to add text to the canvas at the specified coordinates (100, 130) with the text "00:00", fill color "white", 
# and font defined by FONT_NAME with a size of 35 and bold style.
timer_text = canvas.create_text(100, 130, text="00:00", fill="white", font=(FONT_NAME, 35, "bold")) 
# Place the canvas in the second column and second row of the grid using the grid geometry manager. The grid manager organizes widgets in a table- like structure, 
# where you can specify the column and row for each widget. In this case, the canvas is placed in the second column (column=1) and second row (row=1) of the grid.
canvas.grid(column=1, row=1) 

# Start the main event loop of the application, which keeps the window open and responsive to user interactions. 
# The mainloop method is called on the window object, and it will run until the user closes the window.
window.mainloop()
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
reps = 0
timer = None

# ---------------------------- TIMER RESET ------------------------------- # 

def reset_timer():
    global reps, timer
    if timer is not None:
        window.after_cancel(timer) # Cancel the scheduled timer using the after_cancel method when a timer id exists.
    title_label.config(text="Timer") # Reset the title label text to "Timer" using the config method to update the label's properties.
    canvas.itemconfig(timer_text, text="00:00") # Reset the timer text on the canvas to "00:00" using the itemconfig method to update the properties of the timer_text item on the canvas.
    checkmark_label.config(text="") # Clear the checkmark label text using the config method to update the label's properties.
    reps = 0 # Reset the number of repetitions (reps) to 0.
    timer = None

# ---------------------------- TIMER MECHANISM ------------------------------- # 

def start_timer():
    global reps
    reps += 1
    work_sec = WORK_MIN * 60
    short_break_sec = SHORT_BREAK_MIN * 60
    long_break_sec = LONG_BREAK_MIN * 60

    # If it is the 1st/3rd/5th/7th rep:
    if reps % 8 == 0:
        count_down(long_break_sec) # Start the countdown with the long break time (in seconds).
        title_label.config(text="Long Break", fg=RED) # Update the title label to indicate that it's a break time and change the text color to red.
    elif reps % 2 == 0:
        count_down(short_break_sec) # Start the countdown with the short break time (in seconds).
        title_label.config(text="Short Break", fg=PINK) # Update the title label to indicate that it's a break time and change the text color to pink.
    else:
        count_down(work_sec) # Start the countdown with a specified time (in seconds). In this case, it starts the countdown with 5 seconds for testing purposes.
        title_label.config(text="Work", fg=GREEN) # Update the title label to indicate that it's work time and change the text color to green.

# ---------------------------- COUNTDOWN MECHANISM ------------------------------- # 

def count_down(count):
    count_min = math.floor(count / 60) # Calculate the number of minutes by dividing the count (in seconds) by 60.
    print(f"count_min: {count_min}")
    count_sec = count % 60 # Calculate the remaining seconds by taking the modulus of the count (in seconds) by 60.
    if count_sec < 10:
        count_sec = f"0{count_sec}" # Format the seconds to always display two digits (e.g., "05" instead of "5") if the seconds are less than 10.
    print(f"count_sec: {count_sec}")
    canvas.itemconfig(timer_text, text=f"{count_min}:{count_sec}") # Update the timer text on the canvas with the remaining time in minutes and seconds format.
    if count > 0:
        global timer
        timer = window.after(1000, count_down, count - 1) # Schedule the count_down function to be called again after 1000 milliseconds (1 second) with the updated count (decremented by 1 second).
    else:
        start_timer() # Start the timer again when the countdown reaches zero.
        marks = ""
        work_sessions = math.floor(reps / 2) # Calculate the number of completed work sessions by dividing the number of repetitions by 2 and rounding down.
        for _ in range(work_sessions):
            marks += "✔" # Add a checkmark for each completed work session.
        checkmark_label.config(text=marks) # Update the checkmark label with the accumulated checkmarks to visually represent the number of completed work sessions.

# ---------------------------- UI SETUP ------------------------------- #
window = tk.Tk() # Create a new instance of the Tk class from the tkinter library, which represents the main application window
window.title("Pomodoro")
# Configure the window with padding and a background color using the config method, 
# which sets the padding on the x and y axes to 100 and 100 pixels, respectively, and sets the background color to YELLOW. 
# The config method is used to modify the properties of the window after it has been created.
window.config(padx=100, pady=100, bg=YELLOW)
# The after method is used to schedule a function to be called after a specified amount of time.
window.after(1000, count_down, 25 * 60) # Call the count_down function with an initial value of 5 seconds after 1000 milliseconds (1 second).

# TITLE LABEL
# Create a new Label widget with specified text, font, background color, and foreground color. The Label widget is used to display text or images in the window.
title_label = tk.Label(text="Timer", font=(FONT_NAME, 35, "bold"), bg=YELLOW, fg=GREEN) # Create a new Label widget with specified text, font, background color, and foreground color.
# Place the label in the second column and first row of the grid using the grid geometry manager. The grid manager organizes widgets in a table- like structure, where you can specify 
# the column and row for each widget. In this case, the label is placed in the second column (column=1) and first row (row=0) of the grid.
title_label.grid(column=1, row=0) 

# CHECKMARKS
# Create a new Label widget with specified text, font, background color, and foreground color. The Label widget is used to display text or images in the window.
checkmark_label = tk.Label(text="", font=(FONT_NAME, 35, "bold"), bg=YELLOW, fg=GREEN) # Create a new Label widget with specified text, font, background color, and foreground color.
# Place the label in the second column and third row of the grid using the grid geometry manager. 
# The grid manager organizes widgets in a table- like structure, where you can specify the column and row for each widget. 
# In this case, the label is placed in the second column (column=1) and third row (row=2) of the grid.
checkmark_label.grid(column=1, row=3)

# START BUTTON
# Create a new Button widget with specified text, background color, foreground color, and no highlight border. The Button widget is used to create clickable buttons in the window.
start_button = tk.Button(text="Start", highlightthickness=0, bg=YELLOW, fg=GREEN, font=(FONT_NAME, 12, "bold"), command=start_timer)
# Place the button in the first column and third row of the grid using the grid geometry manager. 
# The grid manager organizes widgets in a table- like structure, where you can specify the column and row for each widget. 
# In this case, the button is placed in the first column (column=0) and third row (row=2) of the grid.
start_button.grid(column=0, row=2)
# start_button.config(command=start_timer) # Set the command for the start button to call the start_timer function when clicked

# RESET BUTTON
# Create a new Button widget with specified text, background color, foreground color, and no highlight border. The Button widget is used to create clickable buttons in the window.
reset_button = tk.Button(text="Reset", highlightthickness=0, bg=YELLOW, fg=GREEN, font=(FONT_NAME, 12, "bold"), command=reset_timer)
# Place the button in the third column and third row of the grid using the grid geometry manager. 
# The grid manager organizes widgets in a table- like structure, where you can specify the column and row for each widget. 
# In this case, the button is placed in the third column (column=2) and third row (row=2) of the grid.
reset_button.grid(column=2, row=2)

# CANVAS
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
import pandas
import turtle

# Create a turtle screen and set the title and dimensions. Add the image of the blank map of the U.S. as a shape to the turtle screen and set the turtle shape to the image.
screen = turtle.Screen()
screen.title("U.S. States Game")
# screen.setup(width=725, height=491)
image = "blank_states_img.gif"
screen.addshape(image)
turtle.shape(image)

# Read the CSV file with the data of the states and their coordinates. The CSV file has three columns: state, x, and y.
data = pandas.read_csv("50_states.csv")
states_list = data.state.to_list()

def add_state_name(state_name):
    x = int(data[data.state == state_name].x.item())
    y = int(data[data.state == state_name].y.item())
    # Create a turtle to write the state name on the map at the correct coordinates. 
    # Hide the turtle and lift the pen up so it doesn't draw a line when moving to the coordinates. 
    # Write the state name at the coordinates with the align parameter set to "center" and the font parameter set to ("Arial", 12, "normal").
    correct_state = turtle.Turtle()
    correct_state.hideturtle()
    correct_state.penup()
    correct_state.goto(x, y)
    correct_state.write(state_name, align="center", font=("Arial", 10, "bold"))

    states_list.remove(state_name)

while len(states_list) > 0:
    # Create a turtle to write the score on the screen. 
    # Hide the turtle and lift the pen up so it doesn't draw a line when moving to the coordinates. 
    # Write the score at the top of the screen with the align parameter set to "center" and the font parameter set to ("Arial", 16, "normal").

    # Ask the user to input the name of a state. Keep prompting until a valid, unguessed state is entered.
    answer_state = ""
    while answer_state not in data.state.values:
        if answer_state:  # If this isn't the first attempt, show an error prompt
            answer_state = screen.textinput(title=f"{50 - len(states_list)}/50 States Correct", prompt="That's not a state or you've already guessed it. Try again!").title()
        else:
            answer_state = screen.textinput(title=f"{50 - len(states_list)}/50 States Correct", prompt="What's another state's name?").title()
    
    # Now that we have a valid state, add it to the map
    add_state_name(answer_state)

turtle.mainloop()
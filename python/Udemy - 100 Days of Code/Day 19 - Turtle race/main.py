from turtle import Turtle, Screen
import random 

is_race_on = False
screen = Screen()
screen.setup(width=500, height=400)
bet = screen.textinput(title="Make a bet", prompt="Which turtle will win the race? Enter a color: ")

rainbow_colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
turtles = [Turtle(shape="turtle") for _ in range(7)]

for i, turtle in enumerate(turtles):
    turtle.color(rainbow_colors[i])
    turtle.penup()
    turtle.setpos(x=-230, y=-120 + i * 40)

if bet:
    is_race_on = True

while is_race_on:
    for turtle in turtles:
        rand_distance = random.randint(0, 10)
        turtle.forward(rand_distance)
        if turtle.xcor() > 230:
            is_race_on = False
            winning_color = turtle.pencolor()
            if winning_color == bet:
                print(f"You've won! The {winning_color} turtle is the winner!")
                screen.title(f"You've won! The {winning_color} turtle is the winner!")
            else:
                print(f"You've lost! The {winning_color} turtle is the winner!")
                screen.title(f"You've lost! The {winning_color} turtle is the winner!")


screen.exitonclick()


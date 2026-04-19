from turtle import Turtle, Screen
import turtle

timmy = Turtle()
timmy.shape("turtle")
timmy.color("#000080")




colors = ["black", "red", "orange", "yellow", "green", "blue", "indigo", "violet"]
num_sides = 3
angle = 360 / num_sides


# Draw a different shape for each color in the list
# for color in colors:
#     timmy.pencolor(color)
#     for _ in range(num_sides):
#         timmy.forward(100)
#         timmy.left(angle)
#     num_sides += 1
#     angle = 360 / num_sides


# Create random walk using random colors and random directions
# change the thickness of the pen
# speed up the turtle
from random import choice, randint, random
random_turns = [0, 90, 180, 270]
iterations = 200

pen_size = 1
speed = 1

# Create a function that generates a random color
def random_color():
    r = randint(0, 255)
    g = randint(0, 255)
    b = randint(0, 255)
    return (r/255, g/255, b/255)

# Have the turtle move forward by 30 pixels, then turn in a random direction, change to a random color, and increase the pen size and speed with each iteration
# for _ in range(iterations):
#     timmy.forward(30)
#     timmy.setheading(choice(random_turns))
#     timmy.pencolor(random_color())
#     timmy.pensize(pen_size)
#     timmy.speed(speed)
#     speed += 1
#     pen_size += 1

timmy.speed("fastest")

def draw_spirograph(size_of_gap):
     for _ in range(int(360 / size_of_gap)):
        timmy.circle(100)
        timmy.left(size_of_gap)
        timmy.pencolor(random_color())

draw_spirograph(5)

screen = Screen()
screen.exitonclick()
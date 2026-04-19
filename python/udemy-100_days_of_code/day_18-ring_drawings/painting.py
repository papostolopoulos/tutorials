from turtle import Turtle, Screen, colormode
import colorgram
from random import choice

colormode(255)
timmy = Turtle()
timmy.penup()
timmy.hideturtle()
y = -230
timmy.goto(-230.00, y)
timmy.pensize(20)
timmy.speed("fastest")

# Extract 30 colors from an image and print the RGB values of the colors in a list.
colors = colorgram.extract(r'C:\Users\Paris Apostolopoulos\Documents\coding\tutorials\python\Udemy - 100 Days of Code\Day 18\spot_painting.jpg', 30)

rgb_colors = []
for color in colors:
    rgb_colors.append((color.rgb.r, color.rgb.g, color.rgb.b))

for _ in range(10):
    for _ in range(10):
        timmy.dot(20, choice(rgb_colors))
        timmy.forward(50)

    y += 50
    timmy.goto(-230.00, y)



screen = Screen()
screen.exitonclick()
# Paint a 10 by 10 grid of dots, where the colors of the dots are pulled from the extracted color list. 
# Each dot should have a diameter of 20 pixels and there should be a 50 pixel space between the dots.
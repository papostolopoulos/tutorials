from turtle import Turtle, Screen
from prettytable import PrettyTable

# Create a turtle and move it around the screen
timmy = Turtle()
print(timmy)
timmy.shape("turtle")
timmy.color("coral")
timmy.color("coral", "cyan")
timmy.forward(100)
timmy.left(120)
timmy.forward(100)
timmy.left(120)
timmy.forward(100)
timmy.up()
timmy.goto(-100, -100)
timmy.down()
timmy.left(120)
timmy.forward(100)
timmy.left(120)
timmy.forward(100)
timmy.left(120)
timmy.forward(100)
timmy.left(120)
timmy.up()
timmy.forward(200)
timmy.down()
timmy.forward(100)
timmy.left(120)
timmy.forward(100)
timmy.left(120)
timmy.forward(100)

my_screen = Screen()
print(my_screen.canvheight)
my_screen.exitonclick()

#Create Asii table
table = PrettyTable()
table.add_column("Pokemon Name", ["Pikachu", "Squirtle", "Charmander"])
table.add_column("Type", ["Electric", "Water", "Fire"])
table.align = "l"
print(table)
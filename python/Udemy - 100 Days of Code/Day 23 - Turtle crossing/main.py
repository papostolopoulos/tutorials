import time
from turtle import Screen
from player import Player
from car_manager import CarManager
from scoreboard import Scoreboard

# TODO: Create a turtle crossing game where the player controls a turtle
#  and tries to cross a busy road without getting hit by cars. 
# The player can move the turtle up, down, left, and right using the arrow keys. 
# The cars will move across the screen from left to right at varying speeds. 
# If the turtle gets hit by a car, the game is over. 
# If the turtle successfully crosses the road, the player wins.

# Step 1. Create a turtle player that starts at the bottom of the screen and listen for 
# - the "Up" keypress to move the turtle north,
# - the "Down" keypress to move the turtle south,
# - the "Left" keypress to move the turtle west,
# - the "Right" keypress to move the turtle east.

# Step 2. Create cars that are 20px high by 40px wide that are randomly generated 
# along the y-axis and move to the left edge of the screen. No cars should be 
# generated in the top and bottom 50px of the screen (think of it as a safe zone 
# for our turtle). Hint: generate a new car only every 6th time the game loop runs.

# Step 3. Detect when the turtle collides with a car. If a collision is detected,
# the game should end.

# Step 4. Detect when the turtle player has reached the top edge of the screen 
# (i.e., reached the FINISH_LINE_Y). When this happens, return the turtle to the 
# starting position and increase the speed of the cars.

#Step 5. Create a scoreboard that keeps track of which level the user is on. 
# Every time the turtle player does a successful crossing, the level should increase. 
# When the turtle hits a car, GAME OVER should be displayed in the centre.
screen = Screen()
screen.setup(width=600, height=600)
screen.tracer(0)

# Create turtle player
player = Player()
car_manager = CarManager()
scoreboard = Scoreboard()

# Listen for key presses to move the turtle
screen.listen()
screen.onkey(player.move_up, "Up")
screen.onkey(player.move_down, "Down")
screen.onkey(player.move_left, "Left")
screen.onkey(player.move_right, "Right")

game_is_on = True

# Main game loop
while game_is_on:
    time.sleep(0.1) # Control the speed of the game loop
    screen.update() # Update the screen to show changes
    car_manager.create_car() # Create new cars at random intervals
    car_manager.move_cars() # Move existing cars across the screen
    # Detect collision with cars
    for car in car_manager.cars:
        if car.distance(player) < 20:
            scoreboard.game_over()
            game_is_on = False
            screen.exitonclick() # Wait for user to click before closing the window
    # Detect successful crossing
    if player.is_at_finish_line():
        player.go_to_start()
        car_manager.increase_speed()
        scoreboard.increase_level()

from turtle import Screen, Turtle # Used for creating the game window and controlling the snake's movement
import time # Used for controlling the speed of the snake's movement
from snake import Snake # Importing the Snake class from the snake.py file
from scoreboard import Scoreboard # Importing the Scoreboard class from the scoreboard.py file
from food import Food # Importing the Food class from the food.py file

screen = Screen()
screen.setup(width=600, height=600)
screen.bgcolor("black")
screen.title("Snake Game")
screen.tracer(0)

# Create a snake body, food, and scoreboard
snake = Snake()
food = Food()
scoreboard = Scoreboard()

# Control the snake with keyboard inputs
screen.listen()
screen.onkey(snake.up, "Up")
screen.onkey(snake.down, "Down")
screen.onkey(snake.left, "Left")
screen.onkey(snake.right, "Right")

# Move the snake
game_is_on = True
while game_is_on:
    screen.update()
    time.sleep(0.1)
    snake.move()

    # Detect collision with food, refresh food, extend the snake, and update the score
    if snake.head.distance(food) < 15:
        food.refresh()
        snake.extend()
        scoreboard.increase_score()
        

    # Detect collision with wall
    if snake.head.xcor() > 290 or snake.head.xcor() < -290 or snake.head.ycor() > 290 or snake.head.ycor() < -290:
        game_is_on = False
        scoreboard.game_over()

    # Detect collision with tail
    for segment in snake.segments[1:]:
        if snake.head.distance(segment) < 10:
            game_is_on = False
            scoreboard.game_over()
    


screen.exitonclick()
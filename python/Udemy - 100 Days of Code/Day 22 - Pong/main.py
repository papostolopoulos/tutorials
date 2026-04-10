from turtle import Screen, Turtle, left
from paddle import Paddle
from ball import Ball
import time
from scoreboard import Scoreboard

# Create the screen
screen = Screen()
screen.bgcolor("black")
screen.setup(width=800, height=600)
screen.title("Pong")
screen.tracer(0)

# Create the paddles
right_paddle = Paddle((350, 0))
left_paddle = Paddle((-350, 0))

# Create the ball
ball = Ball()

# Create the scoreboard
scoreboard = Scoreboard()

# Move the paddles
screen.listen()
screen.onkey(right_paddle.go_up, "Up")
screen.onkey(right_paddle.go_down, "Down")
screen.onkey(left_paddle.go_up, "w")
screen.onkey(left_paddle.go_down, "s")

# Keep score


game_is_on = True

# Main game loop
while game_is_on:
    time.sleep(ball.move_speed) # Control the speed of the ball
    screen.update()
    ball.move()

    # Detect collision with wall and bounce
    if ball.ycor() > 275 or ball.ycor() < -275:
        ball.bounce_y()

    # Detect collision with paddle
    if (ball.distance(right_paddle) < 50 and ball.xcor() > 320) or (ball.distance(left_paddle) < 50 and ball.xcor() < -320):
        ball.bounce_x()

    # Detect when right paddle misses
    if ball.xcor() > 380:
        ball.reset_position()
        scoreboard.left_point() # Update the left player's score
        ball.move_speed = 0.1 # Reset the ball speed after a point is scored

    # Detect when left paddle misses
    if ball.xcor() < -380:
        ball.reset_position()
        scoreboard.right_point() # Update the right player's score
        ball.move_speed = 0.1 # Reset the ball speed after a point is scored



        # game_is_on = False
        # # Create a game over screen
        # game_over = Turtle()
        # game_over.color("white")
        # game_over.penup()
        # game_over.hideturtle()
        # game_over.goto(0, 0)
        # game_over.write("GAME OVER", align="center", font=("Arial", 30, "normal"))
    


    


screen.exitonclick()
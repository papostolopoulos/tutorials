from turtle import Turtle

class Ball(Turtle):
    def __init__(self):
        super().__init__()
        self.shape("circle")
        self.color("white")
        self.penup()
        self.x_move = 10
        self.y_move = 10
        self.move_speed = 0.1

    def move(self):
        new_x = self.xcor() + self.x_move
        new_y = self.ycor() + self.y_move
        self.goto(new_x, new_y)

    def bounce_y(self):
        self.y_move *= -1 # Reverse the vertical direction
        self.move_speed *= 0.9 # Increase the speed of the ball by reducing the move_speed (which is the delay between moves)

    def bounce_x(self):
        self.x_move *= -1 # Reverse the horizontal direction
        self.move_speed *= 0.9 # Increase the speed of the ball by reducing the move_speed (which is the delay between moves)

    def reset_position(self):
        self.goto(0, 0)
        self.bounce_x()
        
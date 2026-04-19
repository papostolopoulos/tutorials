from turtle import Turtle # Used for creating the scoreboard and displaying the score
ALIGNMENT = "center"
FONT = ("Arial", 20, "normal")

class Scoreboard(Turtle):
    def __init__(self):
        super().__init__()
        self.score = 0 # Initialize the score to 0
        # Initialize the high score from the data.txt file
        with open("c:/Users/Paris Apostolopoulos/Documents/coding/tutorials/python/Udemy - 100 Days of Code/Day 24 - Snake - Files and directories/data.txt", "r") as data:
            self.high_score = int(data.read())
        self.color("white")
        self.penup()
        self.hideturtle()
        self.goto(0, 270)
        self.update_scoreboard()

    def update_scoreboard(self):
        self.clear()
        self.write(f"Score: {self.score} High Score: {self.high_score}", align=ALIGNMENT, font=FONT)
        # Update the high score in the data.txt file

    def increase_score(self):
        self.score += 1
        self.update_scoreboard()

    def reset(self):
        if self.score > self.high_score:
            self.high_score = self.score
            with open("c:/Users/Paris Apostolopoulos/Documents/coding/tutorials/python/Udemy - 100 Days of Code/Day 24 - Snake - Files and directories/data.txt", "w") as data:
                data.write(str(self.high_score))
        self.score = 0
        self.update_scoreboard()

    # def game_over(self):
    #     self.goto(0, 0)
    #     self.write("GAME OVER", align=ALIGNMENT, font=FONT)
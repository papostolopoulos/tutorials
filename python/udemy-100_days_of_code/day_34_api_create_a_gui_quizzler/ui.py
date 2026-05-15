from tkinter import *
from quiz_brain import QuizBrain

THEME_COLOR = "#375362"

class QuizInterface:
    def __init__(self, quiz_brain: QuizBrain):
        # quiz_brain is the instance of the QuizBrain class that we will use to get the questions and check the answers
        self.quiz = quiz_brain

        # Create the window
        self.window = Tk()
        self.window.title("Quizzler")
        self.window.config(padx=20, pady=20, bg=THEME_COLOR) # Set the background color of the window

        # Create a label to show the score
        self.score_label = Label(text="Score: 0", fg="white", bg=THEME_COLOR) # Create a label to show the score
        self.score_label.grid(row=0, column=1) # Put the score label on the window

        # Create a canvas to show the question text
        self.canvas = Canvas(width=300, height=250, bg="white") # Create a canvas to put the question text on
        self.question_text = self.canvas.create_text(150, 125, width=280, text="Some question text", fill=THEME_COLOR, font=("Arial", 20, "italic")) # Create the question text on the canvas
        self.canvas.grid(row=1, column=0, columnspan=2, pady=50) # Put the canvas on the window

        # Create the true and false buttons
        true_image = PhotoImage(file="images/true.png")
        self.true_button = Button(image=true_image, highlightthickness=0, command=self.true_pressed) # Create the true button
        self.true_button.grid(row=2, column=0) # Put the true button on the window
        false_image = PhotoImage(file="images/false.png")
        self.false_button = Button(image=false_image, highlightthickness=0, command=self.false_pressed) # Create the false button
        self.false_button.grid(row=2, column=1) # Put the false button on the window

        # Get the first question from the quiz brain and display it on the canvas
        self.get_next_question() # Get the first question from the quiz brain and display it on the canvas

        # Loop to keep the window open                                                                                                                             
        self.window.mainloop()

    # Method to get the next question from the quiz brain and display it on the canvas
    def get_next_question(self):
        self.canvas.config(bg="white") # Reset the background color of the canvas to white
        
        if self.quiz.still_has_questions(): # Check if there are still questions left in the quiz
            self.score_label.config(text=f"Score: {self.quiz.score}") # Update the score label with the current score
            q_text = self.quiz.next_question() # Get the next question from the quiz brain
            self.canvas.itemconfig(self.question_text, text=q_text) # Update the question text on the canvas
        else:
            self.canvas.itemconfig(self.question_text, text="You've completed the quiz") # If there are no more questions left, display a message on the canvas
            self.true_button.config(state="disabled") # Disable the true button
            self.false_button.config(state="disabled") # Disable the false button

    # Method to check if the answer is correct when the true button is pressed
    def true_pressed(self):
        self.give_feedback(self.quiz.check_answer("True")) # Check if the answer is correct and give feedback to the user

    # Method to check if the answer is correct when the false button is pressed
    def false_pressed(self):
        self.give_feedback(self.quiz.check_answer("False")) # Check if the answer is correct

    # Method to give feedback to the user by changing the background color of the canvas to green if the answer is correct and red if the answer is wrong, 
    # and then after 1 second, get the next question from the quiz brain and display it on the canvas 
    def give_feedback(self, is_right):
        if is_right:
            self.canvas.config(bg="green") # Change the background color of the canvas to green if the answer is correct
        else:
            self.canvas.config(bg="red") # Change the background color of the canvas to red if the answer is wrong
        self.window.after(1000, self.get_next_question) # After 1 second, get the next question from the quiz brain and display it on the canvas
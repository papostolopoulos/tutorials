# We need to ask the questions
# We need to check if the answer was correct
# We need to check if we're at the end of the quiz

class QuizBrain:
    def __init__(self, question_list):
        self.question_number = 0
        self.question_list = question_list
        self.score = 0

    # We need to check if we're at the end of the quiz. We can do this by comparing the current question number to the length of the question list.
    def still_has_questions(self):
        return self.question_number < len(self.question_list)

    # Retrieve the item at the current question_number from the question_list.
    # Use the input() function to show the user the question text and ask them for the answer.
    def next_question(self):
        current_question = self.question_list[self.question_number]
        self.question_number += 1
        user_answer = input(f"Q.{self.question_number}: {current_question.text} (True/False): ")
        self.check_answer(user_answer, current_question.answer)

    # We need to check if the answer was correct. We can do this by comparing the user's answer to the correct answer stored in the question object.
    def check_answer(self, user_answer, correct_answer):
        if user_answer.lower() == correct_answer.lower():
            self.score += 1
            print("You got it right!")
        else:
            print("That's wrong.")
        print(f"The correct answer was: {correct_answer}.")
        print(f"Your current score is: {self.score}/{self.question_number}.")
        print("\n")

        if self.question_number == len(self.question_list):
            print("You have completed the quiz!")
            print(f"Your final score was: {self.score}/{self.question_number}.")
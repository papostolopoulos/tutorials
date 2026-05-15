from data import question_data
from question_model import Question
from quiz_brain import QuizBrain

question_bank = []
for question in question_data:
    question_text = question["question"]
    question_answer = question["correct_answer"]
    new_question = Question(question_text, question_answer)
    question_bank.append(new_question)

quiz = QuizBrain(question_bank)

# We need to check if we're at the end of the quiz. We can do this by comparing the current question number to the length of the question list.
# If we're not at the end of the quiz, we need to retrieve the item at the current question_number from the question_list. 
# We can do this by using the question_number as an index to get the current question from the question_list.
while quiz.still_has_questions():
    quiz.next_question()

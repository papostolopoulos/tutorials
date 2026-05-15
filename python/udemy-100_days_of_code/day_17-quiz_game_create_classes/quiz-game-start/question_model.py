# We need a question class to hold the question text and the answer. This will make it easier to work with the questions in our quiz brain.

class Question:
   def __init__(self, text, answer):
      self.text = text
      self.answer = answer 
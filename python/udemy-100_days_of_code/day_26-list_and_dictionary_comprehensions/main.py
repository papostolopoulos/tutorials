# List comprehension
numbers = [1, 2, 3, 4, 5]
squared_numbers = [number ** 2 for number in numbers]
print(squared_numbers)

name = "Angela"
letters_list = [letter for letter in name]
print(letters_list)

range_list = [number * 2 for number in range(1, 5)]
print(range_list)

names = ["Alex", "Beth", "Caroline", "Dave", "Eleanor", "Freddie"]
short_names = [name for name in names if len(name) < 5]
print(short_names)
long_names = [name.upper() for name in names if len(name) > 5]
print(long_names)

# Dictionary comprehension
import random
names = ["Alex", "Beth", "Caroline", "Dave", "Eleanor", "Freddie"]
students_scores = {student: random.randint(1, 100) for student in names}
print(students_scores)

passed_students = {student: score for (student, score) in students_scores.items() if score >= 60}
print(passed_students)

# Dictionary comprehension with pandas
student_dict = {
    "student": ["Angela", "James", "Lily"],
    "score": [56, 76, 98]
}

import pandas
student_data_frame = pandas.DataFrame(student_dict)
print(student_data_frame)

# Looping through rows of a data frame
for (index, row) in student_data_frame.iterrows():
    print(row.student)
    print(row.score)
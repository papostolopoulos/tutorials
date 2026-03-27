student_scores = [150, 142, 185, 120, 171, 184, 149, 24, 59, 68, 199, 78, 65, 89, 86, 55, 91, 64, 89]

sum_of_scores = 0
for score in student_scores:
    sum_of_scores += score

print("The sum of the numbers from the for loop is:", sum_of_scores)

max_of_scores = 0
for score in student_scores:
    if score > max_of_scores:
        max_of_scores = score

print("The max of the numbers from the for loop is:", max_of_scores)

print(f"The sum of the numbers in the list is {sum(student_scores)}")
print(f"The maximum number is {max(student_scores)}")
print(f"The minimum number is {min(student_scores)}")
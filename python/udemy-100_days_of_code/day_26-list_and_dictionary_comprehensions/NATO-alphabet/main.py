# student_dict = {
#     "student": ["Angela", "James", "Lily"], 
#     "score": [56, 76, 98]
# }

# #Looping through dictionaries:
# for (key, value) in student_dict.items():
#     print(f"{key}: {value}")

# import pandas
# student_data_frame = pandas.DataFrame(student_dict)
# print(student_data_frame)

# #Loop through rows of a data frame
# for (index, row) in student_data_frame.iterrows():
#     #Access index and row
#     print(f"Index: {index}, Row: {row}")
#     #Access row.student or row.score
#     print(f"Student: {row.student}, Score: {row.score}")

# Keyword Method with iterrows()
# {new_key:new_value for (index, row) in df.iterrows()}



# Create a dictionary in this format:
# {"A": "Alfa", "B": "Bravo"}
import pandas

data = pandas.read_csv("nato_phonetic_alphabet.csv")
nato_dict = {row.letter: row.code for (index, row) in data.iterrows()}

# Create a list of the phonetic code words from a word that the user inputs.
word = input("Enter a word: ").upper()
output_list = [nato_dict[letter] for letter in word]
print(output_list)


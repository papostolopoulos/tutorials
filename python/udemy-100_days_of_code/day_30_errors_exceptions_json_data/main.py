# FileNotFoundError: [Errno 2] No such file or directory: 'a_file.txt'
# with open("a_file.txt") as file:
#     file.read()

# KeyError: 'non_existent_key'
# a_dictionary = {"key": "value"}
# value = a_dictionary["non_existent_key"]

# IndexError: list index out of range
# fruit_list = ["Apple", "Banana", "Pear"]
# fruit = fruit_list[3]

# TypeError: can only concatenate str (not "int") to str
# text = "abc"
# print(text + 5)

# NameError: name 'FileNotFound' is not defined. Did you mean: 'FileNotFoundError'?


# try, except, else, finally, raise
# try:
#     file = open("a_file.txt") # This line throws a "FileNotFound" because the file does not exist in the directory
#     #The following lines do not run at the moment because the first line throws an error and then it stops executing the rest of the lines inside the "try" section of the code.
#     a_dictionary =  {"key": "value"}
#     print("a_dictionary")
#     print(a_dictionary["non_existent_key"]) # This line throws a "KeyError" because the key does not exist
#     print("try")
      
# except FileNotFoundError:
#     # This is an alternative command that creates a file ("w"). Since "try" failed, "except" took over.
#     file = open("c:/Users/Paris Apostolopoulos/Documents/coding/tutorials/python/udemy-100_days_of_code/day_30_errors_exceptions_json_data/a_file.txt", "w") 
#     file.write("I wrote something")

# except KeyError as error_message: # "as error_message" says the program to get ahold of the actual error message
#     print(f"The key {error_message} does not exist.") # This is the message displayed in the console instead of the typical "KeyError"

# else: 
#     content = file.read()
#     print(content)

# finally:
#     file.close()
#     print("File was closed")


height = float(input("Height: "))
weight = int(input("Weight: "))

bmi = weight / height ** 2

if height > 3:
    raise ValueError("Human height should not be over 3 meters5")
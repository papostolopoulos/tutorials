#TODO: Create a letter using starting_letter.txt 
#for each name in invited_names.txt
#Replace the [name] placeholder with the actual name.
#Save the letters in the folder "ReadyToSend" with the format "letter_for_[name].txt".
    
#Hint1: This method will help you: https://www.w3schools.com/python/ref_file_readlines.asp
    #Hint2: This method will also help you: https://www.w3schools.com/python/ref_string_replace.asp
        #Hint3: THis method will help you: https://www.w3schools.com/python/ref_string_strip.asp

PLACEHOLDER = "[name]"
#TODO: Create a letter using starting_letter.txt
with open("c:/Users/Paris Apostolopoulos/Documents/coding/tutorials/python/Udemy - 100 Days of Code/Day 24 - Snake - Files and directories/Mail Merge Project/Input/Names/invited_names.txt") as names_file:
    names = names_file.readlines()

print(names)
# Open the starting letter template and replace the placeholder with each name, then save the letters in the "ReadyToSend" folder.
with open("c:/Users/Paris Apostolopoulos/Documents/coding/tutorials/python/Udemy - 100 Days of Code/Day 24 - Snake - Files and directories/Mail Merge Project/Input/Letters/starting_letter.txt") as letter_file:
    letter_contents = letter_file.read()
    for name in names:
        stripped_name = name.strip()
        new_letter = letter_contents.replace(PLACEHOLDER, stripped_name)
        with open(f"c:/Users/Paris Apostolopoulos/Documents/coding/tutorials/python/Udemy - 100 Days of Code/Day 24 - Snake - Files and directories/Mail Merge Project/Output/ReadyToSend/letter_for_{stripped_name}.txt", mode="w") as completed_letter:
            completed_letter.write(new_letter)


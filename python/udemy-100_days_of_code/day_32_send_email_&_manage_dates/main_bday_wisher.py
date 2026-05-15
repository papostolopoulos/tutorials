##################### Hard Starting Project ######################
import datetime as dt
import pandas as pd
import random as rd
import smtplib

MY_EMAIL = "papostolopoulosp@gmail.com"
MY_PASSWORD = "uujh xlft qzie mygb"
# For papostolopoulos@gmail.com the password is ptbi wmci hdlv lsmg

# Define today's date in order to check if it matches a birthday in the birthdays.csv file
today = dt.datetime.now()
today_tuple = (today.month, today.day)

# Read all the data from the csv file
data = pd.read_csv("birthdays.csv")

# Create new dictionary with all the rows of the data from birthdays.csv
birthdays_dict = {(data_row["month"], data_row["day"]): data_row for (index, data_row) in data.iterrows()}

# Compare to see if today's month/day tuplw matches one of the birthdays coming from the file.
if today_tuple in birthdays_dict:
    birthday_person = birthdays_dict[today_tuple]
    print(birthdays_dict[today_tuple])
    # Pick a random letter
    file_path = f"letter_templates/letter_{rd.randint(1,3)}.txt"
    # Use the replace() method to replace [NAME] with the actual name
    with open(file_path) as letter_file:
        contents = letter_file.read()
        contents = contents.replace("[NAME]", birthday_person["name"])

    # Email the notification
    with smtplib.SMTP("smtp.gmail.com", 587) as connection:
        # starttls is used to secure our connection to the server by encrypting the message.
        connection.starttls()
        # login, send, close
        connection.login(user=MY_EMAIL, password=MY_PASSWORD)
        connection.sendmail(
            from_addr=MY_EMAIL,
            to_addrs=birthday_person["email"],
            msg=f"Subject: Happy Birthday!\n\n{contents}"
        )




# 2. Check if today matches a birthday in the birthdays.csv
# HINT 1: Only the month and day matter. 
# HINT 2: You could create a dictionary from birthdays.csv that looks like this:
# birthdays_dict = {
#     (month, day): data_row
# }
#HINT 3: Then you could compare and see if today's month/day matches one of the keys in birthday_dict like this:
# if (today_month, today_day) in birthdays_dict:

# 3. If step 2 is true, pick a random letter from letter templates and replace the [NAME] with the person's actual name from birthdays.csv
# HINT: https://www.w3schools.com/python/ref_string_replace.asp

# 4. Send the letter generated in step 3 to that person's email address.
# HINT: Gmail(smtp.gmail.com), Yahoo(smtp.mail.yahoo.com), Hotmail(smtp.live.com), Outlook(smtp-mail.outlook.com)




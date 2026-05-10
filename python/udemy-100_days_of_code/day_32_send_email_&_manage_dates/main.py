import smtplib
import datetime as dt
import random as rd

MY_EMAIL = "papostolopoulosp@gmail.com"
MY_PASSWORD = "uujh xlft qzie mygb"

# Select a day of the week (Now) 
now = dt.datetime.now()
weekday = now.weekday()
if weekday == 5:
    with open("quotes.txt", "r") as quote_file:
        all_quotes = quote_file.readlines()
        quote = rd.choice(all_quotes)

     # Create an smtp conection by using the smtplib library
    with smtplib.SMTP("smtp.gmail.com", 587) as connection:
        # starttls is used to secure our connection to the server by encrypting the message.
        connection.starttls()
        # login, send, close
        connection.login(user=MY_EMAIL, password=MY_PASSWORD)
        connection.sendmail(
            from_addr=MY_EMAIL,
            to_addrs="papostolopoulos@gmail.com",
            msg=f"Subject: Quote of the day\n\n{quote.split(' - ')[0]}\n{quote.split(' - ')[1]}"
        )
    
   
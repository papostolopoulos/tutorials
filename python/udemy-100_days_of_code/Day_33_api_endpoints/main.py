import requests
from datetime import datetime
import smtplib
import time

MY_EMAIL = "papostolopoulosp@gmail.com"
MY_PASSWORD = "uujh xlft qzie mygb"

MY_LAT = 38.340963986545134
MY_LONG =  -122.6874940883563

#-----------------------IS ISS OVERHEAD FUNCTION-----------------------#
def is_iss_overhead():
    #-----------------------ISS STATION API-----------------------#
    # Do an API call and get the lat and long of the ISS station
    response = requests.get(url="http://api.open-notify.org/iss-now.json")
    # Return a response in the event the API does not return a 200
    response.raise_for_status()
    #Get the data in a JSON format
    data = response.json()

    iss_latitude = float(data["iss_position"]["latitude"])
    iss_longitude = float(data["iss_position"]["longitude"])

    # Check if your position is within +5 or -5 degrees of the ISS position.
    if MY_LAT - 5 <= iss_latitude <= MY_LAT + 5 and MY_LONG  - 5 <= iss_longitude <= MY_LONG + 5:
        return True


#-----------------------IS NIGHTTIME FUNCTION-----------------------#
def is_night():
    # Create a dictionary in order to put the lat and lon of my location in order to use them as parameters for the sunrise/sunset API
    parameters = {
        "lat": MY_LAT,
        "lng": MY_LONG,
        "formatted": 0,
        "tzid": "America/Los_Angeles",
    }

    #-----------------------SUNRISE - SUNSET API-----------------------#
    # Do an API call and get the sunrise and sunset of the location I am at
    response = requests.get("https://api.sunrise-sunset.org/json", params=parameters)
    # Return a response in the event the API does not return a 200
    response.raise_for_status()
    #Get the data in a JSON format
    data = response.json()
    sunrise = int(data["results"]["sunrise"].split("T")[1].split(":")[0])
    sunset = int(data["results"]["sunset"].split("T")[1].split(":")[0])

    # Use the datetime module to figure out what the time is right now
    time_now = datetime.now().hour

    if time_now >= sunset or time_now <= sunrise:
        return True


# If the ISS is close to my current position
# and it is currently dark
# Then send me an email to tell me to look up.
while True:
    # Set the while loop to run every 60 seconds
    time.sleep(60)
    if is_iss_overhead() and is_night():
        # Email at the 
        with smtplib.SMTP("smtp.gmail.com", 587) as connection:
            # starttls is used to secure our connection to the server by encrypting the message.
            connection.starttls()
            # login, send, close
            connection.login(user=MY_EMAIL, password=MY_PASSWORD)
            connection.sendmail(
                from_addr=MY_EMAIL,
                to_addrs=birthday_person["email"],
                msg=f"Subject: Look Up!\n\nThe ISS is above you in the sky"
            )




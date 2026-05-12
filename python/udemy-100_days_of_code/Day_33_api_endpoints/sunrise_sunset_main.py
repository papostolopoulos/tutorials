import requests
from datetime import datetime

MY_LAT = 38.340963986545134
MY_LONG =  -122.6874940883563

parameters = {
    "lat": MY_LAT, 
    "lng": MY_LONG,
    "tzid": "America/Los_Angeles",
    "date": "2026-05-17",
    "formatted": 0
}

response = requests.get("https://api.sunrise-sunset.org/json", params = parameters)
response.raise_for_status()

data = response.json()
sunrise = data["results"]["sunrise"].split("T")
sunset = data["results"]["sunset"].split("T")

print(sunrise)

time_now = datetime.now()
print(time_now.hour)
import requests
from twilio.rest import Client

OWM_ENDPOINT = "https://api.openweathermap.org/data/2.5/forecast"
API_KEY = "b6601cc00aa8c8ad7232d28026a2d6a3"
account_sid = '' # Your Twilio account SID
auth_token = '' # Your Twilio auth token

parameters = {
        "appid": API_KEY,
        "lat": 38.340333365929766,
        "lon": -122.68746790080964,
        "cnt": 4
    }

response = requests.get(OWM_ENDPOINT, params=parameters)
# Return an exception in the event the API does not return a 200
response.raise_for_status()
weather_data = response.json()
list = weather_data["list"]

will_rain = False
for item in list:
    if item["weather"][0]["id"] < 700:
        will_rain = True

if will_rain:
    # Create a Twilio client
    client = Client(account_sid, auth_token)
    message = client.messages.create(
    body="It's going to rain today. Don't forget your umbrella!",
    from_='+18777804236',
    to='+14154250517'
    )
    print(message.status)
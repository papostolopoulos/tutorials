var _ = require('lodash');

var people = [{
  "id": 1,
  "first_name": "Brian",
  "last_name": "Miller",
  "email": "bmiller0@walmart.com",
  "gender": "Male",
  "ip_address": "7.193.106.241"
}, {
  "id": 2,
  "first_name": "Elizabeth",
  "last_name": "Gibson",
  "email": "egibson1@engadget.com",
  "gender": "Female",
  "ip_address": "6.99.248.254"
}, {
  "id": 3,
  "first_name": "Raymond",
  "last_name": "Morrison",
  "email": "rmorrison2@imageshack.us",
  "gender": "Male",
  "ip_address": "88.101.132.69"
}, {
  "id": 4,
  "first_name": "Harry",
  "last_name": "Olson",
  "email": "holson3@ezinearticles.com",
  "gender": "Male",
  "ip_address": "106.187.180.192"
}, {
  "id": 5,
  "first_name": "Adam",
  "last_name": "Ruiz",
  "email": "aruiz4@economist.com",
  "gender": "Male",
  "ip_address": "3.226.225.53"
}, {
  "id": 6,
  "first_name": "Carlos",
  "last_name": "Jones",
  "email": "cjones5@sbwire.com",
  "gender": "Male",
  "ip_address": "47.163.37.222"
}, {
  "id": 7,
  "first_name": "Gloria",
  "last_name": "Stewart",
  "email": "gstewart6@miitbeian.gov.cn",
  "gender": "Female",
  "ip_address": "90.25.185.112"
}, {
  "id": 8,
  "first_name": "Thomas",
  "last_name": "Robinson",
  "email": "trobinson7@tripadvisor.com",
  "gender": "Male",
  "ip_address": "182.151.131.29"
}, {
  "id": 9,
  "first_name": "Brenda",
  "last_name": "Thomas",
  "email": "bthomas8@friendfeed.com",
  "gender": "Female",
  "ip_address": "152.11.191.202"
}, {
  "id": 10,
  "first_name": "Philip",
  "last_name": "Hamilton",
  "email": "phamilton9@blogtalkradio.com",
  "gender": "Male",
  "ip_address": "147.39.98.107"
}, {
  "id": 11,
  "first_name": "Maria",
  "last_name": "Stephens",
  "email": "mstephensa@360.cn",
  "gender": "Female",
  "ip_address": "210.198.63.178"
}, {
  "id": 12,
  "first_name": "Timothy",
  "last_name": "Romero",
  "email": "tromerob@a8.net",
  "gender": "Male",
  "ip_address": "97.29.183.85"
}, {
  "id": 13,
  "first_name": "Gerald",
  "last_name": "Morrison",
  "email": "gmorrisonc@ameblo.jp",
  "gender": "Male",
  "ip_address": "109.134.170.218"
}, {
  "id": 14,
  "first_name": "Terry",
  "last_name": "Ellis",
  "email": "tellisd@goodreads.com",
  "gender": "Male",
  "ip_address": "165.99.216.113"
}, {
  "id": 15,
  "first_name": "Christine",
  "last_name": "Ferguson",
  "email": "cfergusone@unesco.org",
  "gender": "Female",
  "ip_address": "59.179.154.29"
}, {
  "id": 16,
  "first_name": "Clarence",
  "last_name": "Ryan",
  "email": "cryanf@bing.com",
  "gender": "Male",
  "ip_address": "233.176.36.228"
}, {
  "id": 17,
  "first_name": "Alice",
  "last_name": "Martin",
  "email": "amarting@google.com.au",
  "gender": "Female",
  "ip_address": "152.64.60.243"
}, {
  "id": 18,
  "first_name": "Lisa",
  "last_name": "Reyes",
  "email": "lreyesh@upenn.edu",
  "gender": "Female",
  "ip_address": "88.161.203.155"
}, {
  "id": 19,
  "first_name": "Daniel",
  "last_name": "Stewart",
  "email": "dstewarti@europa.eu",
  "gender": "Male",
  "ip_address": "140.217.187.255"
}, {
  "id": 20,
  "first_name": "Michelle",
  "last_name": "Mcdonald",
  "email": "mmcdonaldj@vimeo.com",
  "gender": "Female",
  "ip_address": "77.103.232.25"
}];

var femaleCount = _.filter(people, {gender: "Female"}).length;

alert(femaleCount + " females!");
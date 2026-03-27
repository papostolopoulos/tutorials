def greet():
    print(f"Statement 1")
    print("Statement 2")
    print("Statement 3")

greet()


def life_in_weeks(age):
    result = (90 - age) * 52
    print(f"You have {result} weeks left.")


life_in_weeks(56)

# You are given a published Google Doc like this one that contains a list of Unicode characters and their positions in a 2D grid.
# Your task is to write a function that takes in the URL for such a Google Doc as an argument, retrieves and parses the data in the document, and prints the grid of characters.
# When printed in a fixed-width font, the characters in the grid will form a graphic showing a sequence of uppercase letters, which is the secret message.
## The document specifies the Unicode characters in the grid, along with the x- and y-coordinates of each character.
## The minimum possible value of these coordinates is 0. There is no maximum possible value, so the grid can be arbitrarily large.
## Any positions in the grid that do not have a specified character should be filled with a space character.
## You can assume the document will always have the same format as the example document linked above.
# For example, the simplified example document linked above draws out the letter 'F':

# Your code must be written in Python (preferred), JavaScript, TypeScript, Java, Kotlin, C#, C++, Go, Rust, Swift or Ruby.
# You may use external libraries.
# You may write helper functions, but there should be one function that:
# 1. Takes in one argument, which is a string containing the URL for the Google Doc with the input data, AND
# 2. When called, prints the grid of characters specified by the input data, displaying a graphic of correctly oriented uppercase letters.

import requests
from bs4 import BeautifulSoup

def print_grid(url):
    # Step 1: Fetch and parse the HTML
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    # Step 2: Extract all table rows, skipping the header row
    grid_map = {}
    table = soup.find("table")
    rows = table.find_all("tr")

    for row in rows[1:]:  # skip header row
        cols = row.find_all("td")
        if len(cols) == 3:
            x = int(cols[0].text.strip())
            char = cols[1].text.strip()
            y = int(cols[2].text.strip())
            grid_map[(x, y)] = char

    # Step 3: Find grid dimensions
    max_x = max(x for x, y in grid_map)
    max_y = max(y for x, y in grid_map)

    # Step 4 & 5: Build and print the grid
    for y in range(max_y + 1):
        row = ""
        for x in range(max_x + 1):
            row += grid_map.get((x, y), " ")
        print(row)


# Test with the example doc (should draw 'F')
print_grid("https://docs.google.com/document/d/e/2PACX-1vTMOmshQe8YvaRXi6gEPKKlsC6UpFJSMAk4mQjLm_u1gmHdVVTaeh7nBNFBRlui0sTZ-snGwZM4DBCT/pub")

# Test with the real data doc
print_grid("https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub")
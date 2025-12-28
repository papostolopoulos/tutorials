s = "Hello, I am Paris"
print(s)

for char in s:
    print(f"the position of '{char}' is {s.index(char)}")

print("-----")

for i in range(len(s)):
    print(f"the position of '{s[i]}' is {i}")

print(range(len(s)))
import random

friends = ["Alice", "Bob", "Charlie", "David", "Emanuel"]

# Option 1
print(random.choice(friends))

# Option 2
random_index = random.randint(0, len(friends)-1)
print(friends[random_index])

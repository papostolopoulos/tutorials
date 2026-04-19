class User:
    def __init__(self, user_id, user_name):
        self.id = user_id
        self.user_name = user_name
        self.followers = 0
        self.following = 0

    def follow(self, user):
        self.following += 1
        user.followers += 1
        print(f"{self.user_name} is now following {user.user_name}")

user_1 = User("001", "Angela")
print(user_1.id)
print(user_1.user_name)

user_2 = User("002", "Jack")
print(user_2.id)
print(user_2.user_name)

user_1.follow(user_2)
print(user_1.followers)
print(user_1.following)
print(user_2.followers)
print(user_2.following)
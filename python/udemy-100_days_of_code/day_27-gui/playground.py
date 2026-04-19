def add(*args):
    return sum(args)

print(add(3, 5, 6, 7, 8))

def calculate(n, **kwargs):
    print(kwargs)
    n += kwargs["add"]
    n *= kwargs["multiply"]
    print(n)

calculate(2, add=3, multiply=5)

class Car:
    def __init__(self, **kw):
        self.make = kw.get("make")
        self.model = kw.get("model")
        self.color = kw.get("color")

my_car = Car(make="Nissan", model="GT-R", color="Silver")
print(my_car.model)
    
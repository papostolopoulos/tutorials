def format_name(f_name, l_name):
    return f"{f_name.title()} {l_name.title()}"

print(format_name("PARASKEVAS", "APOSTOLOPOULOS"))
print(format_name("nikolaos", "apostolopoulos"))

def is_leap_year(year):
    if year % 4 == 0 and year % 100 == 0 and year % 400 == 0:
        return True
    elif year % 4 == 0 and year % 100 == 0 and year % 400 != 0:
        return False
    elif year % 4 == 0 and year % 100 != 0:
        return True
    else:
        return False

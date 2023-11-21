two_digit_number = input()
result = int(two_digit_number[0]) + int(two_digit_number[1])
print(result)

height = input()
weight = input()
height_to_float = float(height)
weight_to_float = float(weight)
bmi = weight_to_float / (height_to_float ** 2)
print(bmi)

age = input()
years = 90 - int(age)
weeks = years * 52
print(f'You have {weeks} left.')
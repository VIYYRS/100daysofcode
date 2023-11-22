number = int(input())

if number % 2 == 0:
  print('even')
else:
  print('odd')

# < 18.5: underweight
# < 25: normal 
# < 30: overweight
# < 35: obese
# else: clinically obese
height = float(input())
weight = int(input())

bmi = weight / (height ** 2)

if bmi < 18.5:
  print('underweight')
elif bmi < 25:
  print('normal')
elif bmi < 30:
  print('overweight')
elif bmi < 35:
  print('obese')
else:
  print('clinically obese')


year = int(input())

if year % 4 == 0:
  if year % 100 == 0:
    if year % 400 == 0:
      print('leap')
    else: 
      print('not leap')
  else:
    print('not leap')
else:
  print('not leap')

# 피자 크기 S: 15, M: 20, L: 25
# 페퍼로니 S: 2, M or L: 3
# 치즈: S or M or L: 1
print('Thank you for choosing Python Pizza Deliveries!')
size = input()
add_pepperoni = input()
extra_cheese = input()

bill = 0

if size == 'S':
  bill += 15
  size = 'S'
elif size == 'M':
  bill += 20
  size = 'M'
elif size == 'L':
  bill += 25
  size = 'L'

if add_pepperoni == 'Y':
  if size == 'S':
    bill += 2
  else:
    bill += 3

if extra_cheese == 'Y':
  bill += 1

print(f'Your Final Bill is ${bill}')

print('The Love Calculator is calculating your score...')
name1 = input()
name2 = input()
name = name1 + name2
name = name.lower()
score_true = 0
score_love = 0
score = ''
score_true += name.count('t')
score_true += name.count('r')
score_true += name.count('u')
score_true += name.count('e')
score_love += name.count('l')
score_love += name.count('o')
score_love += name.count('v')
score_love += name.count('e')
score = str(score_true) + str(score_love)
if score < 10 or score > 90:
  print(f'{score}you go together like coke and mentos')
elif score >= 40 and score <= 50:
  print(f'{score}, you are alright together')
else:
  print(score)
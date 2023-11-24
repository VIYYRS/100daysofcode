# student_heights = input().split()
# for n in range(0, len(student_heights)):
#   student_heights[n] = int(student_heights[n])
  
# print(student_heights)

# height_total = 0
# height_averge = 0
# students = 0

# for x in student_heights:
#   students += 1
#   height_total += x

# height_averge = height_total / students

# print(f'Total height: {height_total}\nNumber of students: {students}\nAverge Height: {height_averge}') 

# student_scores = input().split()
# for n in range(0, len(student_scores)):
#   student_scores[n] = int(student_scores[n])

# print(student_scores)
  
# highest = 0

# for x in student_scores:
#   if x > highest:
#     highest = x
    
# print(highest)

# target = int(input())

# calculate = 0
# calculate_sub = 0

# for x in range(0, target + 1):
#   if x % 2 == 0:
#     calculate += x
#     print(f'calculating..({calculate_sub} + {x}): {calculate}')
#     calculate_sub += x
# print(calculate)

for i in range(1, 100 + 1):
  if i % 3 == 0 and i % 5 == 0:
    print('FizzBuzz')
  elif i % 3 == 0:
    print('Fizz')
  elif i % 5 == 0:
    print('Buzz')
  else:
    print(i)
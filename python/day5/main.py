fruits = ['Apple', 'Peach', 'Pear']
for fruit in fruits:
  print(fruit)
  print(fruit + ' Pie')
  print(fruits)

x = 0
i = 0
for number in range(1, 1000 + 1):
  i = number
  x += number
  print(f'calculating..({x} + {number}): {x}')
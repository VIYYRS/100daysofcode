import random

throw = random.randint(0, 1)

if throw == 1:
  print('heads')
elif throw == 0:
  print('tails')
else:
  print('undefined')
  
name_string = 'Angela, Ben, Jenny, Michael, Chloe'

names = name_string.split(', ')
names_count = len(names)
name_pay_sub = random.randint(0, names_count - 1)
name_pay = names[name_pay_sub]
print(name_pay)

line1 = ['▦', '▦', '▦']
line2 = ['▦', '▦', '▦']
line3 = ['▦', '▦', '▦']
map = [
  line1,
  line2,
  line3
]

print('Hiding your treasure! X marks the spot.')
position = input()

map_row = ['A', 'B', 'C']
map_row_position = map_row.index(position[0].upper()) # B
map_col_position = int(position[1]) # 1

map[map_col_position - 1][map_row_position] = 'X'

print(f'{line1}\n{line2}\n{line3}')
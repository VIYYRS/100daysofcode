rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''

#Write your code below this line 👇

import random

userinput = int(input('What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors > '))

rsp = ['rock', 'paper', 'scissors']
rsp_m = [
  # [ case,  able to win, not able to win ]
  ['rock', 'scissors', 'paper'],
  ['paper', 'rock', 'scissors'],
  ['scissors', 'paper', 'rock']
]
rsp_ascii = [
  rock, 
  paper,
  scissors
]

line = '////////////////////////////////////////\n////////////////////////////////////////\n\n'

userinput_result = rsp[userinput]
computer_result = rsp[random.randint(0, 2)]

print(f'{line}YOU:\n{rsp_ascii[rsp.index(userinput_result)]}\n\n\nCOMPUTER:\n{rsp_ascii[rsp.index(computer_result)]}\n{line}')

compare = rsp_m[userinput]
if compare.index(computer_result) == 1:
  print('You Win!')
elif compare.index(computer_result) == 2:
  print('You Lose')
else:
  print('Tie!')
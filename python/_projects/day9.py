import os
from day9_art import logo

def clear():
  os.system('cls')
  
auction = {}
# [{'name': 'price'}]

isContinue = True

print(logo)

def getWinner(auction):
  winner = ''
  sw = 0 #
  for i in auction:
    if not (sw > auction[i]):
      winner = i
      sw = auction[i]
  return winner

while isContinue:
  name = input('What is ur name? ')
  price = int(input('What is ur bid? '))
  auction[name] = price
  isContinueInput = input('Are there any other bidders? yes or no. ')
  if isContinueInput == 'yes':
    isContinue = True
    clear()
  else:
    isContinue = False
    print(f'The winner is {getWinner(auction)} with a bid of {auction[getWinner(auction)]}')
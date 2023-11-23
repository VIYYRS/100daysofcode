import random

random_integer = random.randint(1, 10)
print(random_integer)

random_float = random.random()
print(random_float)

love_score = random.randint(1, 100)
print(f'Your love score is {love_score}')

# List
states_of_america = ['Delaware', 'Pennsylvania', 'New Jersey', 'Georgia', 'Connecticut']

states_of_america.extend(['ja', 'jb'])

print(states_of_america)


dirty_dozen = [
  ['Strawberries', 'Nectarines', 'Apples', 'Grapes', 'Peaches', 'Cherries', 'Pears'],
  ['Spinach', 'Kale', 'Tomatoes', 'Celery', 'Potatoes']
]

print(dirty_dozen)
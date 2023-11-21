#If the bill was $150.00, split between 5 people, with 12% tip. 

#Each person should pay (150.00 / 5) * 1.12 = 33.6
#Format the result to 2 decimal places = 33.60

#Tip: There are 2 ways to round a number. You might have to do some Googling to solve this.💪

#Write your code below this line 👇

bill = float(input('how much is total bill? '))
people = int(input('how many people? '))
tip = int(input('what percentage tip? '))

tip_new = bill * (tip / 100)
pay = bill + tip_new
pay_each = pay / people
pay_each_last = round(pay_each, 2)
# pay_each_last = '{:.2f}'.format(pay_each)

print(f'each pay: {pay_each_last}')
student_scores = {
  'Harry': 81,
  'Ron': 78,
  'Hermione': 99,
  'Draco': 74,
  'Heville': 62,
}

# 91-100: outstanding
# 81-90: Exceeds Expectations
# 71-80: Acceptable 
# -70: Fail
# print type: dic

student_grades = {}

def getStudentGrade(grade):
  if grade <= 70:
    return 'Fail'
  elif grade <= 80:
    return 'Acceptable'
  elif grade <= 90:
    return 'Exceeds Expectations'
  elif grade <= 100:
    return 'Outstanding'

for studentName in student_scores:
  studentGrade = getStudentGrade(student_scores[studentName])
  student_grades[studentName] = studentGrade
  
print(student_grades)

#################################################################

country = input()
visits = int(input())
list_of_cities = eval(input())

travel_log = [
  {
    'country': '',
    'visits': 0,
    'cities': [],
  },
  {
    'country': '',
    'visits': 0,
    'cities': [],
  },
]

def add_new_country(country, visits, list_of_cities):
  newCountry = {}
  newCountry['country'] = country
  newCountry['visits'] = visits
  newCountry['cities'] = list_of_cities
  travel_log.append(newCountry)

add_new_country(country, visits, list_of_cities)
print(f'I\'ve been to {travel_log[2]["country"]} {travel_log[2]["visits"]}')
print(f'My favorite city was {travel_log[2]["cities"][0]}')
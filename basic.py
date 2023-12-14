num1 = 10
num2 = 20

print("OR Operator (||): ")
print(num1 == 10 or num2 == 20)
print("AND Operator (&&): ")
print(num1 == 10 and num2 == 20)
print("NOT Operator (!): ")
print(not(num1 == 10 and num2 == 20))

def my_function():
    print("This is called using a function")

my_function()

def addition(num1, num2):
    return num1 + num2

print(addition(10, 20))

def subtraction(num1, num2):
    return num1 - num2

print(subtraction(10, 20))

time = 6

if 6 <= time < 12:
    print("Good Morning")
elif 12 <= time < 18:
    print("Good Afternoon")
elif 18 <= time < 22:
    print("Good Evening")

for i in range(1, 11, 1):
    print(i)

i = 0
while i < 10:
    print("Chandan Kumar")
    i += 1

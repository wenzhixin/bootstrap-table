print("Enter the Number: ")
num = int(input())

rev = 0
orig = num
while num>0:
    rem = num%10
    rev = rem + (rev*10)
    num = int(num/10)

if orig==rev:
    print("\nThe Number is Equal to Its Reverse")
else:
    print("\nThe Number is not Equal to Its Reverse")

import shutil
from random import randint


def check_it(pnum, cnum):

    '''
    :param pnum: users previous guessed number
    :param cnum: users current guessed number
    :return: True if current guessed number is close to randomly generated number in comparison to previous value else False
    '''

    p1 = abs(RAND_NUM-pnum)
    c1 = abs(RAND_NUM - cnum)

    if p1 > c1:
        return p1 > c1


columns = shutil.get_terminal_size().columns
print("Welcome to Guess the Number.".center(columns))
print("A simple number guessing game.".center(columns))
print('''Read the Rules given below.
1.The number guessed by the system is a number is between (1 to 99)
2.User/Player should not guess the number beyond that range otherwise disqualified.
3.Points will be given on the basis of number of tries, less the tries , less the score, more the value.
''')

RAND_NUM = randint(1, 99)   # The number to guessed is generating here.
print(RAND_NUM)
past_num, cur_val, point = (0, 0, 0)

while True:
    if past_num == 0:
        cur_val = int(input("Guess the Number : "))
        point += 1
        past_num = cur_val
        if cur_val == RAND_NUM:
            print("Woo hoo! You have guessed the number correctly!")
            print(f"Your point is {point}")
            exit(0)
        elif cur_val > 99 or cur_val < 1:
            print("You have guessed the number which does not abide by the rules for which you are disqualified!")
            exit(0)
        else:
            if abs(RAND_NUM-cur_val) in range(1, 11):
                print("You are close! Try again.")
            else:
                print("You are far! Keep on trying.")

    else:
        past_num = cur_val
        cur_val = int(input("Guess the number again : "))
        point += 1
        if cur_val == RAND_NUM:
            print(f"Woo hoo! You have guessed the number correctly! and your score is {point}.")
            exit(0)
        elif cur_val > 99 or cur_val < 1:
            print("You have guessed the number which does not abide by the rules for which you are disqualified!")
            exit(0)
        else:
            result = check_it(past_num, cur_val)
            output = "You are getting closer. Keep on trying!" if result else "You are going further. Try again!"
            print(output)

# import os

# def display_board(board):
#     os.system("clear")
#     print('   |   |')
#     print(' ' + board[7] + ' | ' + board[8] + ' | ' + board[9])
#     print('   |   |')
#     print('-----------')
#     print('   |   |')
#     print(' ' + board[4] + ' | ' + board[5] + ' | ' + board[6])
#     print('   |   |')
#     print('-----------')
#     print('   |   |')
#     print(' ' + board[1] + ' | ' + board[2] + ' | ' + board[3])
#     print('   |   |')

# post = [' '] * 10
# player = int(input("Number : "))
# post[player] = "X"
# display_board(post)

# post[4]='x' 
# post[6]='o'
# print(post)

# if post[4] == ' ':
#     print("T")
# else:
#     print("F")


# ((board[1]==board[2]==board[3]==mark1) or
#     (board[1]==board[2]==board[3]==mark2) or
#     (board[4]==board[5]==board[6]==mark1) or 
#     (board[4]==board[5]==board[6]==mark2) or 
#     (board[7]==board[8]==board[9]==mark1) or
#     (board[7]==board[8]==board[9]==mark2) or
#     (board[1]==board[5]==board[9]==mark1) or
#     (board[1]==board[5]==board[9]==mark2) or
#     (board[3]==board[5]==board[7]==mark1) or
#     (board[3]==board[5]==board[7]==mark2) or
#     (board[1]==board[4]==board[7]==mark1) or
#     (board[1]==board[4]==board[7]==mark2) or
#     (board[2]==board[5]==board[8]==mark1) or
#     (board[2]==board[5]==board[8]==mark2) or
#     (board[3]==board[6]==board[9]==mark1) or
#     (board[3]==board[6]==board[9]==mark2) )
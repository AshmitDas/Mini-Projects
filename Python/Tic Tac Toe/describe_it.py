import shutil

def describe():

    columns = shutil.get_terminal_size().columns

    print("Welcome to Tic Tac Toe game.\n\n".center(columns))
    print('''This game is without GUI(Graphical User Interface) and will solely run on terminal.\n
Some things need to kept in mind while playing this game and they are listed below :
1.First you will be shown the Tic-Tac-toe board with their respective Index numbers, so you can get the idea how it looks.
2.This game is made for user VS user and later the user VS computer feature will be added.
3.After this, Users should decide who will be Player1 & 2 and the system will automatically decide who will go first.
4.Now, specifically the player1 will be asked for marker i.e X or O.
5.After that, each index input of the both players the tic-tac-toe board will be shown and
6. Also simultaneously the previous board will be clean.
7.Lastly, Enjoy the game!\n''')
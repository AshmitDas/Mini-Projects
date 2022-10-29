from check_win import check_for_win
from describe_it import describe
from display_board import display_board
from sample_board import sample
from space_check import spaces
from marker import marker
from user_input import input_validification
from choose_player_turn import player_turn
from replay import replay

def main():           # if __name__ == "__main__"

    positions_available = [' '] * 10

    describe()

    sample()

    play_game = input('Are you ready to play? Enter Yes or No. : ')
    if play_game.lower().startswith('y'):
        game = True
    else:
        game = False
        print("See ya next time!")
        exit(0)

# if not play_game.lower().startwith("y"):
#   exit(0)

    turn = player_turn() # rintu: invoke first_turn()
    print(turn +" has been selected by the system to go first.\n")
    player1_marker, player2_marker = marker()


    while game:

        if turn == 'Player 1':

            print("Player 1, Its your turn to input the index position.")
            player1_index = input_validification(positions_available)

            positions_available[player1_index]= player1_marker

            display_board(positions_available)

            if not spaces(positions_available):
                print("The match has been a draw match.\n")
                if replay():
                    positions_available = [' '] * 10
                    continue
                else:
                    print("Thank you for playiing the game")
                    break

            if check_for_win(positions_available,player1_marker):
                display_board(positions_available)
                print("Congratulations, Payer 1 you won the game!\nThank you for playing.")
                if replay():
                    positions_available = [' '] * 10
                    continue
                else:
                    print("Thank you for playiing the game")
                game = False

            else:
                turn = 'Player 2'


        if turn == 'Player 2':

            print("Player 2, Its your turn to input the index position.")
            player2_index = input_validification(positions_available)

            positions_available[player2_index] = player2_marker

            display_board(positions_available)


            if not spaces(positions_available):
                print(spaces(positions_available))
                print("The match has been a draw match.\n")
                if replay():
                    positions_available = [' '] * 10
                    continue
                else:
                    print("Thank you for playiing the game")
                    break

            if check_for_win(positions_available,player2_marker):
                display_board(positions_available)
                print("Congratulations, Player 2 you won the game!\nThank you for playing.")
                if replay():
                    positions_available = [' '] * 10
                    continue
                else:
                    print("Thank you for playiing the game")
                game = False

            else:
                turn = 'Player 1'


main()
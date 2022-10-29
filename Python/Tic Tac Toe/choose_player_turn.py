import random 

def player_turn():

    if random.randint(1,2) == 1:
        return 'Player 1'
    else:
        return 'Player 2'

""" 
def first_turn():
first_turn = lambda: random.choice(["Player 1", "Player 2"])

# to invoke first_turn, use 'first_turn()'
"""
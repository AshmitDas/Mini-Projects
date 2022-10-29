from .show_all import show_all

def player_win(player, dealer, chips):

    show_all(player, dealer)

    if player.value == 21:
        print("It's a Blackjack!")
        chips.bet_blackjack()
    else:
        print("So, Players wins!\n")
        chips.bet_won()


    print(f"\nThe Total amount the player placed is {chips.const_total}.\nThe current amount of the player is {chips.total}.")
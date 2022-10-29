from .show_all import show_all

def dealer_busts(player, dealer, chips):

    show_all(player, dealer)
    #checking if dealer value greater than 21 prints "dealer busts" else prints "dealer loses"
    if dealer.value < 21:
        print("So, Dealer loses!")

    else:
        print("So, Dealer busts!")

    chips.bet_won()
    print(f"\nThe Total amount the player placed is {chips.const_total}.\nThe current amount of the player is {chips.total}.")
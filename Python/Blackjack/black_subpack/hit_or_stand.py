from .take_hit import take_hit

def hit_or_stand(player,deck):

    while True:
        player_response = input("\nWould you like to hit or stand? Either type 'h' or 's'.\n: ")

        if player_response[0].lower() == 'h':
            take_hit(player,deck)

        elif player_response[0] == 's':
            print("Player choose to stand. Dealer's turn.")
            break

        else:
            print("Sorry that was not a valid input please select 'hit' or 'stand'.")
            continue
        break

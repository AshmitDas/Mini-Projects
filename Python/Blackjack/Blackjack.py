from black_subpack import *

print("Welcome to Blackjack/21 Game.\nThis a purely Terminal based game.")

while True:

    deck =  Deck()  #Creating a deck object of the class Deck
    deck.shuffle() #Shuffling the deck of cards


    players_hand = Hand()
    dealers_hand = Hand()

    # Prompting player to enter total amount 
    total_amount = int(input("Enter the total amount of money to place: "))
    players_chip = Chips(total_amount)

    print("Drawing cards to player and dealer.")
    delay()

    for _ in range(2):
        take_hit(players_hand,deck)
        take_hit(dealers_hand,deck)


    #Taking players bet amount
    take_bet(players_chip)

    #showing players all cards and dealers second card
    show_some(players_hand,dealers_hand)

    while True:

        #Asking player if he/she want to stand or hit
        if players_hand.value < 21:
            hit_or_stand(players_hand,deck)
        
        #Clearing the terminal screen
        clear()

        #show all the cards of players hand but keeping one card hidden in dealers hand
        show_some(players_hand,dealers_hand)

        #if players hand exceeds 21, calling player_busts function and breaking out of the loop
        if players_hand.value > 21:

            player_busts(players_hand,dealers_hand,players_chip)
            break

        #If players hand is equal to 21, Its a blackjack, callng function player_win and breaks out of the loop
        elif players_hand.value == 21:

            print("Its a Blackjack!")
            player_win(players_hand,dealers_hand,players_chip)
            break

        else:

            #if dealers value is less than 17, adding card to dealers hand until its equal to 17 or greater than that
            while dealers_hand.value < 17:
                take_hit(dealers_hand,deck)

            
            #If dealers value exceeds 21, player wins and breaks out of the loop
            if dealers_hand.value > 21:

                dealer_busts(players_hand, dealers_hand, players_chip)
                break

            #if players value exceeds that of dealer, calling player_win function
            elif players_hand.value > dealers_hand.value:
                
                player_win(players_hand, dealers_hand, players_chip)
                break

            #if dealers value exceeds players value, player loses
            elif dealers_hand.value > players_hand.value:

                player_busts(players_hand, dealers_hand, players_chip)
                break

            #if dealers value is equal to that of players value
            else:

                push()
                break

        
    play_again = input("\nDo you want to play again? \nType 'y' or 'n': ")

    if play_again[0].lower() == 'y':
        clear()
        continue

    else:

        print("Thank you for playing!")
        break

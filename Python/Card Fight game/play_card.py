import pdb
import random

suits = ('Hearts','Diamonds','Spades','Clubs') #
ranks=('Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King','Ace')
values={'Two':2,'Three':3,'Four':4,'Five':5,'Six':6,'Seven':7,'Eight':8,'Nine':9,'Ten':10,'Jack':11,'Queen':12,'King':13,'Ace':14}

class Card:
    '''
    Creating a class card which will deal with a single card at a time.
    Class card will take suit and rank as an argument and will return the full name of the card.
    Like suppose rank is two and suit is spade , It will return spades of two.
    '''
    def __init__(self,suit,rank):
        self.suit = suit
        self.rank = rank
        self.value = values[rank]

    def __str__(self):
        return self.rank + ' of ' + self.suit

#cards=Card(suits[2],ranks[7])
#print(cards)


class Deck:
    '''
    Class deck will take each value of ranks and suit and will put in the allcards list.
    '''

    def __init__(self):
        self.allcards=[]

        for suit in suits:
            for rank in ranks:
                self.allcards.append(Card(suit,rank))

        
    def shuffle(self):
        random.shuffle(self.allcards) 
        #Shuffle all the elements in the allcards list ,basically shuffle the whole deck.


    def deal_one(self):
        return self.allcards.pop() 
        #when the player draws a card it will remove last card from the list.

# mydeck=Deck()
# print(len(mydeck.allcards))
# print(mydeck.allcards[3])


class Player:
    '''
    This class with cards that the player have in his hand.
    '''

    def __init__(self,name):
        self.name = name
        #The player currently have zero cards in this hands.
        self.deck_cards=[]

    def remove_one(self):
        return self.deck_cards.pop()
        # Note we remove one card from the list of all_cards
        # We state 0 to remove from the "top" of the deck
        # We'll imagine index -1 as the bottom of the deck

    def add_card(self,new_card):

        if type(new_card) == type([]): #Checks if the card is in players hand already or not
            self.deck_cards.extend(new_card)
        else:
            self.deck_cards.append(new_card)

    def card_at_hand(self):
        return f'Player {self.name} has {len(self.deck_cards)} in his hand.'





name1 = input("Player 1, Enter your name.\nName : ") #From user taking 1st players name
name2 = input("Player 2, Enter your name.\nName : ") #From user taking 2nd players name

player_one = Player(name1)
#Creating player one object and passing the name of the player

player_two = Player(name2)
#Similarly player2 object and passing its name

'''Creating a new_deck object for the class Deck and shuffiling all the cards inside it.'''
new_deck=Deck()
new_deck.shuffle()

# print(len(new_deck.allcards))
for cards in range(26):
    player_one.add_card(new_deck.deal_one())
    player_two.add_card(new_deck.deal_one())
    #from the deck taking giving half of the deck (26 cards) to both player 1 and player 2

round_number = 0 #Initializing a round_number variable which will count the round number
game_on = True 



while game_on:
    
    round_number += 1 #Incermenting the round_number
    print(f'Round {round_number}.')


    #check if player1 is out of cards or not;
    if len(player_one.deck_cards) == 0:
        
        print(f'{player_one.name} is out of cards.\nGame Over. You lost the game. Try Again next time.')
        print(f'{player_two.name} wins the game. Congratulations!')
        game_on = False
        break
    #checks if player 2 is out of cards or not
    if len(player_two.deck_cards) == 0:

        print(f'{player_two.name} is out of cards.\nGame Over You lost the game. Try Again next time.')
        print(f'{player_one.name} wins the game. Congratulations!')
        game_on = False 
        break

    '''
    The game is still on if both the if statements are false. Otherwise start a new game.
    '''
    # Start a new round and reset current cards "on the table"
    #Creating a list which will hold the current card to be on table for player 1
    player_one_hand_card = []   
    player_one_hand_card.append(player_one.remove_one()) 
    print(len(player_one.deck_cards))
    print("player 1")

    
    #Creating a list which will hold the current card to be on table for player 2
    player_two_hand_card = []
    player_two_hand_card.append(player_two.remove_one())
    print(len(player_two.deck_cards))
    print("player 2")

    in_war = True

    while in_war:
        #checks if the current value of the player 1 card is greater than player 2 card
        if player_one_hand_card[-1].value > player_two_hand_card[-1].value:

            #If so Player 1 gets all the cards
            player_one.add_card(player_one_hand_card)
            player_one.add_card(player_two_hand_card)

            in_war = False 
            #No longer at war. Time for next round

        #checks if the current value of the player 2 card is greater than player 1 card
        elif player_one_hand_card[-1].value < player_two_hand_card[-1].value:

            #If so player 2 gets all the cards
            player_two.add_card(player_two_hand_card)
            player_two.add_card(player_one_hand_card)


            in_war = False
            #No longer at war. Time for next round.


        else:

            print("WAR")

            #This occurs when both cards are equal
            #Grab another card and continue and see if both players have enough cards.

            #check if player 1 has enough cards.

            # checks if player 1 has enough card
            if len(player_one.deck_cards) < 5:

                print(f'{player_one.name} unable to play the game because of out of cards.{player_one.name} loses the match.')
                print(f'{player_two.name} wins the Game. Congratulations!')

                game_on = False
                break

            elif len(player_two.deck_cards) < 5:

                print(f'{player_two.name} unable to play the game because of out of cards.{player_two.name} loses the match.')
                print(f'{player_one.name} wins the Game. Congratulations!')

                game_on = False
                break

            else:
                for num in range(5):

                    player_one_hand_card.append(player_one.remove_one())
                    player_two_hand_card.append(player_two.remove_one())
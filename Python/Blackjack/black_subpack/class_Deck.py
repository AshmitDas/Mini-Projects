import random
from .class_Card import Card

suits = ('Hearts', 'Spades', 'Diamond', 'Clubs')
ranks=('Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King','Ace')

class Deck:

    def __init__(self):

        self.full_deck = []

        for suit in suits:
            for rank in ranks:
                self.full_deck.append(Card(suit,rank))

    def shuffle(self):
        return random.shuffle(self.full_deck)

    def deal(self):
       single_card = self.full_deck.pop()
       return single_card

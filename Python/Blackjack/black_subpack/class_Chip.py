class Chips:

    def __init__(self,total):
        self.total = total
        self.const_total = total
        self.bet = 0

    def bet_won(self):
        self.total += self.bet

    def bet_blackjack(self):
        self.total += (self.bet * 1.5)

    def bet_lost(self):
        self.total-=self.bet
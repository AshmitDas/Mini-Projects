def take_hit(player,deck):

    player.add_card(deck.deal())
    player.adjust_for_aces()
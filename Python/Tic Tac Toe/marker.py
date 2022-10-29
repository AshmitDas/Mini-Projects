def marker():
    user_marker_choice = " "
    choices = ["X", "O"]
    while not user_marker_choice in choices:
        user_marker_choice = input("Player1/User1 please select either 'X' or 'O' as your marker : ").upper()


    if user_marker_choice == 'X':
        return ('X', 'O')
    else:
        return ('O', 'X')

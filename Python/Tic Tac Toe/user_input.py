def input_validification(positions_available):
    
    usr_position = "hello there!"
    # acceptable_range = range(1,10)
    within_range = False


    while usr_position.isdigit() == False or within_range == False:
        usr_position = input("Enter your choice : ")

        if not usr_position.isdigit():
            print("You have entered something that is not an integer, Please a valid number.")

        if usr_position.isdigit():

            if int(usr_position) in range(1, 10):

                if positions_available[int(usr_position)] == ' ':
                    within_range = True

                else:
                    print("That position have already been choosen.")
                    within_range = False
            else:
                print("Your index position is out of bounds.")
                within_range = False

    return int(usr_position)

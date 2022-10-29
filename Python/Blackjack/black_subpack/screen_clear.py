from os import system, name

def clear():

    #for mac and linux system
    if name == "posix":
        _ = system('clear')
    else:
        #for windows system os.name is nt
        _ = system('cls')
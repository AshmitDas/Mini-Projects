from time import sleep

def delay():

    for i in range(0, 3): 
     for j in range(0, i):
        sleep(1)
        print(".", end="")
    print()
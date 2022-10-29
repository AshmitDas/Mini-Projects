def check_for_win(board,mark):
    return ((board[1]==board[2]==board[3]==mark) or
    (board[4]==board[5]==board[6]==mark) or  
    (board[7]==board[8]==board[9]==mark) or
    (board[1]==board[5]==board[9]==mark) or
    (board[3]==board[5]==board[7]==mark) or
    (board[1]==board[4]==board[7]==mark) or
    (board[2]==board[5]==board[8]==mark) or
    (board[3]==board[6]==board[9]==mark) )
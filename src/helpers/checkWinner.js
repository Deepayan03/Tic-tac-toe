export let isWinner = (board, symbol) => {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const winCondition of winConditions) {
        if (board[winCondition[0]] === board[winCondition[1]] && board[winCondition[1]] === board[winCondition[2]] && board[winCondition[0]] === symbol) {
            return symbol;
        }
    }

    return false;
};
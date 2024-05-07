import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {

    const [board, setBoard] = useState(initialBoard());
    const [isNext, setIsNext] = useState(true);

    const WINNING_PATTERNS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const calculateinner = (currentBoard) => {
        for (let i = 0; i < WINNING_PATTERNS.length; i++) {
            const [a, b, c] = WINNING_PATTERNS[i];
            if (currentBoard[a] &&
                currentBoard[a] === currentBoard[b] &&
                currentBoard[a] === currentBoard[c]
            ) {
                return currentBoard[a];
            }
        }
        return null;
    };

    const handleClick = (index) => {
        const winner = calculateinner(board);
        console.log(winner)
        if (winner || board[index]) return

        const newBoard = [...board]
        newBoard[index] = isNext ? 'x' : '0';
        setBoard(newBoard);
        setIsNext(!isNext);
    };

    const getStatusMessage = () => {
        const winner = calculateinner(board)
        if (winner) return `player ${winner} wins!`;
        if (!board.includes(null)) return `its a Draw!`;
        return `player ${isNext ? 'x' : 'o'} turn`;
    };

    const resetGame = () => {
        setBoard(initialBoard())
        setIsNext(true)
    };

    return { board, handleClick, calculateinner, getStatusMessage, resetGame }
};

export default useTicTacToe
import { useState } from "react";
import Card from "../card/card.jsx";
import "./grid.css";
import { isWinner } from "../../helpers/checkWinner.js";

function Grid({ numberofCards }) {
  const [board, setBoard] = useState(Array(numberofCards).fill(""));
  const [turn, setTurn] = useState(true); // Adjust based on your game rules
  const [winner, setWinner] = useState(null);

  function play(index) {
    if (board[index] === ""){
    const newBoard = [...board];
    newBoard[index] = turn ? "O" : "X";
    setBoard(newBoard);

    const win = isWinner(newBoard, turn ? "O" : "X");
    if (win ) {
      setWinner(win);
    }else if (newBoard.every(el => el !== "")) {
      setWinner("Tie"); // Game is a tie
    }

    setTurn(!turn);
  }
  }

  function reset() {
    setTurn(false); // Change to your desired initial turn logic
    setWinner(null);
    setBoard(Array(numberofCards).fill(""));
  }

  return (
    <div className="grid-wrapper">
      {winner!=="Tie" && winner!=null && (
        <>
          <h1 className="turn-highlight">Winner is {winner}</h1>
          <button className="reset" onClick={reset}>
            Reset Game
          </button>
        </>
      )}
      {
        winner==="Tie" && (
          <>
            <h1 className="turn-highlight">Match Draw</h1>
            <button className="reset" onClick={reset}>
              Reset Game
            </button>
          </>
        )
      }
      <h1 className="turn-highlight">Current turn: {turn ? "O" : "X"}</h1>
      <div className="grid">
        {board.map((el, idx) => (
          <Card gameEnd={!!winner} key={idx} onPlay={play} player={el} index={idx} />
        ))}
      </div>
    </div>
  );
}

export default Grid;
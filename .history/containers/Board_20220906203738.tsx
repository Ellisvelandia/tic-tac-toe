import { useState } from "react";
import Square from "../components/Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return <div>this is the board</div>;
}

export default Board;

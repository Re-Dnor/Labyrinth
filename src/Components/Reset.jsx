import React from "react";
import { useDispatch } from 'react-redux';
import { resetGame } from '../store/squares-slice';

function Reset() {
  const dispatch = useDispatch();
  return ( 
    <button
    className="btn"
    onClick={() => dispatch(resetGame())}
    >Reset
    </button>
  );
}

export default Reset;
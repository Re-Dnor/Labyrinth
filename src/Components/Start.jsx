import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { startGame, nextStep, plusCount, resetGame, activateTheSquares } from '../store/squares-slice';

function Start() {
  const dispatch = useDispatch();
  let { count } = useSelector(state => state.squares);

  const start = () => {
    dispatch(resetGame());
    dispatch(startGame());
    dispatch(plusCount());
  }

  useEffect(() => {
    let timeID = null;
    if (count <= 10 && !!count) {
      timeID = setTimeout(() => {
        dispatch(nextStep(count));
        dispatch(plusCount());
      }, 700);
    } 

    if (count > 10) {
      dispatch(activateTheSquares());
    }

    return () => clearTimeout(timeID);
  }, [count])

  return ( 
    <button
    className="btn"
    onClick={start}
    >Start
    </button>
  );
}

export default Start;
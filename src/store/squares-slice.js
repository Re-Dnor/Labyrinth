import { createSlice } from '@reduxjs/toolkit';
import { getRandomNum, getSign } from '../Utils/getRandom';

const initialState = {
  squareList: [
    { x: 0, y: 0, dis: true, correct: false },
    { x: 1, y: 0, dis: true, correct: false },
    { x: 2, y: 0, dis: true, correct: false },
    { x: 0, y: 1, dis: true, correct: false },
    { x: 1, y: 1, dis: true, correct: false },
    { x: 2, y: 1, dis: true, correct: false },
    { x: 0, y: 2, dis: true, correct: false },
    { x: 1, y: 2, dis: true, correct: false },
    { x: 2, y: 2, dis: true, correct: false },
  ],
  startSqrIndex: null,
  x: null,
  y: null,
  arrows: [],
  count: 0
}

const squaresReducer = createSlice({
  name: 'squares',
  initialState,
  reducers: {
    startGame: (state) => {
      state.startSqrIndex = getRandomNum(0, 9);

    },
    activateTheSquares: (state) => {
      state.squareList = state.squareList.map((sqr) => {
        sqr.dis = false;
        return sqr;
      })
    },
    plusCount: (state) => {
      state.count = state.count + 1;
    },
    nextStep: (state, action) => {
      let valueX = null;
      let valueY = null;

      if (state.x === null && state.y === null) {
        const [{ x, y }] = state.squareList.slice(state.startSqrIndex, state.startSqrIndex + 1);
        state.x = x;
        state.y = y;
        valueX = x;
        valueY = y;
      } else {
        valueX = state.x;
        valueY = state.y;
      }

      if (!!(action.payload % 2)) {
        const sign = getSign(valueX);
        switch (sign) {
          case '-': {
            const value = valueX - 1;
            state.x = value;
            state.arrows.push('left')
            break;
          }
          case '+': {
            const value = valueX + 1;
            state.x = value;
            state.arrows.push('right')
            break;
          }
          default: {
            break
          }
        }
      } else {
        const sign = getSign(valueY);

        switch (sign) {
          case '-': {
            const value = valueY - 1;
            state.y = value;
            state.arrows.push('up')
            return;
          }
          case '+': {
            const value = valueY + 1;
            state.y = value;
            state.arrows.push('down')
            return;
          }
          default: {
            return
          }
        }
      }
    },
    successAns: (state, action) => {
      const squareListDis = state.squareList.map((sqr) => {
        if (sqr.x === action.payload.x && sqr.y === action.payload.y) {
          sqr.touch = true;
        }
        sqr.dis = true;
        return sqr;
      });
      state.squareList = squareListDis;

    },
    failureAns: (state, action) => {
      const squareListCorrect = state.squareList.map((sqr) => {
        if (sqr.x === action.payload.x && sqr.y === action.payload.y) {
          sqr.correct = true;
        }
        sqr.dis = true;
        return sqr;
      });

      state.squareList = squareListCorrect;
    },
    resetGame: () => {
      return initialState;
    }
  },
});

export const { startGame, plusCount, nextStep, successAns, failureAns, resetGame, activateTheSquares } = squaresReducer.actions

export default squaresReducer.reducer
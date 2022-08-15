import React from "react";
import startImg from '../img/start.png';
import { useSelector, useDispatch } from "react-redux/es/exports";
import like from '../img/like.png'
import flag from '../img/flag.png'
import { successAns, failureAns } from '../store/squares-slice';

function Squares() {
  const dispatch = useDispatch();
  const { squareList, startSqrIndex, x, y} = useSelector(state => state.squares);

  const finished = (e) => {
    const currentX = e.target.getAttribute('data-x');
    const currentY = e.target.getAttribute('data-y');
    
    if(+currentX === +x && +currentY === +y) {
      dispatch(successAns({x, y}))
    } else {
      dispatch(failureAns({x, y}));
    }
  }

  return (
    squareList.map((sqr, index) => {
      return (
      <button
      key={index}
      id={index}
      data-x={sqr.x}
      data-y={sqr.y}
      className="square"
      onClick={finished}
      disabled={sqr.dis}
      >
        {startSqrIndex === index 
        &&
        <img src={startImg}/>
        }
        {sqr.correct
        &&
        <img src={flag}/>
        }
        {sqr.touch
        &&
        <img src={like}/>
        }
      </button>
      )
    }
  )
)
};

export default Squares;
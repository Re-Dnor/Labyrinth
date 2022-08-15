import React from "react";
import { useSelector } from 'react-redux';
import arrow from '../img/arrow.png';
import _ from 'lodash';

function Direction() {
  const { arrows } = useSelector(state => state.squares, _.isEqual)

  return (
  <div className='direction'>
    {arrows.map((arr) => <img
    key={_.uniqueId('Arrow_')}
    src={arrow}
    className={arr}
    />)}
  </div>
  );
}

export default Direction;
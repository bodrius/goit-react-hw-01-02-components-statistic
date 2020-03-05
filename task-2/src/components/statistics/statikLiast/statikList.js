import React from 'react'
import css from './statikList.module.css'

const generateColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
  };

const statikList = ({list:{label="none", percentage="none"} = {}}) => {
    
    return (
        <li 
        style={{ backgroundColor: generateColor() }}
        className={css.item}>
      <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}</span>
    </li>
    );
}

export default statikList;
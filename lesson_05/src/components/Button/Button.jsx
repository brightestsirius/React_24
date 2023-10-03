import React, {useContext} from 'react'

import ListStatisticsColor from './../../contexts/ListStatisticsColor'

export default function Button({text, clickFc}) {
  const {color} = useContext(ListStatisticsColor);
  
  return (
    <button style={{color}} onClick={clickFc}>{text}</button>
  )
}
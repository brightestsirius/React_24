import React, {useContext} from 'react'

import Button from './../Button/Button'
import ListStatisticsColor from '../../contexts/ListStatisticsColor';

export default function ListItem({item}) {
  const {handleItemDelete} = useContext(ListStatisticsColor);

  return (
    <li>{item.title} <Button text={"Delete"} clickFc={() => handleItemDelete(item.id)} /></li>
  )
}
import React, {useContext, memo} from 'react'

import ListStatisticsColor from './../../contexts/ListStatisticsColor'

export default memo(function ColorPicker() {
  const {color, setColor} = useContext(ListStatisticsColor);

  const handleColor = (event) => setColor(event.target.value);

  return (
    <input type="color" defaultValue={color} onChange={handleColor} />
  )
})
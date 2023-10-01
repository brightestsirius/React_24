import React, { useState, useEffect } from "react";

import { MuiColorInput } from 'mui-color-input'

import useLocalStorage from './../../hooks/useLocalStorage';

export default function ColorPicker({liftingColor}) {
  const [color, setColor] = useLocalStorage(`color`, `#cccccc`);
  
  const handleColor = color => setColor(color);

  useEffect(() => {
    liftingColor(color);
  }, [color])

  return <MuiColorInput value={color} onChange={handleColor} />;
}

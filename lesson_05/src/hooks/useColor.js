import { useState } from "react";

const useColor = () => {
  const [color, setColor] = useState(`#e91e63`);

  return { color, setColor };
};

export default useColor;

import { useState, useEffect } from "react";

import todosService from './../services/todos'

const useList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await todosService.get();
      setList(response.slice(0,10));
    })()
  }, [])

  const handleItemDelete = async (id) => {
    await todosService.delete(id);
    setList((prevState) => prevState.filter((item) => item.id !== id));
  };

  return { list, handleItemDelete };
};
export default useList;
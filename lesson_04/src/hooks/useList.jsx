import {useState, useEffect} from 'react'

import service from './../services/todos'

const useList = (todo) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await service.get();
      setList(response.slice(0, 10));
    })();
  }, []);

  const handleItemDelete = async (id) => {
    try {
      await service.delete(id);
      setList((actualState) => actualState.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setList(actualState => ([...actualState, todo]));
  }, [todo])

  return [list, handleItemDelete];
};

export default useList;

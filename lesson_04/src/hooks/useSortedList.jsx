import {useMemo} from 'react';

const useSortedList = (list) => {
  const sortedList = useMemo(
    () =>
      list.sort((a, b) => {
        return a.completed - b.completed;
      }),
    [list]
  );

  return sortedList;
};

export default useSortedList;

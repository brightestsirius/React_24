import { configureStore } from '@reduxjs/toolkit'

import list from './list/reducer';
import filter from './filter/reducer';

const store = configureStore({
    reducer: {list, filter},
  })

export default store;
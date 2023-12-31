import React from 'react'
import {Provider} from 'react-redux'

import store from './store/store'

import List from './components/List/List'
import Statistics from './components/Statistics/Statistics'
import Filter from './components/Filter/Filter'

export default function App() {
  return (
    <Provider store={store}>
      <Statistics />
      <Filter />
      <List />
    </Provider>
  )
}
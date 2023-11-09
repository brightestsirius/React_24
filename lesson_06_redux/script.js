const { store } = require(`./store/state`);
const {
  COUNTER_INC_ACTION,
  COUNTER_DEC_ACTION,
  COUNTER_SET_ACTION,
} = require(`./store/actions`);

console.log(store.getState());

store.dispatch(COUNTER_INC_ACTION);
console.log(store.getState());

store.dispatch(COUNTER_DEC_ACTION);
console.log(store.getState());

store.dispatch(COUNTER_SET_ACTION(10));
console.log(store.getState());

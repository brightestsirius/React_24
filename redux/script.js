const {store} = require('./store/state')
const {counterIncrementAction, counterDecrementAction, counterSetAction} = require('./store/actions')

console.log(store.getState());

store.dispatch(counterIncrementAction);
console.log(store.getState());

store.dispatch(counterDecrementAction);
console.log(store.getState());

store.dispatch(counterSetAction(10));
console.log(store.getState());
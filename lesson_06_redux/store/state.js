const {reducer} = require(`./reducer`)

const {createStore} = require(`redux`);

const store = createStore(reducer);

module.exports = {store};
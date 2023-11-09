// action = {type, payload}

// action types
const COUNTER_INC = `COUNTER_INC`;
const COUNTER_DEC = `COUNTER_DEC`;
const COUNTER_SET = `COUNTER_SET`;

// action creator
const actionCreator = (type, payload) => {
    let action = {type};
    if(payload) action.payload = payload;
    return action;
}

// actions
const COUNTER_INC_ACTION = actionCreator(COUNTER_INC); // {type: COUNTER_INC}
const COUNTER_DEC_ACTION = actionCreator(COUNTER_DEC); // {type: COUNTER_DEC}
const COUNTER_SET_ACTION = (payload) => actionCreator(COUNTER_SET, payload); // {type: COUNTER_SET, payload: 20};

module.exports = {
    COUNTER_INC,
    COUNTER_DEC,
    COUNTER_SET,
    COUNTER_INC_ACTION,
    COUNTER_DEC_ACTION,
    COUNTER_SET_ACTION
}
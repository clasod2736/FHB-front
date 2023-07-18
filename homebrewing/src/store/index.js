import {createStore} from 'redux';

function reducer(state = {

    login: false

    }, action)
    {
    const newState = {...state};
    if (action.type === 'loginSuccess') {
        newState.login = true;
    }
    return newState;
}

const store = createStore(reducer);

export default store 
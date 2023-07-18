import {createStore} from 'redux';

function reducer(state = {

    logIn: false

    }, action)
    {
    const newState = {...state};
    if (action.type === 'loginSuccess') {
        newState.logIn = true;
    }
    else if (action.type === 'loggedOut') {
        newState.logIn = false;
    }
    return newState;
}

const store = createStore(reducer);

export default store 
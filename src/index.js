import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {List} from 'immutable';

/*
export function reducerFunction(state, action){
    if (action.type === "PRIMEIROBIND"){
        return action; ///action.lista
    }
    else if (action.type == "ITEMCHANGE")
    {
        const idx = state.lista.findIndex(i => i.id == action.item.id);
        if (idx > -1)
        {
            var newState = {lista: List().concat(state.lista)};
            newState.lista = newState.lista.set(idx, action.item);
            return newState;
        }
        return state;
    }
    else {
        return state; //previous state
    }
}

const pageStore = createStore(reducerFunction, applyMiddleware(thunkMiddleware));
*/

ReactDOM.render(
    <div>
        <div>Secret agents</div>
        <Page2 />
    </div>,
    document.getElementById('root')
);
registerServiceWorker();

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import Item3 from './Item3';


export function reducerFunction(state=[], action){
    if (action.type === "PRIMEIROBIND"){
        return action.lista;
    }
    else if(action.type === "ITEMCHANGE")
    {
        //ConcatAndRender
        var itemFound = state.find(i => i.id == action.item.id);
        if (itemFound)
        {
            itemFound.count += 1;
        }
        return state;
    }
    else {
        return state; //previous state
    }
}

const pageStore = createStore(reducerFunction, applyMiddleware(thunkMiddleware));


export default class Page3 extends Component{

    constructor(props){
        super(props);
        this.state = {lista:[]};
    }

    componentWillMount(){
        ///this.props.store = pageStore;///desnecessário, só para saber q normalmente fica em props
        pageStore.subscribe( () => {
            this.setState({lista:pageStore.getState()});
        });
    }

    listaInicial(){
        return [
            {id:1, name:"David Madi", count:0},
            {id:2, name:"Ethan Hunt", count:0},
            {id:3, name:"Alec Trevelian", count:0},
            {id:4, name:"Jason Bourne", count:0}
        ];
    }

    toPublish(){        
        //this.props.store.dispatch({
        pageStore.dispatch(this.primeiroBind());
    }

    primeiroBind(){
        return dispatchThisPage => 
        {
            dispatchThisPage({
                type:'PRIMEIROBIND',
                lista:this.listaInicial()
            });
        }
    }

    render(){
        return (
            <div>
                <table>
                    <tbody>
                    {
                        this.state.lista.map( m => {
                            return (
                            <Item3 key={m.id} {...m} store={pageStore} /> )
                        })
                    }
                    </tbody>
                </table>
                <button onClick={this.toPublish.bind(this)}>Publish</button>
            </div>
        );
    }
}

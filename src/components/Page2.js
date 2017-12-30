import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import Item2 from './Item2';


export function reducerFunction(state=[], action){
    if (action.type === "FIRSTBIND"){
        return action.listOfItems;
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

const pageStore = createStore(reducerFunction);


export default class Page2 extends Component{

    constructor(props){
        super(props);
        this.state = {listOfItems:[]};
    }

    componentWillMount(){
        ///this.props.store = pageStore;///desnecessário, só para saber q normalmente fica em props
        pageStore.subscribe( () => {
            this.setState({listOfItems:pageStore.getState()});
        });
    }

    firstList(){
        return [
            {id:1, name:"David Madi", count:0},
            {id:2, name:"Ethan Hunt", count:0},
            {id:3, name:"Alec Trevelian", count:0},
            {id:4, name:"Jason Bourne", count:0}
        ];
    }

    toPublish(){        
        //this.props.store.dispatch({
        pageStore.dispatch({
            type:'FIRSTBIND',
            listOfItems:this.firstList()
        });
    }

    render(){
        return (
            <div>
                <table>
                    <tbody>
                    {
                        this.state.listOfItems.map( m => {
                            return (
                            <Item2 key={m.id} {...m} store={pageStore} /> )
                        })
                    }
                    </tbody>
                </table>
                <button onClick={this.toPublish.bind(this)}>Publish</button>
            </div>
        );
    }
}

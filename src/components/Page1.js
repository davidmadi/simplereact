import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Item1 from './Item1';

export default class Page1 extends Component{

    constructor(){
        super();
        this.state = {listOfItems:[]};
    }

    componentWillMount(){
    }

    firstList(){
        return [
            {id:1, name:"David Madi"},
            {id:2, name:"Ethan Hunt"},
            {id:3, name:"Alec Trevelian"},
            {id:4, name:"Jason Bourne"},
            {id:5, name:"James Bond"}
        ];
    }

    toPublish(){
        this.setState({listOfItems:this.firstList()});//Merge the property listOfItems with other properties
    }

    render(){
        return (
            <div>
                <table>
                    <tbody>
                    {
                        this.state.listOfItems.map( m => {
                            return (
                            <Item1 key={m.id} {...m} /> )
                        })
                    }
                    </tbody>
                </table>
                <button onClick={this.toPublish.bind(this)}>Publish</button>
            </div>
        );
    }
}

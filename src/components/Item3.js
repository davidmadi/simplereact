import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Item3 extends Component{

    constructor(props){
        super(props);
    }

    concatAndRender(){
        this.props.store.dispatch(this.bindItem());
    }

    bindItem(){
        return dispatchItem => {
            dispatchItem({
                type:'ITEMCHANGE',
                item:this.props
            });
        };
    }

    render(){
        return(
            <tr key={this.props.id}>
                <td><span>Key:</span> {this.props.id}</td>
                <td><span>Name:</span>{this.props.name}</td>
                <td><span>RenderCount:</span>{this.props.count}</td>
                <td><span>Time:</span>{new Date().getSeconds().toString()}sec</td>
                <td><button onClick={this.concatAndRender.bind(this)}>RE Render</button></td>
            </tr>
        );
    }


}
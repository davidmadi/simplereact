import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

export default class Item4 extends Component{

    constructor(props){
        super(props);
    }

    ReRender(){
        this.props.store.dispatch(this.bindItem());
    }

    bindItem(){
        return dispatchItem => {
            const newItem = Object.assign({}, this.props, {count : this.props.count+1, name : this.name.value});
            dispatchItem({
                type:'ITEMCHANGE',
                item:newItem
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
                <td><button onClick={this.ReRender.bind(this)}>RE Render</button></td>
                <td><span>Name:</span><input type="text" value={this.props.name} onChange={this.ReRender.bind(this)} ref={input => this.name = input} /></td>
            </tr>
        );
    }
}

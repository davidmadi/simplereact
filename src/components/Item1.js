import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Item1 extends Component{

    constructor(props){
        super(props);
        this.state = {id :this.props.id, name:this.props.name, count:1};
    }

    addCountAndRender(){
        this.state.count += 1;
        this.setState(this.state);
    }

    render(){
        return(
            <tr key={this.state.id}>
                <td><span>Key:</span> {this.state.id}</td>
                <td><span>Name:</span>{this.state.name}</td>
                <td><span>RenderCount:</span>{this.state.count}</td>
                <td><span>Time:</span>{new Date().getSeconds().toString()}sec</td>
                <td><button onClick={this.addCountAndRender.bind(this)}>RE Render</button></td>
            </tr>
        );
    }


}
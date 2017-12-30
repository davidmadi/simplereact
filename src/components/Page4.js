import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Item4 from './Item4';
import {connect} from 'react-redux';
import {List} from 'immutable';


class Page4 extends Component{

    constructor(props){
        super(props);
    }


    componentDidMount(){
        /*this.props.store.subscribe( () => {
            this.setState({lista:this.props.store.getState()});
        });*/
        //this.setState({lista:this.props.store.getState()});
    }

    render(){
        return (
            <div>
                <table>
                    <tbody>
                    {
                        this.props.lista.map( m => {
                            return (
                            <Item4 key={m.id} {...m} store={this.props.store} /> )
                        })
                    }
                    </tbody>
                </table>
                <button onClick={this.props.toPublish}>Publish</button>
            </div>
        );
    }
}

const mapStateToProps = state => {//state returned by my reducer
    return {
        lista : (state) ? state.lista : []
    }
}
const mapDispatchToProps = dispatchPage => {
    return {
        toPublish : () => {
            dispatchPage({
                type:'PRIMEIROBIND',
                lista: List([
                    {id:1, name:"David Madi", count:0},
                    {id:2, name:"Ethan Hunt", count:0},
                    {id:3, name:"Alec Trevelian", count:0},
                    {id:4, name:"Jason Bourne", count:0}
                ])
            });
        }
    }
}

const page4Container = connect(mapStateToProps, mapDispatchToProps)(Page4);

export default page4Container;
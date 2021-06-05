import React, {Component} from 'react';
import Form from '../Form';
import List from '../List'
import './todoList.css';

class TodoList extends Component {
    constructor(props){
        super(props);        
        this.state = {
            todo:[]            
        }        
    }

    addTodo(text) {             
        const newTodo = [...this.state.todo, text] 
        const newState = {
            todo: newTodo,
        }          
        this.setState(newState)       
    }    

    deleteTodo(index) {
        let newTodo = this.state.todo
        newTodo.splice(index, 1)
        this.setState(newTodo)
    }

    render() {
        return(
            <>
                <div className='box'>
                    <span/>
                    <div className='container'>   
                      <Form text={this.addTodo.bind(this)}/>
                      <List todoList={this.state.todo} deleteTodo={this.deleteTodo.bind(this)}/>                                                                        
                    </div>                    
                </div>
            </>
        )
    }    
}

export default TodoList;
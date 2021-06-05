import React, {Component} from 'react';
import './form.css';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo:[]
        }        
    }

    addTodo({target}){       
        const currentTodo = target.value.replace(/\./g, '').trim();  
        console.log(currentTodo)
    }     
    

    render() {
        return(
            <>
               <h1 
                className='title'>
                To Do List
               </h1>
               <input 
                className='input'
                type='text'
                placeholder='What Do You Want To Do?'
                onChange={this.addTodo.bind(this)}/>
                                
               <button 
                className='btn'>
                Add
                </button>                 
            </>
        )
    }
}

export default Form;
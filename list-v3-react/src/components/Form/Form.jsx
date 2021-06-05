import React, {Component} from 'react';
import './form.css';

class Form extends Component {
    constructor(props){
        super(props);
        this.text = '';
    }

    handleTextChange({target}){           
        const capturedText = target.value.replace(/\./g, '').trim();  
        this.text = capturedText; 
        target.value = '';                    
    }    

    handleTextValidation() {
        if(!this.text) return alert('Digite Algo')
        this.props.text(this.text);                 
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
                onBlur={this.handleTextChange.bind(this)}/>                                
               <button
                className='btn'
                onClick={this.handleTextValidation.bind(this)}
               >
                Add
                </button>                 
            </>
        )
    }
}

export default Form;
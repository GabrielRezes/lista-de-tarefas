import React, {Component} from 'react';
import './list.css';

class List extends Component {    

    handleDeleteTodo(index) {
        this.props.deleteTodo(index)     
    }
   
    render() {
        return(
            <ul className='ul' > 
                {this.props.todoList.map((item, index) => {                                    
                   return (
                        <li 
                         className='li'
                         key={index}
                         onClick={() => this.handleDeleteTodo(index)}>                             
                            <p className='p'>{item}</p>                                                     
                        </li>
                    ) 
                                          
                })}  
            </ul>
        )
    };        
}

export default List;
import React, {Component} from 'react';
import TodoList from './components/TodoList';
import './assets/App.css';
import './assets/reset.css';


class App extends Component {
 
  render() {
    return(
      <section className='app'>
        <TodoList/>               
      </section>      
    );
  }
}

export default App;

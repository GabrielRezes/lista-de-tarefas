import React, {Component} from 'react';
import Container from './components/Container-box';
import Form from './components/Form';
import List from './components/List';
import './assets/App.css';
import './assets/reset.css';


class App extends Component {
 
  render() {
    return(
      <section className='app'>
        <Container>
          <Form/>
          <List/>  
                   
        </Container>                
      </section>      
    );
  }
}

export default App;

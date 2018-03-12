import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './custom.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
//import  get  from 'axios'
//import TodoList from './components/TodoList'

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      todolist:''
    }

    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

 /* onFormSubmit(todolist){
    console.log("todolist--> ", todolist)

    this.setState({todolist})
  }
*/

  onFormSubmit(todolist){
      this.setState({todolist})
    /*get('http://localhost:3000/weather/${todolist}')
      .then(({data}) => {
        const {list:listItem} = data;
        this.setState({todolist})
    })*/
  }

  render() {
     const { listItemArrState } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My First React Application</h1>
        </header>
        <div className="panel-custom">
          <TodoForm  onSubmit={this.onFormSubmit}/>
        </div>  
        <div>
          <TodoList listItemArr ={listItemArrState}/>
        </div>
      </div>
    );
  }
}

export default App;

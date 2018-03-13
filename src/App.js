import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './custom.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
//import  get  from 'axios'
//import TodoList from './components/TodoList'

class App extends Component {
  constructor ( props ) {
    super ( props )

    this.state = {
      todolist:[]
    }

  //  console.log("app==> ", this.props.input)
    //this.getTodoList = this.getTodoList.bind ( this )
    console.log("props", this.todolist)
  }

   getTodoList = (todolistArr) => {

        this.setState({todolist: todolistArr},
          ()=>{
            console.log("app todo List==> ", this.state.todolist)
          //  this.props.todolist = this.state.todolist;
          }
        );

    }

/*
{
            (this.state.todolist).map((item)=>{
                <h1>{item}</h1>
            })
          }
*/
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My First React Application</h1>
        </header>
        <div className="panel-custom">
          <TodoForm onGetTodoList={this.getTodoList}/>
        </div>  
        <div className="panel-custom">
          <TodoList setTodoListElem = {this.state.todolist}/>
        </div>
      </div>
    );
  }
}

export default App;

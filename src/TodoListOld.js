import React, { Component } from 'react';
import './App.css';




class TodoList extends React.Component {
  render() {    
    return (
      <div className="todoList">
        <p>First Component</p>
        <TodoList 
          todos={this.state.data} 
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}

export default TodoList;

import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props){
    super(props);

    this.state = {
      todolist : ''
    }
    this.inputUpdated = this.inputUpdated.bind(this)
      this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  

  inputUpdated(e) {
      const { value } = e.target;
      this.setState({ todolist: value });
   }


  onFormSubmit(todolist){
    this.setState({todolist})
  }

  render() {
    return (  
      <div className="todo-list">
        <form>
          <label htmlFor="todolist">Enter Text</label>
          <input
            className="form-control"
            type="input"
            name="todolist"
            value={this.state.todolist}
            onInput={this.inputUpdated}/>
          <button type="submit" className='btn btn-success' onSubmit={this.onFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default TodoList;
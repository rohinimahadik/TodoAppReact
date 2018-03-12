import React, {Component} from 'react'


class TodoForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            todolist:''
        }
    this.inputUpdated = this.inputUpdated.bind(this)
    this.submitTodoList = this.submitTodoList.bind(this)
    }

    inputUpdated(e){
        //console.log("e==> ",e.target.name)
        const { value } = e.target
        this.setState({todolist: value})
    }

    submitTodoList(e){
        e.preventDefault();

        const { todolist } = this.state;
        const { onSubmit } = this.props;

        onSubmit(todolist);
        this.setState({todolist:''})
    }

    

    render(){
        return (
            <div className="todo-form">
                <form onSubmit = {this.submitTodoList}>
                   <label htmlFor="todolist">Todo List</label> 
                   <input
                        className="form-control"
                        type="input"
                        name="todolist"
                        value = {this.state.todolist}
                        onInput={this.inputUpdated}/>
                   <button type="submit" className = "btn btn-success">Add in Todo List</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;

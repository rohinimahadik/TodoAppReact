import React, { Component } from 'react'


class TodoForm extends Component {
    constructor ( props ) {
        super( props )

        this.state = {
          // todolist:''
            todolist:[],
            input:''
        }
        console.log("toform state==> ", this.props)
        this.inputUpdated = this.inputUpdated.bind ( this )
        this.addInTodoList = this.addInTodoList.bind ( this )

    }

    inputUpdated ( e ) {
        e.preventDefault ();
        this.setState( { input: e.target.value } )  
    }

    addInTodoList ( e ) {
        e.preventDefault()
        this.setState( ( prevState, props ) => {
            return {
                todolist: prevState.todolist.concat(this.state.input),
                input:''
            };
        },()=>{
            // do something here....
            console.log("todoList==> ", this.state.todolist)
            this.props.onGetTodoList(this.state.todolist); 
        })
    }

    render () {
        return (
            <div className="todo-form">
                <form onSubmit = { this.submitTodoList }>
                   <label htmlFor="todolist" className="headerLabel">Todo's</label><br/><br/>
                   <input
                        className="form-control"
                        type="input"
                        name="todolist"
                        value = {this.state.input}
                        onInput={this.inputUpdated}
                        placeholder="Please Enter Your Todo Item"/>
                    <br/><br/>
                   <button type="button" className = "btn btn-success" onClick={this.addInTodoList}>Add in Todo List</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;

import React, {Component} from 'react'


class TodoForm extends Component{
    constructor(props){
        super(props)

        this.state = {
          // todolist:''
            todolist:[],
            input:''
        }
    this.inputUpdated = this.inputUpdated.bind(this)
    this.todoListUpdated = this.todoListUpdated.bind(this)
    //this.submitTodoList = this.submitTodoList.bind(this)
    }

    inputUpdated(e){
        //console.log("e==> ",e.target.name)
        e.preventDefault();
       // const { value } = e.target.value
        this.setState({input: e.target.value})
    }

    todoListUpdated(e){
     //   e.preventDefault()
        this.setState(prevState => ({
            todolist: prevState.todolist.concat(this.state.input),
            input: ''
        })
      
   )
  console.log("this=> ", this.state)
}
   

    /*submitTodoList(e){
        e.preventDefault();

        const { input } = this.state;
        const { onSubmit } = this.props;

        //onSubmit(todolist);
        onSubmit()
        
        //this.setState({todolist:''})
    }*/

    

    render(){
        return (
            <div className="todo-form">
                <form onSubmit = {this.submitTodoList}>
                   <label htmlFor="todolist" className="headerLabel">Todo's</label><br/><br/>
                   <input
                        className="form-control"
                        type="input"
                        name="todolist"
                        //value = {this.state.todolist}
                        onInput={this.inputUpdated}
                        value = {this.state.input}
                        placeholder="Please Enter Your Todo Item"/>
                    <br/><br/>
                   <button type="submit" className = "btn btn-success" onClick={this.todoListUpdated}>Add in Todo List</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;

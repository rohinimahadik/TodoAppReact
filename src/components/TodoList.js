import React, {Component} from 'react'

class TodoList extends Component{
    constructor(props){
        super(props)
        console.log("todolist props==> ",this.props);    
    }
 
    render(){
        console.log("List state -->  ",this.state);
        console.log("list Props --> ", this.props)
        let getTodoListArr = this.props.setTodoListElem;
       	var getTodoList = getTodoListArr.map(function(item, index){
            			return <li key={ index }>{item}</li>;
          			})
        return  <ul>{ getTodoList }</ul>
    }
}

export default TodoList;


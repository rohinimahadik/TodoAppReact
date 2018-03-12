import React, {Component} from 'react'
import TodoListItem from './TodoListItem'

class TodoList extends Component{
    /*constructor(props){
        super(props)
    }*/

    render(){
        const { listItemArr } = this.props;
        return(
            <div className="todo-list flex-parent">
                {listItemArr.map((list) =>
                    <TodoListItem listItem = {list}/>
                )}
            </div>
        )
    }
}

export default TodoList;


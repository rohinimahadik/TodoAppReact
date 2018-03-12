import React, {Component} from 'react'

class TodoListItem extends Component{
    render(){
        const { listItem } =this.props
        const todolistitem = listItem
        return(
            <div className='todo-list-item'>
                <h5>{todolistitem}</h5>
            </div>
        )
    }   
}

export default TodoListItem;

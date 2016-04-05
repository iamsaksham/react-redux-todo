import React, { Component } from 'react'
import TodoItem from './TodoItem'
import * as bootstrap from 'react-bootstrap'

class TodoList extends Component {

  render() {
    return (
     <bootstrap.ListGroup>

      {
        this.props.todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} actions={this.props.actions} />
        })
      }

     </bootstrap.ListGroup>
    )
  }

}

export default TodoList

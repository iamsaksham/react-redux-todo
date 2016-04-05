import React, { Component } from 'react'
import actions from '../redux/actions'
import * as bootstrap from 'react-bootstrap'

class TodoItem extends Component {

  handleComplete() {
    this.props.actions.completeTodo(this.props.todo.id)
  }

  handleDelete() {
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  render() {
    return (
      <bootstrap.ListGroupItem className='col-sm-offset-1' bsStyle="info">
        {this.props.todo.text} {"     "}
        
          <bootstrap.ButtonGroup className='pull-right'>
            <bootstrap.Button onClick={this.handleComplete.bind(this)} bsSize="xsmall" bsStyle="success"><bootstrap.Glyphicon glyph="ok" /></bootstrap.Button>
            <bootstrap.Button onClick={this.handleDelete.bind(this)} bsSize="xsmall" bsStyle="danger"><bootstrap.Glyphicon glyph="trash" /></bootstrap.Button>
          </bootstrap.ButtonGroup>
        
      </bootstrap.ListGroupItem>
    )
  }

}

export default TodoItem

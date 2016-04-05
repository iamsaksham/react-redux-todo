import React, { Component } from 'react'
import * as bootstrap from 'react-bootstrap'

class TodoInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  handleChange(event) {
    //console.log(this)
    //console.log(event.target.value)
    this.setState({
      inputText: event.target.value 
    });
  }

  handleSubmit(event) {
    event.preventDefault() //So that page des not refresh
    //console.log("submit clicked")
    //this.props.dispatch(actions.addTodo(this.state.inputText))
    this.props.addTodo(this.state.inputText)
    this.state.inputText = ''
  }

	render() {
		return (
      <bootstrap.Navbar className='col-sm-offset-1'>
        <form className='navbar-form' onSubmit={this.handleSubmit.bind(this)}>
          <bootstrap.Input 
            type="text"
            placeholder="Enter TODO Item"
            value={this.state.inputText}
            onChange={this.handleChange.bind(this)}
            />
            <bootstrap.ButtonInput bsStyle='warning' type="submit" text="submit" />
        </form>
      </bootstrap.Navbar>
    )
	}

}

export default TodoInput

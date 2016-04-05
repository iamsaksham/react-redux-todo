import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import * as bootstrap from 'react-bootstrap'

class App extends Component {

  render() {
    return (
      <bootstrap.Well>
        <h1 className="col-sm-offset-1">TodoS</h1>
          <TodoInput addTodo={this.props.actions.addTodo}/>
          <TodoList actions={this.props.actions} todos={this.props.todos}/>
        </bootstrap.Well>
    )
  }

}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch) //binds all the actions with dispatcher and returns them
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

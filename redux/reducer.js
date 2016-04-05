function getId(state) {
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let reducer = function(state, action) {
  switch (action.type) {

    case 'ADD_TODO':
      //console.log("inside ADD_TODO")
      if (action.text === '') {
        return state;
      }
      return Object.assign({}, state, {
        todos: [{
          //add new todo at top of list
          text: action.text,
          completed: false,
          id: getId(state)
        }, ...state.todos]
      })

    case 'COMPLETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          return todo.id === action.id ? Object.assign({}, todo, {completed: !todo.completed}) : todo
        })
      })

    case 'DELETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => { //filter takes in a function and returns true or false if u want to keep that element or not
          return todo.id !== action.id
        })
      })

    default:
      return state;
  }
}

export default reducer
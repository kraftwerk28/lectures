import React from 'react'

import ToDoList from './ToDoList'
import AddToDo from './AddTodo'

function ToDo(text) {
  this.text = text
  this.completed = false
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [new ToDo('Drink coffee'), new ToDo('Write code')]
    }

    this.handleAddToDo = this.handleAddToDo.bind(this)
    this.handleCheckToDo = this.handleCheckToDo.bind(this)
    this.handleDeleteToDo = this.handleDeleteToDo.bind(this)
  }

  handleAddToDo(text) {
    this.setState(prevState => ({
      ...prevState,
      todos: [...prevState.todos, new ToDo(text)]
    }))
  }

  handleDeleteToDo(index) {
    return () => {
      this.setState(prevState => {
        const newToDos = prevState.todos.slice()
        newToDos.splice(index, 1)
        return { ...prevState, todos: newToDos }
      })
    }
  }

  handleCheckToDo(index) {
    return () => {
      this.setState(prevState => {
        const newToDos = prevState.todos.slice()
        newToDos[index].completed = !newToDos[index].completed
        return { ...prevState, todos: newToDos }
      })
    }
  }

  render() {
    return (
      <div className='root'>
        <div className='container'>
          <h2>ToDo app</h2>
          <AddToDo onAddToDo={this.handleAddToDo} />
          <ToDoList
            checkToDo={this.handleCheckToDo}
            deleteToDo={this.handleDeleteToDo}
            todos={this.state.todos}
          />
        </div>
      </div>
    )
  }
}

export default App

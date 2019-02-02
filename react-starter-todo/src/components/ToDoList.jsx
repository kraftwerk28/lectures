import React from 'react'
import ToDoElement from './ToDoElement';


class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, checkToDo, deleteToDo } = this.props

    return (
      <ol className='todo-list'>
        {todos.map((todo, index) => (
          <ToDoElement
            data={todo}
            key={index}
            onCheckClick={checkToDo(index)}
            onDeleteClick={deleteToDo(index)}
          />
        ))}
      </ol>
    )
  }
}

export default ToDoList

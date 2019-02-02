import React from 'react'


class ToDoElement extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { data, onCheckClick, onDeleteClick } = this.props
    const { text, completed } = data

    return (
      <li className='todo-item'>
        <div>
          <span
            style={{
              textDecoration: completed ? 'line-through' : 'none'
            }}
          >{text}</span>
          <button onClick={onCheckClick}>
            <span className='material-icons'>
              {completed ? 'close' : 'done'}
            </span>
          </button>
          <button onClick={onDeleteClick}>
            <span className='material-icons'>delete</span>
          </button>
        </div>
      </li>
    )
  }
}

export default ToDoElement

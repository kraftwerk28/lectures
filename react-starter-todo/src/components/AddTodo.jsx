import React from 'react'


class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef()
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  handleBtnClick() {
    const _string = this.inputElement.value.trim()
    if (_string.length)
      this.props.onAddToDo(_string)
    this.inputElement.value = ''
    this.inputElement.focus()
  }

  render() {
    return (
      <div className='add-todo'>
        <input type="text" ref={el => this.inputElement = el} />
        <button onClick={this.handleBtnClick}>
          <span class='material-icons'>add</span>
        </button>
      </div>
    )
  }
}

export default AddToDo

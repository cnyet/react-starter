import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
  render() {
    const { content } = this.props;
    return (
      <li
        onDoubleClick={this.handleClick}>
        {content}
      </li>
    )
  }
}

export default TodoItem;
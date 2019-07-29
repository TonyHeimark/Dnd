import React, { Component } from "react"

export default class Draggable extends Component {
  drag = e => {
    e.dataTransfer.setData("transfer", e.target.id)
  }

  noAllowDrop = e => {
    e.stopPropagation()
  }

  render(props) {
    return (
      <div
        id={this.props.id}
        draggable="true"
        onDragStart={this.drag}
        onDragOver={this.noAllowDrop}
        className={this.props.className}
      >
        {this.props.children}
      </div>
    )
  }
}

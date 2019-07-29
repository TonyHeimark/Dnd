import React, { Component } from "react"
import Draggable from "./components/Draggable"
import Droppable from "./components/Droppable"
import "./styles/dndtest.css"

export default class DndTest extends Component {
  render() {
    return (
      <div className="wrapper">
        <Droppable id="dr1" className="droppable">
          <Draggable id="item1" className="item" style={{ margin: "8px" }}>
            Yey
          </Draggable>
          <Draggable id="item2" className="item" style={{ margin: "8px" }}>
            Yahoo
          </Draggable>
        </Droppable>
        <Droppable id="dir2" className="droppable" />
      </div>
    )
  }
}

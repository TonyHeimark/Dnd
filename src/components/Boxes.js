import React, { Component } from "react"
import "../styles/boxes.css"

export default class Boxes extends Component {
  render() {
    return (
      <div className="box-container">
        <div className="box">
          <button>+</button>
          <span>Kitchen</span>
        </div>

        <div className="box">
          <button>+</button>
          <span>Reseption</span>
        </div>

        <div className="box">
          <button>+</button>
          <span>Room 1</span>
        </div>

        <div className="box">
          <button>+</button>
          <span>Coffee</span>
        </div>
      </div>
    )
  }
}

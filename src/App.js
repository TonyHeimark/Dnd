import React, { Component } from "react"
import "./styles/App.css"
import NoCompact from "./components/NoCompact"
import Boxes from "./components/Boxes"

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <NoCompact />
        </div>
        <div>
          <Boxes />
        </div>
      </div>
    )
  }
}

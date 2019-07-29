import React from "react"
import GridLayout from "react-grid-layout"
import "../../node_modules/react-grid-layout/css/styles.css"
import "../../node_modules/react-resizable/css/styles.css"
import "../styles/grid.css"

export default class MyFirstGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2 },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
      { i: "d", x: 2, y: 0, w: 1, h: 2 },
      { i: "e", x: 5, y: 0, w: 1, h: 2 },
      { i: "f", x: 4, y: 2, w: 1, h: 2 }
    ]
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={24}
        rowHeight={30}
        height={500}
        width={1200}
      >
        <div className="item" key="a">
          a
        </div>
        <div className="item" key="b">
          b
        </div>
        <div className="item" key="c">
          c
        </div>
        <div className="item" key="d">
          d
        </div>
        <div className="item" key="e">
          e
        </div>
        <div className="item" key="f">
          f
        </div>
      </GridLayout>
    )
  }
}

import React from "react"
import _ from "lodash"
import RGL, { WidthProvider } from "react-grid-layout"
import "../../node_modules/react-grid-layout/css/styles.css"
import "../../node_modules/react-resizable/css/styles.css"
import "../styles/grid.css"

const ReactGridLayout = WidthProvider(RGL)

export default class NoCompactingLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    preventCollision: true,
    cols: 30,
    maxRows: 16,
    margin: [0, 0],
    rowHeight: 30,
    containerPadding: [10, 10],
    onLayoutChange: function() {},
    // This turns off compaction so you can place items wherever.
    verticalCompact: false
  }

  constructor(props) {
    super(props)

    const layout = this.generateLayout()
    this.state = { layout }
  }

  generateDOM() {
    const defaultItems = [
      {
        key: "Kitchen"
      },
      {
        key: "Reseption"
      },
      {
        key: "Coffee"
      },
      {
        key: "Meeting Room 1"
      },
      {
        key: "Meeting Room 2"
      }
    ]
    return defaultItems.map(item => {
      return (
        <div className="item" key={item.key}>
          <span className="text">{item.key}</span>
        </div>
      )
    })
  }

  generateLayout() {
    const p = this.props
    return _.map(new Array(p.items), function(item, i) {
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: 2,
        i: i.toString()
      }
    })
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout)
  }

  render() {
    return (
      <main className="wrapper">
        <ReactGridLayout
          layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
          {...this.props}
        >
          {this.generateDOM()}
        </ReactGridLayout>
      </main>
    )
  }
}

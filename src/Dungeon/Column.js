import React from 'react'
import Cell from "./Cell"

const Column = ({ column }) => {
  const cells = column.map((cell, i) => <Cell type={cell.type} exits={cell.exits} key={i} />)
  return <div className="column">{cells}</div>
}

export default Column
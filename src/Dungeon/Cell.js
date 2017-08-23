import React from 'react'

const Cell = ({ type, exits }) => {
  let walls = ''
  exits.forEach((exit) => {
    walls += ` ${exit.name}`
  })
  let tile = `cell ${type}${walls}`
  return <div className={tile}></div>
}

export default Cell
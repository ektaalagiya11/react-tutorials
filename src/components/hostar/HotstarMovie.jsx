import React from 'react'
import { Link } from 'react-router-dom'

const HotstarMovie = () => {
  return (
    <div style={{textAlign:"center",margin:"20px",backgroundColor:"yellow",height:"200px"}}>
    <h1> MOVIES NAME </h1>
    <ul>
      <li>
        <Link to="/play/moneyheist">moneyheist</Link>
      </li>
      <li>
        <Link to="/play/kapilsharma">kapilsharma</Link>
      </li>
      <li>
        <Link to="/play/10190">pushpa</Link>
      </li>
    </ul>
  </div>
  )
}

export default HotstarMovie

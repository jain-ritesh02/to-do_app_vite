import React, { useContext } from 'react'
import { todocontext } from '../src/Context/Contexts'

const Header = () => {
  const [tasks] = useContext(todocontext)
  return (
    <div className="to-do">
    <div className="text">
    <h1>LET'S TODO</h1>
    <p>keep doing good things.</p>
    </div>
    <div className="circle">
      <h1>{tasks.filter((t) => t.completed === true).length}/{tasks.length}</h1>
    </div>
  </div>
  )
}

export default Header

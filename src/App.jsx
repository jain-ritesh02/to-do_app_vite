import React, { useState } from 'react'
import './App.css'
import './index.css'
import Header from '../components/Header'
import Create from '../components/Create'
import Show from '../components/Show'

const App = () => {

  const [tasks, settasks] = useState([])

  return (
    <>
     <div id="main">
      <div className="container">
        <Header/>

        <Create/>

        <Show/>

      </div>
     </div>
    </>
  )
}

export default App

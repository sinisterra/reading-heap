import React, { useState } from 'react'
import 'marx-css/css/marx.css'
import PriorityForm from './PriorityForm'

const App = () => {
  const [element, updateElement] = useState({})

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        maxHeight: '100vh'
      }}>
      <div style={{ flexGrow: 3 }}>
        <h1>Reading Heap</h1>
      </div>
      <div style={{ flexGrow: 1, height: '100vh', overflowY: 'auto' }}>
        <PriorityForm
          element={{ name: 'hello' }}
          updateElement={updateElement}
        />
      </div>
    </div>
  )
}

export default App

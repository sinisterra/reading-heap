import React, { useState } from 'react'
import 'marx-css/css/marx.css'
import PriorityForm from './PriorityForm'

const ResourceHeap = () => <div>Hola, soy un montículo</div>
const ResourceTable = () => <div>Y yo una bonita tabla</div>

const App = () => {
  const [element, updateElement] = useState({})
  const [section, setSection] = useState('heap')
  const [elements, updateElements] = useState({})
  const [mode, setMode] = useState('create')

  const selectSection = s => () => {
    setSection(s)
  }

  const onSubmit = nextElement => {
    if ('edit' === mode) {
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        maxHeight: '100vh'
      }}>
      <div style={{ flexGrow: 3 }}>
        <h1>Reading Heap</h1>
        <div>
          <button onClick={selectSection('heap')}>Heap</button>
          <button onClick={selectSection('table')}>Table</button>
          {section === 'heap' ? <ResourceHeap /> : <></>}
          {section === 'table' ? <ResourceTable /> : <></>}
        </div>
      </div>
      <div style={{ flexGrow: 1, height: '100vh', overflowY: 'auto' }}>
        <PriorityForm mode={mode} element={element} onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default App

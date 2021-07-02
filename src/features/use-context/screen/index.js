import React, { useState } from 'react'
import Table from '../components/Table'
import RadiosAlign from '../components/RadiosAlign'
import Context from '../context'

const ScreenUseContext = () => {
  const [align, setAlign] = useState('start')
  return (
    <div>
      <Context.Provider value={{ align, setAlign }}>
        <RadiosAlign />
        <br />
        <Table />
      </Context.Provider>
    </div>
  )
}

export default ScreenUseContext

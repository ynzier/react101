import React, { useRef } from 'react'
import FormPost from '../components/FormPost'

const ScreenUseRef = () => {
  const ref = useRef()
  return (
    <div>
      <div>
        <button onClick={() => { ref.current.click() }}>
          Save
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <FormPost refSubmit={ref} />
    </div>
  )
}

export default ScreenUseRef

import React, { useEffect, useState } from 'react'
import CalculatorLoan from '../components/CalculatorLoan'
import Unmount from '../components/Unmount'

const SrceenUseEffect = () => {
  const [show, setShow] = useState(true)
  useEffect(() => {
    alert('didmount')
  }, [])
  return (
    <div>
      <CalculatorLoan />
      
      {show && (
        <Unmount />
      )}
      <button onClick={() => { setShow(prev => !prev) }}>
        Toggle
      </button>
    </div>
  )
}

export default SrceenUseEffect

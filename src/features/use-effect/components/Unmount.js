import React, { useEffect } from 'react'

const Unmount = () => {

  useEffect(() => {
    return () => {
      alert('Unmount')
    }
  }, [])

  return (
    <div>
      Unmount
    </div>
  )
}

export default Unmount

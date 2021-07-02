import React, { useState } from 'react'
import Field from '../../../components/Field'

const Prev = () => {
  const [values, setValues] = useState('')

  const onChange = (event) => {
    const { value, name } = event.target
    setValues(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <div>
      <Field
        label='email'
        name='email'
        onChange={onChange}
        value={values.email}
      />
      <Field
        label='password'
        name='password'
        onChange={onChange}
        value={values.password}
      />
    </div>
  )
}

export default Prev

import React, { useState } from 'react'
import Field from '../../../components/Field'

const Basic = () => {
  const [email, setEmail] = useState('')
  const onChange = (event) => {
    const { value } = event.target
    setEmail(value)
  }
  return (
    <div>
      <Field
        label='email'
        name='email'
        onChange={onChange}
        value={email}
      />
    </div>
  )
}

export default Basic

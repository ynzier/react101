import React, { useState } from 'react'
import axios from 'axios'
import Field from '../../../components/Field'

const Form = (props) => {
  const [values, setValues] = useState({ title: '', body: '' })
  
  const onChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    console.log('values', values)
    try {
      const { data } = await axios.post('https://jsonplaceholder.typicode.com/post', values)
      console.log('data', data)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <form className='form' onSubmit={onSubmit}>
      <Field
        type='text'
        label='title'
        name='title'
        onChange={onChange}
        required
      />
      <Field
        type='text'
        label='body'
        name='body'
        onChange={onChange}
        required
      />
      <br />
      <button type='submit'>
        onSubmit
      </button>
    </form>
  )
}

export default Form

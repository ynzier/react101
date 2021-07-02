import React, { useState, useCallback } from 'react'

const Form = (props) => {
  const [values, setValues] = useState({ title: '', body: '' })
  
  const onChange = useCallback((event) => {
    const { name, value } = event.target
    setValues((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }, [])

  const onSubmit = (event) => {
    event.preventDefault()
    console.log('values', values)
  }

  return (
    <form className='form' onSubmit={onSubmit}>
      <h2>Form</h2>
      <div className='inputbox'>
        <label>title</label>
        <input
          type='text'
          name='title'
          onChange={onChange}
        />
      </div>
      <div className='inputbox'>
        <label>body</label>
        <input
          type='text'
          name='body'
          onChange={onChange}
        />
      </div>
      <br />
      <button type='submit' ref={props.refSubmit} style={{ display: 'none' }}/>
    </form>
  )
}

export default Form

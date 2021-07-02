import React, { useCallback } from 'react'
import Field from '../../../components/Field'
import useForm from '../hooks/useForm'
import usePostData from '../hooks/usePostData'

const Form = (props) => {
  const [post, responce, loading] = usePostData('https://jsonplaceholder.typicode.com/post')
  const { values, onChange } = useForm({
    initialValues: { title: '', body: '' }
  })

  const onSubmit = useCallback(async (event) => {
    event.preventDefault()
    console.log('values', values)
    await post(values)
  }, [values, post])

  return (
    <form className='form' onSubmit={onSubmit}>
      {responce && (
        <span style={{color: 'red' }}>{responce}</span>
      )}
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
        {loading ? 'submiting...' : 'onSubmit'}
      </button>
    </form>
  )
}

export default Form

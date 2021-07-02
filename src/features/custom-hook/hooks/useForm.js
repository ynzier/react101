import { useState } from 'react'

const useForm = props => {
  const [values, setValues] = useState(props.initialValues)

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return {
    values, onChange
  }
}

export default useForm

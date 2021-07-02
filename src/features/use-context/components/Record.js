import React, { useContext } from 'react'
import Context from '../context'

const Record = props => {
  const context = useContext(Context)
  return (
    <tr>
      <td style={{ textAlign: context.align }}>{props.title}</td>
      <td style={{ textAlign: context.align }}>{props.body}</td>
    </tr>
  )
}

export default Record

import React from 'react'

const Record = props => {
  return (
    <tr>
      <td style={{ textAlign: 'start' }}>{props.title}</td>
      <td style={{ textAlign: 'start' }}>{props.body}</td>
    </tr>
  )
}

export default Record

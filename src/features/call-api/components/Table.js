import React from 'react'
import Record from '../components/Record'

const Table = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>title</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, index) =>
          <Record
            key={index}
            userId={item.userId}
            id={item.id}
            title={item.title}
            body={item.body}
          />
        )}
      </tbody>
    </table>
  )
}

export default Table

import React, { memo } from 'react'

const Field = props => {
  const { label, name, onChange, value, type, logCount, ...propsInput } = props
  if (logCount) {
    console.count(name)
  }
  return (
    <div className='inputbox'>
      <label htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        {...propsInput}
      />
    </div>
  )
}

export default memo(Field)

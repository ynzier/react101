import React from 'react'

/**
 * class => className
 * attribute name: xxx-xxx => xxxXxx
 */
const index = () => {
  return (
    <div className='className'>
      {'class => className'}
      <div>
        <svg width="100" height="100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="green"
            strokeWidth="4" // stroke-width="4"
            fill="yellow"
          />
        </svg>
        <br />
        {`strokeWidth="4" => stroke-width="4"`}
        <br />
        {`xxx-xxx => xxxXxx`}
      </div>
      <div
        style={{ backgroundColor: 'pink' }} // style="background-color: 'pink';
      >
        {`style={{ backgroundColor: 'pink' }} => style="background-color: 'pink';`}
      </div>
      <input
        value={`<input > => <input />`}
      /> {/* <input > */}
      <div
        style={{ marginBottom: 2 }} // 2px
      />
      <div
        style={{ marginBottom: '2rem' }} // 2rem
      />
    </div>
  )
}

export default index

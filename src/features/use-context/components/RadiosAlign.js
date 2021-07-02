import React, { useCallback, useContext } from 'react'
import Context from '../context'

const RadiosAlign = props => {
  const context = useContext(Context)

  const onChange = useCallback((event) => {
    const { value } = event.target
    context.setAlign(value)
  }, [context])

  return (
    <div>
      <div>
        <input
          id='start'
          name='align'
          value='start'
          type='radio'
          onChange={onChange}
          checked={context.align === 'start'}
        />
        <label htmlFor='start'>
          start
        </label>
      </div>
      <div>
        <input
          id='center'
          name='align'
          value='center'
          type='radio'
          onChange={onChange}
          checked={context.align === 'center'}
        />
        <label htmlFor='center'>
          center
        </label>
      </div>
      <div>
        <input
          id='end'
          name='align'
          value='end'
          type='radio'
          onChange={onChange}
          checked={context.align === 'end'}
        />
        <label htmlFor='end'>
          end
        </label>
      </div>
    </div>
  )
}

export default RadiosAlign

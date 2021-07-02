import React from 'react'

const Card = props => {
  console.log('object', props)
  const { img, title, body, children } = props
  return (
    <div className='card' >
      {/* <img src={img} alt={img} width='100%' /> */}
      <div
        style={{ backgroundImage: `url(${img})` }}
        className='box-img'
      />
      <h3>{title}</h3>
      <p>{body}</p>
      {children}
    </div>
  )
}

Card.defaultProps = {
  title: 'title',
  body: 'body'
}

export default Card

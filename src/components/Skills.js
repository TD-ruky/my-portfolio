import React from 'react'
import './skills.css'

export default function Skills(props) {
  return (
    <div className='card-skill'>
      <h3 className='card-logo'>logo</h3>
      <h3 className='card-title'>{props.cardTitle}</h3>
      <p>Lorem ipsum dolor sit amet. Ut quis dolores et nihil amet qui atque veritatis aut nihil maiores eos quidem voluptatem et temporibus minus qui incidunt illo? Ut vitae quam et reprehenderit quaerat quo asperiores iure et sequi fugit ea tempore assumenda et quaerat </p>
    </div>
  )
}

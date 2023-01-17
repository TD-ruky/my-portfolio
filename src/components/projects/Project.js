import React from 'react'
import './project.css'
import capture from '../../medias/projet-portfolio.PNG'


export default function project() {
  return (
    <div className='card-project'>
      <img src={capture} className='project-cover'></img>
      <div className='project-hover'>
        <h3 className='project-title'>Avatar</h3>

        <p>Loremui fugit ea tempore assumenda et quaerat </p>
        <button>Voir le code</button>
        <br/>
        <button>Voir la démo</button>
      </div>
    </div>
  )
}


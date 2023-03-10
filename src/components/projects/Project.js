import React from 'react'
import './project.css'

export default function Project(props) {

  return (
    <div className='card-project'>
      <img src={props.background} className='project-cover' alt={props.project.title}></img>
      <div className='project-hover'>

        <h3 className='project-title'>{props.project.title}</h3>
        <p className='project-description'>{props.project.description}</p>
        {props.project.lienCode!==null?<a href={props.project.lienCode}><button>Voir le code</button></a>:null}
        {props.project.lienDemo!==null?<a href={props.project.lienDemo}><button>Voir la démo</button></a>:null}
        {props.fractale?<button onClick={props.toggleHomeCanvas}>Se téléporter</button>:null}

      </div>
    </div>
  )
}


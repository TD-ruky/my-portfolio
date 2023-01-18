import React from 'react'
import './project.css'
import capture from '../../medias/projet-portfolio.PNG'


export default function project(props) {
  return (
    <div className='card-project'>
      <img src={capture} className='project-cover'></img>
      <div className='project-hover'>
        <h3 className='project-title'>{props.project.title}</h3>

        <p>{props.project.description}</p>
        {props.project.lienCode!==null?<a href={props.project.lienCode}><button>Voir le code</button></a>:null}
        {props.project.lienDemo!==null?<a href={props.project.lienDemo}><button>Voir la démo</button></a>:null}
      </div>
    </div>
  )
}


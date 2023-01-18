import React, { useEffect, useState } from 'react'
import './skill.css'

export default function Skills(props) {
const [bugActivated, setBugActivated] = useState(false)

  const handleChangeBugActivated=()=>{
    if (props.skill.bug === true) setBugActivated(true)
  }
  useEffect(()=>{
    if (bugActivated === true){

    }
  },[bugActivated])
console.log(props.skill)
  return (
    <div className='card-skill'>
      <img onClick={handleChangeBugActivated} src={props.icon} className={'card-logo '+ (bugActivated?' lady-move':null)}></img>
      
      <h3 className='card-title'>{props.skill.title}</h3>
      <p>{props.skill.content}</p>
    </div>
  )
}

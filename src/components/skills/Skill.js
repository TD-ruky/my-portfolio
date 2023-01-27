import React, { useEffect, useState, useRef } from 'react'
import './skill.css'

export default function Skills(props) {
  
const [bugActivated, setBugActivated] = useState(false)
const [isVisible, setIsVisible] = useState(false)
const myRef = useRef(null)

useEffect(()=>{
  const observer = new IntersectionObserver((entries)=>{
    const entry = entries[0]
    setIsVisible(entry.isIntersecting)
  })
  observer.observe(myRef.current)
}, [])


  const handleChangeBugActivated=()=>{
    if (props.skill.bug === true) setBugActivated(true)
  }

  return (
    <div className={isVisible?'visible card-skill':'card-skill'} ref={myRef}>
      <img 
        onClick={handleChangeBugActivated} 
        src={props.icon} 
        className={'card-logo '+ (bugActivated?' lady-move':null)} 
        alt={props.alt}>
      </img>
      <h3 className='card-title'>{props.skill.title}</h3>
      <p>{props.skill.content}</p>
    </div>
  )
}

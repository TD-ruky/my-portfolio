import './footer.css'
import React from 'react'
import {cog} from '../../imports.js'
export default function Footer() {
  return (

    <footer>
        <h3>Work in progress, more content soon </h3>
        <img className='cog' src={cog} alt="rouage"></img>
    </footer>
  )
}

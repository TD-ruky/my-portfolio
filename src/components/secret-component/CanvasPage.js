import React, { useEffect } from 'react'
import Canvas from './Canvas'
import './canvas-page.css'

export default function CanvasPage({toggleHomeCanvas, isCanvas}) {
    useEffect(()=>{
        
    },[isCanvas])
    return (
        <div className='anim'>
            <header>
                <button onClick={toggleHomeCanvas}>Retour</button>
            </header>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                <Canvas/>
            </div>
            
        </div>
    )
}

import React from 'react'
import Canvas from './Canvas'

export default function CanvasPage() {
    return (
        <div>
            <header>
                <button>Retour</button>
            </header>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Canvas/>
            </div>
            
        </div>
    )
}

import React, { useEffect, useRef, useState } from 'react'
import InputRange from './InputRange.js'
import './canvas.css'

export default function Canvas() {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    
    const [states, setStates] = useState({scale:0.8, branches:2, sides:6, spread:0.5})

    const changeState=(state, newValue)=>{
        const newStates = {...states}
        newStates[state] = newValue
        setStates(newStates)
    }
    
    useEffect(() =>{
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        let size
        if (window.innerWidth>700){
            canvas.width = window.innerWidth/1.2;
            canvas.height = window.innerHeight/1.2;
            size = 200
        }else if(window.innerWidth>350){
            size = 100
        }
        else{
            canvas.width = window.innerWidth/1.2;
            canvas.height = window.innerWidth/1.2;
            size = 75
        }
            

        //canvas settings
        contextRef.current = context
        console.log(window.innerWidth)
        //effect settings
        const maxLevel = 6
    
        let color = 'hsl(' + Math.random() * 360 + ', 100%, 50%'
        let lineWidth = Math.floor(Math.random() * 10 +1)
        
        const drawBranch=(level)=>{
            if(level > maxLevel) return;
            contextRef.current.beginPath()
            contextRef.current.moveTo(0,0)
            contextRef.current.lineTo(size,0)
            contextRef.current.stroke()
            for(let i = 0; i < states.branches; i++){
                contextRef.current.save();
                contextRef.current.translate(size-(size/states.branches)*i,0)
                contextRef.current.scale(states.scale,states.scale)

                contextRef.current.save()
                contextRef.current.rotate(states.spread)
                drawBranch(level+1)
                contextRef.current.restore()

                contextRef.current.restore()
            }
            contextRef.current.beginPath()
            contextRef.current.arc(0, size, size *0.1, 0, Math.PI * 2)
            contextRef.current.fill()
        }
         const drawFractal=()=>{
             contextRef.current.clearRect(0,0,canvas.width, canvas.height)
             contextRef.current.save()
             contextRef.current.lineWidth = lineWidth
             contextRef.current.strokeStyle = color
             contextRef.current.fillStyle = color
             contextRef.current.translate(canvas.width/2, canvas.height/2)
             for(let i = 0; i<states.sides; i++){
                 contextRef.current.rotate((Math.PI * 2)/states.sides)
                 drawBranch(0)
             }
             contextRef.current.restore()
         }
         drawFractal()
    },[states.scale, states.branches, states.sides, states.spread])

  return (
    <>
        <canvas className='canvas-container' ref={canvasRef}>

        </canvas>
        <div>
            <InputRange changeState={changeState} state='scale' defaultValue={states.scale} min={0.1} max={1} step={0.1}/>
            <InputRange changeState={changeState} state='branches' defaultValue={states.branches} min={0} max={3} step={1}/>
            <InputRange changeState={changeState} state='sides' defaultValue={states.sides} min={1} max={20} step={1}/> 
            <InputRange changeState={changeState} state='spread' defaultValue={states.spread} min={0.1} max={6.4} step={0.1}/> 
        </div>
    </>
  )
}

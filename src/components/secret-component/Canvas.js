import React, { useEffect, useRef, useState } from 'react'
import './canvas.css'

export default function Canvas() {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [scale] = useState(2)

    useEffect(() =>{
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.width = window.innerWidth/1.5;
        canvas.height = window.innerHeight/1.5;
        
        
        //canvas settings
        context.fillStyle = "green";
        context.strokeStyle='yellow'
        contextRef.current = context



        //effect settings
        let size = 100
        const maxLevel = 8
        const branches = 2
    
        let sides = 5
        let spread = 0.6
        let color = 'hsl(' + Math.random() * 360 + ', 100%, 50%'
        let lineWidth = Math.floor(Math.random() * 20 + 10)
        
        const drawBranch=(level)=>{
            if(level > maxLevel) return;
            contextRef.current.beginPath()
            contextRef.current.moveTo(0,0)
            contextRef.current.lineTo(size,0)
            contextRef.current.stroke()
            for(let i = 0; i < branches; i++){
                contextRef.current.save();
                contextRef.current.translate(size-(size/branches)*i,0)
                contextRef.current.scale(scale,scale)

                contextRef.current.save()
                contextRef.current.rotate(spread)
                drawBranch(level+1)
                contextRef.current.restore()

                contextRef.current.restore()
            }
            contextRef.current.beginPath()
            contextRef.current.arc(0, size, size *0.1, 0, Math.PI * 2)
            contextRef.current.fill()
        }
        drawBranch(2)
         const drawFractal=()=>{
             contextRef.current.clearRect(0,0,canvas.width, canvas.height)
             contextRef.current.save()
             contextRef.current.lineWidth = lineWidth
             contextRef.current.strokeStyle = color
             contextRef.current.fillStyle = color
             contextRef.current.translate(canvas.width/2, canvas.height/2)
             for(let i = 0; i<sides; i++){
                 contextRef.current.rotate((Math.PI * 2)/sides)
                 drawBranch(0)
             }
             contextRef.current.restore()
         }
         drawFractal()
    },[scale])

  return (
    <canvas className='canvas-container' ref={canvasRef}>

    </canvas>
  )
}

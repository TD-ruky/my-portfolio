import React from 'react'

export default function InputRange({changeState, state, min, max, step, defaultValue}) {
  return (
    <div>
      <p>{state} :</p>
      <input type='range' step={step} min={min} max={max} defaultValue={defaultValue} onChange={(e)=>changeState(state,e.target.value)}/>
    </div>
  )
}

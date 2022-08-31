import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import carSlice, { addFeature } from '../slices/carSlice';
import data from "../data"


export default function OutputComponent() {
  let dispatch = useDispatch(carSlice)
  let state = useSelector(state=>state.carSlice)
  return (
    <div className='in-comp' >
      { state.availableFeatures.length>0?<h1>Additional Features</h1>:null}
      {state.availableFeatures.map((ele,i)=>{
        return <div className='row' >
          <button onClick={()=>dispatch(addFeature(i))} >Add</button>
          <p>{ele.name} (+{ele.price})</p>
        </div>
      })}
      <h1>Total Amount: ${data.carDetails.price+state.addedFeatures.reduce(((acc,curr)=>{
        return acc+curr.price
      }),0)} </h1>
    </div>
  )
}

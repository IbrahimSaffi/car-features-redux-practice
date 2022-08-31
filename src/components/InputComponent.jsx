import React from 'react'
import data from "../data"
import { useDispatch,useSelector } from 'react-redux';
import carSlice, { removeFeature } from '../slices/carSlice';

export default function InputComponent() {
  let carDetails = data.carDetails
  let dispatch = useDispatch(carSlice)
  let state = useSelector(state=>state.carSlice)
    return (
    <div className='out-comp' >
     <img src={carDetails.image} alt="" srcset="" />
     <p> {carDetails.name}</p>
     <p> Amount: ${carDetails.price}</p>
     {state.addedFeatures.length>0?<h1>Added features</h1>:null}
    {state.addedFeatures.map((ele,i)=>{
      return <div key={i} className='row' >
       <button onClick={()=>dispatch(removeFeature(i))} >X</button>
       <p>{ele.name}</p>
      </div>
    })}
    </div> 
  )
}

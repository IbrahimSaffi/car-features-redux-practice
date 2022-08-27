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
     <p> {carDetails.price}</p>
     <h1>Added features</h1>
    {state.addedFeatures.map((ele,i)=>{
      console.log(ele)
      return <div className='row' >
       <button onClick={()=>dispatch(removeFeature(i))} >X</button>
       <p>{ele.name}</p>
      </div>
    })}
    </div> 
  )
}

import React, { useState } from 'react'
import './css/categories.css'
import CatCard from './Cat-card'
import Data from '../data'

function Categories() {
  let[data,setData]=useState(Data)
  return (
    <div className='categories'>
    {
      data.map((p)=>{
        return(<CatCard img={p.img} heading={p.heading} text={p.text} price={p.price}/>)
      })
    }
    </div>
  )
}

export default Categories

import React from 'react'

function CatCard({img,heading,text,price}) {
  return (
    <div className="categories-card">
        <img src={img} alt="" />
        <div className="heading">{heading}</div>
        <div className="text">{text}</div>
        <div className="price">{price}</div>
      </div>
  )
}

export default CatCard

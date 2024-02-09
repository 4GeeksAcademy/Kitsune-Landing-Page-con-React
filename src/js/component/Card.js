import React from 'react'
import imgSolid from "../../img/img-solid.jpg";


const Card = (props) => {
   
  return ( 
    <div className="card" style={{width:"25rem", margin:" 10px  10px  10px 10px", padding:"0px"}}>
    <img src={imgSolid} className="card-img-top" alt="imagen"/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
      <div className="card-footer text-body-secondary " >
         <a href="#" className="btn btn-primary">Find Out More!</a>
      </div>
      
  </div>
  )
}

export default Card
import React from 'react'
import Card from './Card'

import firstProjectPhoto from '../../img/cat.jpg';
import secondProjectPhoto from '../../img/mouse.jpg';
import thirdProjectPhoto from '../../img/squirrel.jpg';
import fourtgProjectPhoto from "../../img/sunset.jpg";


const Cards = () => {
    let cardInfo = [
        {title: "Titulo1", image: firstProjectPhoto, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, harum voluptate ad fuga eveniet error."},
        {title: "Titulo2", image: secondProjectPhoto, text: "Bacon ipsum dolor amet kielbasa ground round salami cow. Bresaola jerky pork chop tongue porchetta."},
        {title: "Titulo3", image: thirdProjectPhoto, text: "Ball tip turkey tenderloin tail pork loin, pastrami buffalo boudin ham hock. Corned beef turkey."},
        {title: "Titulo4", image: fourtgProjectPhoto, text: "Cow tenderloin tongue cupim jerky beef ribs chicken buffalo pig jowl kielbasa. Alcatra cow brisket."},
     ]
    return (
    <>
        {cardInfo.map((card) =>{
            return <Card title={card.title} text={card.text} image={card.image}/>
        })}
    </>
  )
}


export default Cards
import React from 'react'
import Card from './Card'



const Cards = () => {
    let cardInfo = [
        {title: "Titulo1", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, harum voluptate ad fuga eveniet error."},
        {title: "Titulo5", text: "Bacon ipsum dolor amet kielbasa ground round salami cow. Bresaola jerky pork chop tongue porchetta."},
        {title: "Titulo3", text: "Ball tip turkey tenderloin tail pork loin, pastrami buffalo boudin ham hock. Corned beef turkey."},
        {title: "Titulo2", text: "Cow tenderloin tongue cupim jerky beef ribs chicken buffalo pig jowl kielbasa. Alcatra cow brisket."},
     ]
    return (
    <>
        {cardInfo.map((card) =>{
            return <Card title={card.title} text={card.text} />
        })}
    </>
  )
}

export default Cards
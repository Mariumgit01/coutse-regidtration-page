import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = ({handleAddCourses, handleTotalPrice, handleCreditHours}) => {
    const [cards, setCard] = useState([]);
    useEffect(()=>{
        fetch('Cards.json')
        .then(res=> res.json())
        .then (data=> setCard(data))
    },[])
    return (
        <div className="md: w-3/4 p-4 grid grid-cols-3 gap-4 ">
            {
                cards.map(card=> <Card 
                    key={card.id}
                    card= {card}
                    handleAddCourses = {handleAddCourses}
                    handleTotalPrice= {handleTotalPrice}
                    handleCreditHours = {handleCreditHours}
                    
                   ></Card>)
            }
        </div>
    );
};

export default Cards;
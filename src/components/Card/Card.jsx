import './Card.css'


const Card = ({card, handleAddCourses,  handleTotalPrice, handleCreditHours}) => {
const {title, image, description,price,credit_hours} = card;
    return (
        <div className='bg-white rounded-lg p-4'>
            <h1 className='text-xl text-center semibold mb-4'>{title}</h1>
            <img id='card-image' src={image} alt="" />
            <p className='mt-4'>{description}</p>
            <div className='flex justify-between mt-4'>
            <span className='text-xl'>$ {price}</span>
            
            <p> Credit : {credit_hours} hrs</p>
            </div>
            <button onClick={()=>{handleAddCourses(card), handleTotalPrice(price), handleCreditHours(credit_hours)}} id='btn-select' className='w-full rounded-2xl text-white text-xl mt-8'>Select</button>
            
        </div>
    );
};

export default Card;
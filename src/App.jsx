
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {
const [courses, setCourse] = useState([]);
const [coursePrice, setPrice] = useState(0);
const [creaditHours, setCreditHours] =useState(0);


const handleAddCourses = card => {
  // console.log(card);
  if(!courses.includes(card)){
    const newAddCourse = [...courses, card];
    setCourse(newAddCourse);
  }
  else{
    alert('course previously added')
  }
}
const handleTotalPrice = (price) => {
  const newAddedPrice = coursePrice + price;
    setPrice(newAddedPrice);
    
}

const handleCreditHours =  (hours) => {
  if(creaditHours < 20){
    const newCreditHours = creaditHours + hours;
    setCreditHours(newCreditHours);
  }
  else if(creaditHours === 20){
    alert('Max Hour added')
  }
}



  return (
    <>
      
     <Header></Header>
     <div className='flex gap-12 mt-4 '>
     <Cards handleAddCourses = {handleAddCourses}
      handleTotalPrice = { handleTotalPrice }
      handleCreditHours = {handleCreditHours}
     
     
     ></Cards>
     <Courses 
     courses ={courses}
     coursePrice={coursePrice}
     creaditHours ={creaditHours}></Courses>
     </div> 
    </>
  )
}

export default App
 
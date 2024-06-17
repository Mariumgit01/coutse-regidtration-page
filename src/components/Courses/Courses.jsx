import Course from "../Course/Course";


const Courses = ({courses, coursePrice,creaditHours}) => {
    return (
            <div className="md: w-1/3 ml-4 mt-4 ">
            <div className="bg-white mb-6 p-6">
                
                        <h2 className="text-blue-600 bold text-2xl ">CreditHour remaining:{20-creaditHours} </h2>
                        <input type="text" name="" id="hour-remain" />
                    <h1 className="text-2xl border-y-2 m-4 p-2">Courses Name</h1>
                    {
                        courses.map((course, idx) => <Course key={idx} course= {course}></Course>)
                    }
                    </div>

                    <div className="mt-6 border-y-2 p-4 bg-white">
                        <h3> Total Price: ${coursePrice}</h3>
                    </div>

                    <div className="bg-white mt-4 p-4">
                        <h3>Total Credit Hours: {creaditHours} hrs</h3>
                    </div>

                    
            </div>
    
    );
};

export default Courses;
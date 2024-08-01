import "./Style/allEducators.css"
import EducatorCards from "../components/AllEducators/EducatorCards"
import axios from "axios"
import {useQuery} from "react-query"
import { useEffect, useState } from "react"
// import NavMember from "../layout/NavMember"

async function getAllEducators(){
    try {
        const result = await axios.get("http://localhost:5000/find/show-all-educators")
        console.log("data here ", result)
        return result.data
    } catch (error) {
        console.log("The problem is here: ", error)
    }
}


function AllEducators() {
  const [enabled, setEnabled] = useState(true)
  const { isPending, error, data } = useQuery({
    queryKey: ['allEducator'],
    queryFn: getAllEducators,
    enabled,
  })

  useEffect(()=>{
    setEnabled(false);
  })
  
  if (isPending) return 'Loading...'
  
  if (error) return 'An error has occurred: ' + error.message
  console.log("The tutors are showing: ", data)
  
  return (
    <div className="all-educator-container" >
      
      <div className="buttons-and-title">
        <div className="button-container">
          <button className={`button tutoringButton`}>Tutoring</button>
          <button className={`button classesButton`}>Classes</button>
        </div>
        <h1 className="title">Educators who tutor in reading:</h1>
      </div>
      
      <div className="filter-and-cards">
        
          <div className="filter-box">
            <div className={`filter-group keyword`}>
              <label htmlFor="keywords">Keyword(s):</label>
              <input className="input" type="text" id="keywords" name="keywords" />
            </div>
            <div className="filter-group">
              <label htmlFor="subject">Subject:</label>
              <select  className="select" id="subject" name="subject">
                <option value="">Select Subject</option>
                {/* Add options here */}
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="class">Class:</label>
              <select  className="select" id="class" name="class">
                <option value="">Select Class</option>
                {/* Add options here */}
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="grade">Grade:</label>
              <select  className="select" id="grade" name="grade">
                <option value="">Select Grade</option>
                {/* Add options here */}
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="age">Age:</label>
              <select  className="select" id="age" name="age">
                <option  value="">Select Age</option>
                {/* Add options here */}
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="payRate">Pay Rate:</label>
              <select className="select"  id="payRate" name="payRate">
                <option  value="">Select Pay Rate</option>
                {/* Add options here */}
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="location">Location:</label>
              <select className="select" id="location" name="location">
                <option value="">Select Location</option>
                {/* Add options here */}
              </select>
            </div>
            <div className="filter-button-container">
              <button className={`button filter-button`}>Filter</button>
            </div>
          </div>
           
          <div className="all-educator-cards">
            {data?.map((educator, index)=> (
              <EducatorCards
              // className="card" 
              key={index}
              name={educator.first_name}
              bio={educator.bio}
              subject={educator.subjects}
              rate={educator.rate}
              id={educator.id}
              />)
            )}
          </div>
      </div>
    </div>
  )
    
}

export default AllEducators


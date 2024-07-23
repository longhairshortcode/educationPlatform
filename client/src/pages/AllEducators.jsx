import "./Style/allEducators.css"
import EducatorCards from "../components/EducatorCards"
import axios from "axios"
import {useQuery} from "react-query"

async function getAllEducators(){
    try {
        const result = await axios.get("http://localhost:5000/find/show-all-tutors")
        return result.data
    } catch (error) {
        console.log("The problem is here: ", error)
    }
}


function AllEducators() {
  const { isPending, error, data } = useQuery({
    queryKey: ['allEducator'],
    queryFn: getAllEducators
  })
  
  if (isPending) return 'Loading...'
  
  if (error) return 'An error has occurred: ' + error.message
  console.log("The tutors are showing: ", data)
  return (
    <div className="all-educator-container">
        <EducatorCards/>
        <EducatorCards/>
        <EducatorCards/>
        <EducatorCards/>
    </div>
    
  )
}

export default AllEducators



{/* <div className="custom-shape-divider-bottom-1721747438">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
      </svg>
    </div> */}
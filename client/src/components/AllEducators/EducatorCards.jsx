
import {Link} from 'react-router-dom'



function EducatorCards({ id,name, bio, subject, rate}) {
  return (
    <Link to={`/educator-profile/${id}`}>
    <div className="educator-card">
      <p>{name}</p>
      <p>{bio}</p>
      <p>{subject}</p>
      <p>{rate}</p>
    </div>
    </Link>
  )
}

export default EducatorCards

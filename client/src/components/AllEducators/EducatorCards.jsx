import { Link } from 'react-router-dom';

function EducatorCards({ id, name, bio, subject, rate }) {
  return (
    <Link to={`/educator-profile/${id}`}>
      <div className="educator-card">
        <div className="left-text">
          <div className="top">
            <div className="name-stars">
              <p className="name">{name}</p>
              <div className="stars-container">
                <p className="stars">*****</p>
                <p className="star-num">(10)</p>
              </div>
            </div>
            <div className="job-location">
              <p>Elementary Teacher in CA, USA</p>
            </div>
          </div>
          <div className="bottom">
            <p className="tutors">Tutors: reading, writing, grammar...</p>
            <p className="teaches">Teaches: reading, writing, grammar...</p>
            <p className="grades">Grades: Tk-6th</p>
            <p className="ages">Ages: 4-12</p>
          </div>
        </div>
        <div className="center-price-button">
          <div className="rate-container">
            <p className="from">from</p>
            <p className="rate">$20{rate}</p>
            <p className="per-hour">per hour</p>
          </div>
          <div className="contact-button-container">
            <button className="contact">Contact</button>
          </div>
        </div>
        <div className="right-image">
          <img src="" alt="Educator" /> {/* Add a src and alt text */}
        </div>
      </div>
    </Link>
  );
}

export default EducatorCards;
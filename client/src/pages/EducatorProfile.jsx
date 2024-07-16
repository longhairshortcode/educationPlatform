import "./Style/dashboard.css";
function EducatorProfile() {
  return (
    <div className="educator-profile">
      <div className="educator-card">
        <p className="educator-card-name">Teacher Name</p>
        <div className="educator-card-img-container">
          <img className="educator-card-img"/>
        </div>
        <p className="educator-card-position">Elementary Teacher</p>
        <p className="educator-card-location">California, USA, Pacific Time Zone</p>
        <div>
          <button className="educator-card-button1">Contact</button>
          <button className="educator-card-button1">Pay</button>
          <button className="educator-card-button1">Review</button>
        </div>
      </div>
      <div className="educator-bio">
        <div className="educator-bio-education">
          <p className="educator-bio-ed"> Education & Certifications</p>
        </div>
        <div className="educator-bio-about">
          <p className="educator-bio-abt"> About</p>      
        </div>
        <div className="educator-bio-taught">
          <p className="educator-bio-grades"> Grades & Subjects Taught</p>
        </div>
      </div>
      <div className="educator-container">
        <div className="educator-left-container">one</div>
        <div className="educator-right-container">two</div>
      </div>
      <div className="educator-availibility"></div>
    </div>
  );
}

export default EducatorProfile;

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
        <div className="educator-card-button-container" >
          <button className="educator-card-button1">Contact</button>
          <button className="educator-card-button1">Pay</button>
          <button className="educator-card-button1">Review</button>
        </div>
      </div>
      <div className="educator-bio">
        <p className="educator-bio-title">BIO</p>
          <div className="educator-bio-containers">  
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
      </div>
      <div className="educator-container">
        <div className="educator-left-container">
          <p className="educator-left-container-title">What I Tutor:</p>
        </div>
        <div className="educator-right-container">
        <p className="educator-right-container-title">What I Teach:</p>
        </div>
      </div>
      <div className="educator-availibility">
      <div className="educator-availibility-left">
          <p className="educator-availibility-session-info">Session Info</p>
        </div>
        <div className="educator-availibility-center">
          <p className="educator-availibility-times">Availibility</p>      
        </div>
        <div className="educator-availibility-right">
          <p className="educator-availibility-rates">Rates</p>
        </div>
      </div>
    </div>
  );
}

export default EducatorProfile;

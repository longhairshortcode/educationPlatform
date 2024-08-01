import "./Style/dashboard.css";
import { useContext } from "react";
import { AuthContext } from "../App";


function EducatorProfile() {
  const { user } = useContext(AuthContext); // Access user from context

  return (
    <div className="educator-profile">
      <div className="educator-card">
        <p className="educator-card-name">{user.name || "Name Not Available"}</p>
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
              <p>I have a BA and Masters in Early Childhood Education</p>
              <p>school certification</p>
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
          <p className="educator-left-container-title">What I Tutor:<span style={{marginLeft:"40%", cursor:"pointer"}} onClick={()=>changeInput}>Edit</span></p>
          <input type="text"  style={{width:"90%", height:"40%", background:"transparent", textDecoration:"none", border:"none"}}/>
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

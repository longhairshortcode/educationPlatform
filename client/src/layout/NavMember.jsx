import style from "./NavMember.module.css"
import {Link} from "react-router-dom"


function NavMember() {
  return (
    <nav className={style.navContainer}>
      <div className={style.logoAndSearchContainer}>
        <div className={style.logoContainer}>
          <div className={style.circlesContainer}>
            <div className={style.circle1}></div>
            <div className={style.circle2}></div>
          </div>
          <p className={style.logoName}>EduTutor</p>
        </div>
        <div className={style.searchContainer}>
          <select id="dropdown" name="options" className={style.dropdown}>
            <option value="" disabled selected hidden className={style.findAJob}>Find Job</option>
            <option value="tutoring" className={style.tutoring}>Tutoring</option>
            <option value="class" className={style.class}>Class</option>
          </select>
        </div>
        
      </div>


      <div className={style.logOutButtonContainer}>
        <div className={style.linkContainer}>
          <Link className={style.navLink} to="/messages">
            <p className={`${style.links} ${style.messages}`}>Messages</p>
          </Link>
          <Link className={style.navLink} to="/">
            <p className={`${style.links} ${style.myAccount}`}>My Account</p>
          </Link>
        </div>
        <button className={style.logOutButton}><Link className={style.logOut}to={"/"}>Log Out</Link></button>
      </div>
      
    </nav>
  )
}

export default NavMember

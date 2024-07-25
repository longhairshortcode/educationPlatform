import style from "./Navbar.module.css"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className={style.navContainer}>
      <div className={style.logoContainer}>
        <div className={style.circlesContainer}>
          <div className={style.circle1}></div>
          <div className={style.circle2}></div>
        </div>
        <p className={style.logoName}>EduTutor</p>
      </div>

      <div className={style.linksContainer}>
        <p className={`${style.links} ${style.about}`}>About</p>
        <p className={`${style.links} ${style.tutoring}`}>Tutoring</p>
        <p className={`${style.links} ${style.classes}`}>Classes</p>
        <Link className={style.navLink} to="/all-educators">
          <p className={`${style.links} ${style.educators}`}>Educators</p>
        </Link>
        <p className={`${style.links} ${style.educators}`}>Pricing</p>
        <p className={`${style.links} ${style.educators}`}>Contact Us</p>
      </div>
      <div className={style.signUpButtonContainer}>
        <button className={style.signUpButton}><Link className={style.createOne}to={"/sign-up"}>Sign Up</Link></button>
      </div>
    </nav>
  )
}

export default Navbar

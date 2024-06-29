import style from "./Navbar.module.css"

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
        <p className={`${style.links} ${style.educators}`}>Educators</p>
        <p className={`${style.links} ${style.educators}`}>Pricing</p>
        <p className={`${style.links} ${style.educators}`}>Contact Us</p>
      </div>
      <div className={style.signUpButtonContainer}>
        <button className={style.signUpButton}>Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar

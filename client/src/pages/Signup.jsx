import style from "./Style/EducatorLogin.module.css"
// import parentImage from "../assets/parentLogin.webp"
import community from "../assets/community.jpg"
import { Link } from "react-router-dom"

function Signup() {
  return (
    <div className={style.componentContainer}>
      <div className={style.leftAndRightContainer}>
        <div className={style.leftContainer}>
            <form className={style.formContainer} /*onSubmit={handleSubmit}*/>
            <div className={style.logoContainer}>
              <div className={style.circlesContainer}>
                <div className={style.circle1}></div>
                <div className={style.circle2}></div>
              </div>
              <p className={style.logoName}>EduTutor</p>
            </div>
            <p className={style.title}>Welcome, <span className={style.parentWelcome}>Educator!</span> <br/> Login to Start Teaching</p>
            <div className={style.emailAndPasswordContainer}>  
              <input
                type="email"
                className={style.email}
                name="email"
                // value={parentLogin.email}
                // onChange={handleChange}
                placeholder="Email"
                required/>

    
              <input
                type="password"
                className={style.password}
                name="password"
                // value={userLogin.password}
                // onChange={handleChange}
                placeholder="Password"
                required/>
            </div>
                <div className={style.forgotContainer}>
                    <p className={style.forgot}>Forget your password? Click <Link className={style.createOne}to={"/sign-up"}>here</Link>.</p>
                </div> 
            
                <div className={style.buttonAndMessage}>
                    <button className={style.loginButton}>Login</button>
                    <p className={style.message}>Don't have an account? Create one <Link className={style.createOne}to={"/sign-up"}>here.</Link></p>
                </div>
            </form>
        </div>
        <div className={style.rightContainer}>
            <img className={style.communityImage} src={community} alt="cartoon of people connecting online from all over the world"/>
        </div>
      </div>

    </div>
  )
}

export default Signup

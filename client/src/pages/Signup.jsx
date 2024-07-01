import style from "./Style/Signup.module.css"
// import parentImage from "../assets/parentLogin.webp"
import community from "../assets/community.jpg"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import axios from "axios"


function Signup() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const result = await axios.post("http://localhost:5000/auth/signup", data)
      console.log("Successfully signed up: ", result)
      if (result.status == 201){
        navigate("/member")
      } 
    } catch (err) {
      console.log("Here is the problem: ", err)
    }
  };

  return (
    <div className={style.componentContainer}>
      <div className={style.leftAndRightContainer}>
        <div className={style.leftContainer}>
            <img className={style.communityImage} src={community} alt="cartoon of people connecting online from all over the world"/>
        </div>
        <div className={style.rightContainer}>
            <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.logoContainer}>
              <div className={style.circlesContainer}>
                <div className={style.circle1}></div>
                <div className={style.circle2}></div>
              </div>
              <p className={style.logoName}>EduTutor</p>
            </div>
            <p className={style.title}>Welcome to our<span className={style.parentWelcome}> Community!</span> <br/> Sign-up to Start Connecting</p>
            <div className={style.emailAndPasswordContainer}>  
             

              <input
                type="text"
                className={style.lastName}
                name="firstName"
                {...register("firstName")}
                placeholder="First Name"
                required/>
            
              <input
                type="text"
                className={style.lastName}
                name="lastName"
                {...register("lastName")}
                placeholder="Last Name"
                required/>
              
              <input
                type="email"
                className={style.email}
                name="email"
                {...register("email")}
                placeholder="Email"
                required/>

    
              <input
                type="password"
                className={style.password}
                name="password"
                {...register("password")}
                placeholder="Password"
                required/>
              
              <input
                type="password"
                className={style.confirmPassword}
                name="confirmPassword"
                {...register("confirmPassword")}
                placeholder="Confirm Password"
                required/>
            </div>
                <div className={style.forgotContainer}>
                    <p className={style.forgot}>Forget your password? Click <Link className={style.createOne}to={"/sign-up"}>here</Link>.</p>
                </div> 
            
                <div className={style.buttonAndMessage}>
                    <button type="submit" className={style.loginButton}>Join</button>
                    <p className={style.message}>Don't have an account? Create one <Link className={style.createOne}to={"/sign-up"}>here.</Link></p>
                </div>
            </form>
        </div>
      </div> 
    </div>
  )
}

export default Signup
import style from "./Style/EducatorLogin.module.css"
import {DevTool} from "@hookform/devtools"
// import parentImage from "../assets/parentLogin.webp"
import teacher from "../assets/teacher.jpg"
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"
import axiosInstance from "../utils/axiosRequest"

function EducatorLogin() {
  const navigate = useNavigate();
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const {errors} = formState;

  const onSubmit = async (data) => {
    console.log("Here is the data: ", data);
    try {
      const result = await axiosInstance.post("/auth/loginEducator", data);
      console.log("Successfully logged in: ", result);
      if (result.status === 200) {
        navigate("/member");
      }
    } catch (err) {
      console.log("Here is the problem:", err);
    }
  };


  return (
    <div className={style.componentContainer}>
      <div className={style.leftAndRightContainer}>
        <div className={style.leftContainer}>
          <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={style.logoContainer}>
              <div className={style.circlesContainer}>
                <div className={style.circle1}></div>
                <div className={style.circle2}></div>
              </div>
              <p className={style.logoName}>EduTutor</p>
            </div>
            <p className={style.title}>Welcome, <span className={style.parentWelcome}>Educator!</span> <br/> Login to Start Teaching</p>
            <div className={style.emailAndPasswordContainer}>  
            <div className={style.formControl}>
                <label htmlFor="email" className={style.emailLabel}>
                  Email
              <input
                type="email"
                id="email"
                className={style.email}
                {...register("email", {
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Invalid email format',
                  },
                  required: "Email is required"
                })}
                />
                </label>
                {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                </div>

                <div className={style.formControl}>
                  <label htmlFor="password" className={style.passwordLabel}>
                  Password
              <input
                type="password"
                className={style.password}
                id="password"
                {...register("password", { 
                  required: "Password is required." 
                })}
              />
              </label>
              {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
              </div>
            </div>
            <div className={style.forgotContainer}>
              <p className={style.forgot}>Forget your password? Click <Link className={style.createOne}to={"/sign-up"}>here</Link>.</p>
            </div>
            <div className={style.buttonAndMessage}>
              <button className={style.loginButton}>Login</button>
              <p className={style.message}>Don't have an account? Create one <Link className={style.createOne}to={"/sign-up"}>here.</Link></p>
            </div>
          </form>
          <DevTool control={control}/>
        </div>
        <div className={style.rightContainer}>
          <img className={style.teacherImage} src={teacher} alt="Asian teacher working on laptop from classroom"/>
        </div>
      </div>
    </div>
  )
}

export default EducatorLogin

import style from "./Style/ParentLogin.module.css";
// import parentImage from "../assets/parentLogin.webp"
import parent from "../assets/parentLogin.webp";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosRequest";

function ParentLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Here is the data: ", data);
    try {
      const result = await axiosInstance.post("/auth/login", data);
      console.log("Successfully logged in: ", result);
      if (result.status === 201) {
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
            <p className={style.title}>Welcome, <span className={style.parentWelcome}>Parent.</span> <br/> Login to Start Learning</p>
            <div className={style.emailAndPasswordContainer}>
            {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
              <input
                type="email"
                className={style.email}
                name="email"
                {...register("email", { required: "Email is mandatory." })}
                placeholder="Email"
              />
             
             {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
              <input
                type="password"
                className={style.password}
                name="password"
                {...register("password", { required: "Password is required." })}
                placeholder="Password"
              />
              
            </div>
            <div className={style.forgotContainer}>
              <p className={style.forgot}>Forget your password? Click <Link className={style.createOne} to={"/reset-password"}>here</Link>.</p>
            </div>
            <div className={style.buttonAndMessage}>
              <button type="submit" className={style.loginButton}>Login</button>
              <p className={style.message}>Don't have an account? Create one <Link className={style.createOne} to={"/sign-up"}>here.</Link></p>
            </div>
          </form>
        </div>
        <div className={style.rightContainer}>
          <img className={style.parentImage} src={parent} alt="Parent Login" />
        </div>
      </div>
    </div>
  );
}

export default ParentLogin;




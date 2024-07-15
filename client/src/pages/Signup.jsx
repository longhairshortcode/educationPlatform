import style from "./Style/Signup.module.css";
import { DevTool } from "@hookform/devtools";
// import parentImage from "../assets/parentLogin.webp"
import community from "../assets/community.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosRequest.js";

function Signup() {
  const navigate = useNavigate();
  const form = useForm(
    /*<FormValues>*/ {
      defaultValues: {
        firstName: "Batwoman",
        lastName: "Learner",
        email: "batwoman@email.com",
        password: "",
        confirmPassword: "",
      },
    }
  );
  const { register, control, handleSubmit, formState, getValues } = form;
  const { errors } = formState;
  // const {name, ref, onChange, onBlur} = register("firstName")

  //QQQQ Have to commend this out and data : FormValues since ot TS file, any work-around?
  // type FormValues = {
  //   role: string;
  //   firstName: string;
  //   lastName: string;
  //   email: string;
  //   password: string;
  //   confirmPassword: string;
  // }

  const onSubmit = async (data /*: FormValues*/) => {
    try {
      const result = await axiosInstance.post("/auth/signup", data);
      console.log("Successfully signed up: ", result);
      if (result.status == 201 && data.role == "educator") {
        navigate("/educator-profile");
      } else if (result.status == 201 && data.role == "parent") {
        navigate("/parent-profile");
      }
    } catch (err) {
      console.log("Here is the problem: ", err);
    }
  };

  // Validation function to check password match
  const validatePasswordMatch = (value) => {
    const { password } = getValues();
    return value === password || "Passwords do not match";
  };

  return (
    <div className={style.componentContainer}>
      <div className={style.leftAndRightContainer}>
        <div className={style.leftContainer}>
          <img
            className={style.communityImage}
            src={community}
            alt="cartoon of people connecting online from all over the world"
          />
        </div>
        <div className={style.rightContainer}>
          <form
            className={style.formContainer}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className={style.logoContainer}>
              <div className={style.circlesContainer}>
                <div className={style.circle1}></div>
                <div className={style.circle2}></div>
              </div>
              <p className={style.logoName}>EduTutor</p>
            </div>
            <p className={style.title}>
              Welcome to our
              <span className={style.parentWelcome}>
                {" "}
                Community!
              </span> <br /> Sign-up to Start Connecting
            </p>
            <div className={style.emailAndPasswordContainer}>
              <div className={style.formControl}>
                <label className={style.selectRoleLabel}>
                  Select Your Role:
                </label>
                <div className={style.parentAndEducatorContainer}>
<<<<<<< HEAD
                <label htmlFor="parentRole" className={style.parentLabel}>
                  Parent
                  <input
                    type="radio"
                    id="parentRole"
                    value={"parent"}
                    className={style.parentRole}
                    {...register("role")}
                  />
                </label>
              {/* </div> */}
              {/* <div className={style.formControl}> */}
                <label htmlFor="educatorRole" className={style.educatorLabel}>
                  Educator
                  <input
                    type="radio"
                    id="educatorRole"
                    value={"educator"}
                    className={style.educatorRole}
                    {...register("role", { 
                      required: 'Please select your role' 
                    })}
                  />
                </label>
                <p className={style.error}>{errors.role?.message}</p>
        
              </div>
||||||| aba780f
                <label htmlFor="parentRole" className={style.parentLabel}>
                  Parent
                  <input
                    type="radio"
                    id="parentRole"
                    className={style.parentRole}
                    {...register("role")}
                  />
                </label>
              {/* </div> */}
              {/* <div className={style.formControl}> */}
                <label htmlFor="educatorRole" className={style.educatorLabel}>
                  Educator
                  <input
                    type="radio"
                    id="educatorRole"
                    className={style.educatorRole}
                    {...register("role", { 
                      required: 'Please select your role' 
                    })}
                  />
                </label>
                <p className={style.error}>{errors.role?.message}</p>
        
              </div>
=======
                  <label htmlFor="parentRole" className={style.parentLabel}>
                    Parent
                    <input
                      type="radio"
                      id="parentRole"
                      value={"parent"}
                      className={style.parentRole}
                      {...register("role")}
                    />
                  </label>
                  {/* </div> */}
                  {/* <div className={style.formControl}> */}
                  <label htmlFor="educatorRole" className={style.educatorLabel}>
                    Educator
                    <input
                      type="radio"
                      id="educatorRole"
                      value={"educator"}
                      className={style.educatorRole}
                      {...register("role", {
                        required: "Please select your role",
                      })}
                    />
                  </label>
                  <p className={style.error}>{errors.role?.message}</p>
                </div>
>>>>>>> cd3e8d8f5052e9652abfc9680e79effb8c681a4e
              </div>
              <div className={style.formControl}>
                <label htmlFor="firstName" className={style.firstNameLabel}>
                  First Name
                  <input
                    type="text"
                    id="firstName"
                    className={style.firstName}
                    {...register("firstName", {
                      required: "First name is required",
                      minLength: {
                        value: 2,
                        message: "First name must be at least 2 letters.",
                      },
                    })}
                  />
                </label>
                <p className={style.error}>{errors.firstName?.message}</p>
              </div>
              <div className={style.formControl}>
                <label htmlFor="lastName" className={style.lastNameLabel}>
                  Last Name
                  <input
                    type="text"
                    id="lastName"
                    className={style.lastName}
                    {...register("lastName", {
                      required: "Last name is required",
                      minLength: {
                        value: 2,
                        message: "Last name must be at least 2 letters long",
                      },
                    })}
                  />
                </label>
                <p className={style.error}>{errors.lastName?.message}</p>
              </div>
              <div className={style.formControl}>
                <label htmlFor="email" className={style.emailLabel}>
                  Email
                  <input
                    type="email"
                    id="email"
                    className={style.email}
                    {...register("email", {
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email format",
                      },
                      required: "Email is required",
                    })}
                  />
                </label>
                <p className={style.error}>{errors.email?.message}</p>
              </div>
              <div className={style.formControl}>
                <label htmlFor="password" className={style.passwordLabel}>
                  Password
                  <input
                    type="password"
                    id="password"
                    className={style.password}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                  />
                </label>
                <p className={style.error}>{errors.password?.message}</p>
              </div>
              <div className={style.formControl}>
                <label
                  htmlFor="confirmPassword"
                  className={style.confirmPasswordLabel}
                >
                  Confirm Password
                  <input
                    type="password"
                    id="confirmPassword"
                    className={style.confirmPassword}
                    {...register("confirmPassword", {
                      required: "Confirmation password is required",
                      validate: {
                        matchesPassword: validatePasswordMatch,
                      },
                    })}
                  />
                </label>
                <p className={style.error}>{errors.confirmPassword?.message}</p>
              </div>
            </div>
            <div className={style.buttonAndMessage}>
              <button type="submit" className={style.loginButton}>
                Join
              </button>
              <p className={style.message}>
                Don't have an account? Create one{" "}
                <Link className={style.createOne} to={"/sign-up"}>
                  here.
                </Link>
              </p>
            </div>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
}

export default Signup;

//   return (
//     <div className={style.componentContainer}>
//       <div className={style.leftAndRightContainer}>
//         <div className={style.leftContainer}>
//             <img className={style.communityImage} src={community} alt="cartoon of people connecting online from all over the world"/>
//         </div>
//         <div className={style.rightContainer}>
//             <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)} noValidate>
//             <div className={style.logoContainer}>
//               <div className={style.circlesContainer}>
//                 <div className={style.circle1}></div>
//                 <div className={style.circle2}></div>
//               </div>
//               <p className={style.logoName}>EduTutor</p>
//             </div>
//             <p className={style.title}>Welcome to our<span className={style.parentWelcome}> Community!</span> <br/> Sign-up to Start Connecting</p>
//             <div className={style.emailAndPasswordContainer}>
//             {/* Is below label correct? QQQQQQQQQ */}
//             <label className={style.selectRoleLabel}>Select Your Role:</label>
//               <div className={style.parentRadioLable}>
//               <label htmlFor="parentRole" className={style.parentLable}>Parent
//               {/* //QQQQQ is the input props correct? especially id&register for parent and educator role */}
//               <input
//                 type="radio"
//                 id="parentRole"
//                 className={style.parentRole}
//                 {...register("role")}
//                 value="parent"
//                 /></label>
//               </div>
//               <div className={style.educatorRadioLabel}>
//               <label htmlFor="educatorRole" className={style.educatorLabel}>Eductor
//               <input
//                 type="radio"
//                 id="educatorRole"
//                 className={style.educatorRole}
//                 {...register("role", {
//                   required: 'Please select your role'
//                 })}
//                 value="educator"
//                 /></label>
//                 <p className={style.error}>{errors.role?.message}</p>
//               </div>
//               <label htmlFor="firstName" className={style.firstNameLabel}>First Name
//               <input
//                 type="text"
//                 id="firstName"
//                 className={style.firstName}
//                 {...register("firstName", {
//                   required: 'First name is required'
//                 })}

//                 />
//               </label>
//               <p className={style.error}>{errors.firstName?.message}</p>
//               <label htmlFor="lastName" className={style.lastNameLabel}>Last Name
//               <input
//                 type="text"
//                 id="lastName"
//                 className={style.lastName}

//                 {...register("lastName", {
//                   required: 'Last name is required'
//                 })}
//                 />
//               </label>
//               <p className={style.error}>{errors.lastName?.message}</p>
//               <label htmlFor="email" className={style.emailLabel}>
//                 Email
//               <input
//                 type="email"
//                 id="email"
//                 className={style.email}

//                 {...register("email", {
//                   pattern: {
//                     value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
//                     message: 'Invalid email format',
//                   },
//                   required: "Email is required"
//                 })}
//                 />
//                 </label>
//                 <p className={style.error}>{errors.email?.message}</p>

//               <label htmlFor="password" className={style.passwordLabel}>
//                 Password
//               <input
//                 type="password"
//                 id="password"
//                 className={style.password}

//                 {...register("password", {
//                   required: "Password is required"
//                 })}
//                 />
//                 </label>
//                 <p className={style.error}>{errors.password?.message}</p>
//               <label htmlFor="confirmPassword" className={style.confirmPasswordLabel}>
//                 Confirm Password
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 className={style.confirmPassword}

//                 {...register("confirmPassword", {
//                   required: 'Confirmation password is required',
//                 })}
//                 />
//                 </label>
//                 <p className={style.error}>{errors.confirmPassword?.message}</p>
//             </div>
//                 <div className={style.forgotContainer}>
//                     <p className={style.forgot}>Forget your password? Click <Link className={style.createOne}to={"/sign-up"}>here</Link>.</p>
//                 </div>

//                 <div className={style.buttonAndMessage}>
//                     <button type="submit" className={style.loginButton}>Join</button>
//                     <p className={style.message}>Don't have an account? Create one <Link className={style.createOne}to={"/sign-up"}>here.</Link></p>
//                 </div>
//             </form>
//             <DevTool control={control}/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Signup

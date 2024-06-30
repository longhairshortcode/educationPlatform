import style from "./Hero.module.css"
import zoom from "../../../assets/zoom.jpg"
import { useNavigate } from "react-router-dom"

function Hero() {
const navigate = useNavigate();

const handleEducatorLoginClick = () => {
  navigate('/educator-login');
};

const handleParentLoginClick = () => {
  navigate('/parent-login');
};

  return (
    <div className={style.componentContainer}>
        <div className={style.textContainer}>
            <h2 className={style.question}>Ready for quality tutoring or to learn something new and educational?</h2>
            <h1 className={style.title}>Custom <span className={style.instruction}>Instruction</span> For <br/><span className={style.children}>Children </span> By Real <span className={style.educators}>Educators</span></h1>
            <div className={style.buttonsContainer}> 
                <button className={style.parentLoginButton}  onClick={handleParentLoginClick}>PARENT LOGIN</button>
                <button className={style.educatorLoginButton} onClick={handleEducatorLoginClick}>EDUCATOR LOGIN</button>
            </div>
        </div>
        <div className={style.subjectsContainer}>
          <img className={style.zoom} src={zoom}/>
        </div>
    </div>
  )
}

export default Hero

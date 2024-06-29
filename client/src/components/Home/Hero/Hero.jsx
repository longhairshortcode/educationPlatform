import style from "./Hero.module.css"

function Hero() {
  return (
    <div className={style.componentContainer}>
        <div className={style.leftAndRightContainer}>
        <div className={style.leftContainer}>
            <h2 className={style.question}>Ready for quality tutoring or to learn something new and educational?</h2>
            <h1 className={style.title}>Custom <span className={style.instruction}>Instruction</span> for <span className={style.children}>Children </span> By Real <span className={style.educators}>Educators</span></h1>
            <div className={style.buttonsContainer}> 
                <button className={style.parentLoginButton}>Get a Free Account</button>
                <button className={style.educatorLoginButton}>View Memberships</button>
            </div>
        </div>
        <div className={style.rightImageContainer}>
            <img></img>
        </div>
        </div>
    </div>
  )
}

export default Hero

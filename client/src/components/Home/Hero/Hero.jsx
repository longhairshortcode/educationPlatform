import style from "./Hero.module.css"

function Hero() {
  return (
    <div className={style.componentContainer}>
        <div className={style.leftAndRightContainer}>
        <div className={style.leftContainer}>
            <h1 className={style.title}>Help your child thrive in reading</h1>
            <p className={style.subTitle}>Support you child as they discover a new learning journey with ReadyReader</p>
            <div className={style.twoButtonsContainer}>
                <div className={style.accountButton}>Get a Free Account</div>
                <div className={style.membershipButton}>View Memberships</div>
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

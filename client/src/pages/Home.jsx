import style from "./Style/Home.module.css"
import Hero from "../components/Home/Hero/Hero.jsx"


function Home() {
  return (
    <div className={style.componentContainer}>
   
      <Hero/>
    </div>
  )
}

export default Home

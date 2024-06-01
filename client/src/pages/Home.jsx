import style from "./Style/Home.module.css"
import Hero from "../components/Home/Hero/Hero.jsx"
import Navbar from "../layout/Navbar.jsx"

function Home() {
  return (
    <div className={style.componentContainer}>
      <Navbar/>
      <Hero/>
      <p className={style.sup}>hi</p>
    </div>
  )
}

export default Home

import style from "./Navbar.module.css"

function Navbar() {
  return (
    <nav className={style.navContainer}>
      <div className={style.leftLogoAndLinksContainer}>
        <img alt="logo"/>
        <div className={style.threeDDContainers}>
            <p>Parents</p>
            <p>Teachers</p>
            <p>Games</p>
        </div>
      </div>
      <div className={style.righttLoginAndBuyContainer}>
            <p>Log in</p>
            <div className={style.buyButton}>
                Buy Membership
            </div>
      </div>
    </nav>
  )
}

export default Navbar

import style from "./Account.module.css"

function Account() {
  return (
      <div className={style.accountContainer}>
        <div className={style.accountBox}>Messages</div>
        <div className={style.accountBox}>Reviews</div>
      </div>  
  )
}

export default Account

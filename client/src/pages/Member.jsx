import style from "./Style/Member.module.css"
import NavMember from "../layout/NavMember"
import Account from "../components/Member/Account"


function Member() {
  return (
    <div className={style.memberContainer}>
      <NavMember/>
      <Account/>
    </div>
  )
}

export default Member

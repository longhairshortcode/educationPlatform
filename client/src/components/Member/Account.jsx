import style from "./Account.module.css"

function Account() {
    return (
      <div className={style.accountContainer}>
        <div className={style.dropdownContainerAndImage}>
            <div className={style.dropdownContainer}>
               <h1 className={style.hello}>Hello, Ms. Shine</h1>
               <select id="dropdown" name="options" className={style.dropdown}>
                    <option value="" disabled selected hidden className={style.profileOptions}>PROFILE OPTIONS</option>
                    <option value="editProfile" className={style.editProfile}>EDIT PROFILE</option>
                    <option value="viewProfile" className={style.viewProfile}>VIEW PROFILE</option>
                </select>
            </div>
            <div className={style.profilePicContainer}>
                <image className={style.profilePic}>PIC</image>
            </div> 
        </div>
        <div className={style.accountSubBox}>
            <div className={style.accountSubBoxLeft}>
                <p className={`${style.paragraphs} ${style.manage}`}>MANAGE <br/> EDUCATOR ACCOUNT</p>
            </div>
            <div className={style.accountSubBoxRight}>
                <p className={`${style.paragraphs} ${style.start}`}>START SESSION</p>
            </div>
        </div>
        <div className={style.accountBox}>
            <p className={style.paragraphs}>MESSAGES</p>
        </div>
        <div className={`${style.accountBox} ${style.reviewsBox}`}>
            <p className={style.paragraphs}>REVIEWS</p>
        </div>
      </div>
    );
  }
  
  export default Account;
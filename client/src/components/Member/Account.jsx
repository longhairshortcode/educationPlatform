import style from "./Account.module.css"
import { BsEnvelopeHeart } from "react-icons/bs";
import { BiHappyBeaming } from "react-icons/bi";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";

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
                <Link to="/manage-educator" className={`${style.paragraphs} ${style.manage}`}>MANAGE <br/> EDUCATOR ACCOUNT <br/><MdManageAccounts className={style.black} /></Link>
            </div>
            <div className={style.accountSubBoxRight}>
                <Link className={`${style.paragraphs} ${style.start}`}>START SESSION <br/><IoPeopleCircleSharp className={style.black} /></Link>
            </div>
        </div>
        <div className={style.accountBox}>
            <Link to="/messages" className={style.paragraphs}>MESSAGES <br/><BsEnvelopeHeart className={style.black}/></Link>
            
        </div>
        <div className={`${style.accountBox} ${style.reviewsBox}`}>
            <Link to="/reviews" className={style.paragraphs}>REVIEWS <br/><BiHappyBeaming className={style.black} /></Link>

        </div>
      </div>
    );
  }
  
  export default Account;
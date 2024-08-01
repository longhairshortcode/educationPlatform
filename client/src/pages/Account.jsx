import style from "./Style/Account.module.css"
import { BsEnvelopeHeart } from "react-icons/bs";
import { BiHappyBeaming } from "react-icons/bi";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../App";
import AccountEducator from "./AccountEducator"
import AccountParent from "./AccountParent"


function Account() {
    const navigate = useNavigate();
    const { user, userRole } = useContext(AuthContext); // Use AuthContext to get the user data

    // function handleDropDownChange(e) {
    //     const value = e.target.value;
    //     if (value) {
    //         navigate(value.replace(":id", user.id));
    //     }

    // }

    // useEffect(()=>{
    //     console.log("This is user: ", user)
    //     console.log("This is user name: ", user.name)
    // }, [user])

    // const isEducator = user.role === 'educator'; // Assuming user.role is set correctly


    return (
        <>
        {userRole === 'educator' && <AccountEducator />}
        {userRole === 'parent' && <AccountParent />}
    </>
    );
  }
  
  export default Account;
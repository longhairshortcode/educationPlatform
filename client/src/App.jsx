
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import EducatorLogin from "./pages/EducatorLogin.jsx";
import ParentLogin from "./pages/ParentLogin.jsx";
import Signup from "./pages/Signup.jsx";
import Member from "./pages/Member.jsx";
import EducatorProfile from "./pages/EducatorProfile.jsx";
import ParentProfile from "./pages/ParentProfile.jsx";
import AllEducators from "./pages/AllEducators.jsx"
import Reviews from "./pages/Reviews.jsx"
import Messages from "./pages/Messages.jsx"
import ManageEducator from "./pages/ManageEducator.jsx"
import ManageParent from "./pages/ManageParent.jsx"
import Navbar from "./layout/Navbar.jsx"
import { useState } from "react";


function App() {
  // Example state to track user login status and role
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'educator' or 'parent'

  // Logic to determine which nav component to render
  const renderNavbar = () => {
    if (isLoggedIn) {
      return <NavMember userRole={userRole} />;
    } else {
      return <Navbar />;
    }
  };

  return (
    <>
    {renderNavbar()}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/educator-login" element={<EducatorLogin />} />{" "}
        <Route path="/all-educators" element={<AllEducators />} />{" "}
        {/* Add the new route */}
        <Route path="/parent-login" element={<ParentLogin />} />{" "}
        {/* Add the new route */}
        <Route path="/sign-up" element={<Signup />} /> {/* Add the new route */}
        <Route path="/member" element={<Member />} /> {/* Add the new route */}
        <Route path="/educator-profile/:id" element={<EducatorProfile />} />{" "}
        <Route path="/parent-profile/:id" element={<ParentProfile />} />{" "}
        <Route path="/reviews" element={<Reviews />} />{" "}
        <Route path="/messages" element={<Messages />} />{" "}
        <Route path="/manage-educator-account" element={<ManageEducator/>} />{" "}
        <Route path="/manage-parent-account" element={<ManageParent/>} />{" "}

        {/* Add the new route */}
      </Routes>
    </>
  );
}
export default App;

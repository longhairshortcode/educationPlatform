import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import Home from "./pages/Home.jsx";
import EducatorLogin from "./pages/EducatorLogin.jsx";
import ParentLogin from "./pages/ParentLogin.jsx";
import Signup from "./pages/Signup.jsx";
import Account from "./pages/Account.jsx";
import EducatorProfile from "./pages/EducatorProfile.jsx";
import ParentProfile from "./pages/ParentProfile.jsx";
import AllEducators from "./pages/AllEducators.jsx";
import Reviews from "./pages/Reviews.jsx";
import Messages from "./pages/Messages.jsx";
import ManageEducator from "./pages/ManageEducator.jsx";
import ManageParent from "./pages/ManageParent.jsx";
import Error from "./pages/Error.jsx";
import Navbar from "./layout/Navbar.jsx";
import NavMember from "./layout/NavMember.jsx";
import { useState } from "react";

function App() {
  // Example state to track user login status and role
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'educator' or 'parent'
  const location = useLocation();

  // Define paths that should render NavMember
  const pathsWithNavMember = [
    "/account",
    "/educator-profile/:id",
    "/parent-profile/:id",
    "/all-educators",
    "/reviews",
    "/messages",
    "/manage-educator-account",
    "/manage-parent-account",
  ];

  // Logic to determine which nav component to render
  const renderNavbar = () => {
    if (location.pathname === "/") {
      return <Navbar />;
    } else if (pathsWithNavMember.some(path => matchPath(path, location.pathname))) {
      return <NavMember userRole={userRole} />;
    } else {
      return null; // No navbar for login/signup and error pages
    }
  };

  return (
    <>
      {renderNavbar()}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/educator-login" element={<EducatorLogin />} />
        <Route path="/all-educators" element={<AllEducators />} />
        <Route path="/parent-login" element={<ParentLogin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/educator-profile/:id" element={<EducatorProfile />} />
        <Route path="/parent-profile/:id" element={<ParentProfile />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/manage-educator-account" element={<ManageEducator />} />
        <Route path="/manage-parent-account" element={<ManageParent />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import Home from "./pages/Home.jsx";
import EducatorLogin from "./pages/EducatorLogin.jsx";
import ParentLogin from "./pages/ParentLogin.jsx";
import Signup from "./pages/Signup.jsx";
import Account from "./pages/Account.jsx";
// import EducatorProfile from "./pages/EducatorProfile.jsx";
// import ParentProfile from "./pages/ParentProfile.jsx";
import AllEducators from "./pages/AllEducators.jsx";
import Reviews from "./pages/Reviews.jsx";
import Messages from "./pages/Messages.jsx";
import ManageEducator from "./pages/ManageEducator.jsx";
import ManageParent from "./pages/ManageParent.jsx";
import Error from "./pages/Error.jsx";
import Navbar from "./layout/Navbar.jsx";
import NavMember from "./layout/NavMember.jsx";
import Profile from "./pages/Profile.jsx";
import { useState, createContext } from "react";

export const AuthContext = createContext()

function App() {

  // Example state to track user login status and role
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'educator' or 'parent'
  const [user, setUser] = useState({
    email: "",
    first_name: "",
    last_name: "",
    id: "", // user ID
  });
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
    <AuthContext.Provider value={{ user, userRole, setUser, setUserRole  }}>
      {renderNavbar()}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/educator-login" element={<EducatorLogin />} />
        <Route path="/all-educators" element={<AllEducators />} />
        <Route path="/parent-login" element={<ParentLogin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/account" element={<Account userId={user.id}/>} />
        <Route path="/profile/:id" element={<Profile userRole={userRole} />} /> {/* Combined profile route */}
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/manage-educator-account" element={<ManageEducator />} />
        <Route path="/manage-parent-account" element={<ManageParent />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
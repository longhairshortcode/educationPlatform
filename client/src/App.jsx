
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import EducatorLogin from "./pages/EducatorLogin.jsx";
import ParentLogin from "./pages/ParentLogin.jsx";
import Signup from "./pages/Signup.jsx";
import Member from "./pages/Member.jsx";
import EducatorProfile from "./pages/EducatorProfile.jsx";
import ParentProfile from "./pages/ParentProfile.jsx";
import AllEducators from "./pages/AllEducators.jsx"


function App() {


  return (
    <>
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

        {/* Add the new route */}
      </Routes>
    </>
  );
}
export default App;

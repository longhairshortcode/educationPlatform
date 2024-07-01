import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import EducatorLogin from "./pages/EducatorLogin.jsx"
import ParentLogin from "./pages/ParentLogin.jsx"
import Signup from "./pages/Signup.jsx"
import Member from "./pages/Member.jsx"

function App() {
d

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path="/educator-login" element={<EducatorLogin />} /> {/* Add the new route */}
        <Route path="/parent-login" element={<ParentLogin />} /> {/* Add the new route */}
        <Route path="/sign-up" element={<Signup />} /> {/* Add the new route */}
        <Route path="/member" element={<Member />} /> {/* Add the new route */}
      </Routes>
    </>
  )
}

export default App

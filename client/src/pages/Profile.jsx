import { useParams } from "react-router-dom";
import EducatorProfile from "./EducatorProfile.jsx";
import ParentProfile from "./ParentProfile.jsx";

function Profile({ userRole }) {
  const { id } = useParams();

  return (
    <div>
      {userRole === "educator" && <EducatorProfile id={id} />}
      {userRole === "parent" && <ParentProfile id={id} />}
      {!userRole && <p>Loading...</p>} {/* Or a redirect if userRole is not defined */}
    </div>
  );
}

export default Profile;

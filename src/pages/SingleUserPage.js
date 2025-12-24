import { getUserById } from "../services/API";
import SingleUser from "../components/SingleUser";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

function SingleUserPage() {
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  async function fetchUser() {
    const data = await getUserById(id);
    setUserData(data.data); // 
  }
 useEffect(() => {
     fetchUser();
  }, [id]);

  return (
    <div>
      <SingleUser userData={userData} />
    </div>
  );
}

export default SingleUserPage;

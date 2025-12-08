import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to /users page
    navigate("/users");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleButtonClick}>Go to Users Page</button>
    </div>
  );
}

export default HomePage;

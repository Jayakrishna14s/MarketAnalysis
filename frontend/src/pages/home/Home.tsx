import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    async function check() {
      const token = localStorage.getItem("token");
      // console.log(token);
      console.log(BACKEND_URL + "/user/check");
      // console.log(`Bearer ${token}`);
      try {
        const response = await axios.get(BACKEND_URL + "/user/check", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
      } catch (error) {
        // window.location.href = "/login";
      }
    }

    check();
  }, []);

  const logout = () => {
    console.log("logged out");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div>
      Your are hero!!! <br /> <br />
      <button onClick={logout} className="py-4 px-8 bg-red-500 rounded-lg">
        Logout
      </button>
    </div>
  );
};

export default Home;

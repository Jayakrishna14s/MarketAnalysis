import axios from "axios";

function Login() {
  async function validate() {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    const data = {
      username: "Jayakrishna",
      password: "Krishna@2005",
    };

    const response = await axios.post(BACKEND_URL + "/auth/login", data);

    console.log(response.data);
    localStorage.setItem("token", response.data);
    // console.log(localStorage.getItem("token"));

    window.location.href = "/home";
  }

  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      <input
        id="username"
        type="text"
        name="username"
        className="h-20 w-[90%] px-8 text-xl text-center border-2 border-black"
        placeholder="Enter your username"
      />
      <input
        id="password"
        type="password"
        name="password"
        className="h-20 w-[90%] px-8 text-xl text-center border-2 border-black"
        placeholder="Enter your password"
      />

      <br />
      <button
        onClick={validate}
        className="border-2 border-gray-500 rounded py-4 px-8 hover:scale-105 transition duration-1000 w-[90%]"
      >
        Validate
      </button>
    </div>
  );
}

export default Login;

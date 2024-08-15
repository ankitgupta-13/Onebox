import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.svg";
import logo from "../assets/logoName.svg";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async () => {
    window.location.href = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${window.location.origin}`;
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="h-screen">
      <div className="flex justify-center p-6">
        <img src={logo} alt="not found" className="h-10" />
      </div>
      <div className="flex justify-center items-center h-5/6">
        <div className="bg-gray-700 flex flex-col items-center gap-4 px-10 py-6">
          <div className="">Create new account</div>
          <div className="flex gap-3 cursor-pointer border-2 py-2 px-6 rounded-md">
            <img src={google} alt="not found" />
            <span onClick={handleLogin}>Sign Up with Google</span>
          </div>
          <button>Create an Account</button>
          <div className="flex gap-2">
            <p>Already have an account?</p>
            <span>Sign in</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

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
      navigate("/onebox");
    }
  }, []);

  return (
    <div className="h-screen bg-[var(--sidebar-background-color)]">
      <div className="flex justify-center p-6">
        <img src={logo} alt="not found" className="h-10" />
      </div>
      <div className="flex justify-center items-center h-5/6">
        <div className="bg-[var(--header-background-color)] flex flex-col items-center gap-6 px-16 py-8 rounded-md">
          <div className="">Create new account</div>
          <div className="flex gap-3 cursor-pointer border-2 border-gray-500 py-2 px-6 rounded-md">
            <img src={google} alt="not found" />
            <span onClick={handleLogin}>Sign Up with Google</span>
          </div>
          <button className="bg-blue-500 px-4 py-2 rounded-md font-bold text-sm">
            Create an Account
          </button>
          <div className="flex gap-2 text-[var(--secondary-text-color)]">
            <p>Already have an account?</p>
            <span>Sign in</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

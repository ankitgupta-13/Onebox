import { login } from "../api/auth.api";

const Login = () => {
  const handleLogin = async () => {
    try {
      const response = await login();
      console.log(response);
    } catch (error) {}
  };
  return (
    <div className="flex justify-center items-center">
      <div className="bg-gray-700">
        <div>Create new account</div>
        <div>Google</div>
        <button>Create an Account</button>
        <p onClick={handleLogin}>Already have an account? Sign in</p>
      </div>
    </div>
  );
};

export default Login;

// pages/Login.jsx
import { useState } from "react";
import loginBg from "../../assets/undraw_online-community_3o0l.svg";
import Input from "../../components/ui/Input";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full lg:w-200 mx-auto mt-10 flex lg:flex-row flex-col  items-center lg:gap-10 h-screen lg:h-130 rounded-md overflow-hidden backdrop-blur-md">
      <div className="bg-white">
        <div className="w-full h-fit lg:w-100 lg:h-100 flex items-center justify-center"> 
          <img src={loginBg} alt="image" />
        </div>
      </div>

      <div className="bg-gray-50 h-full w-full p-5 lg:p-10 flex flex-col gap-5 items-start lg:justify-center">
        <div className="mb-5">
          <h1 className="lg:text-3xl md:text-2xl text-lg font-bold">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500">
            Login and gain full access to thousands of eciting tutoring and
            mentorship opportunities.
          </p>
        </div>

        <div className="flex w-full justify-between">
          <button className="text-sm py-1 px-4 rounded-sm bg-purple-800 text-white">
            I'm a teacher
          </button>
          <button className="text-sm py-1 px-4 rounded-sm border-2 border-purple-700 text-purple-700 active:scale-95 transition cursor-pointer">
            I'm a student
          </button>
        </div>

        <form className="w-full lg:w-full  flex flex-col gap-3">
          <Input
            label="Email"
            type="email"
            s
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <button className="py-2 px-4 rounded-md bg-purple-800 text-white">
            Login
          </button>
        </form>
        <small>
          I don't have an account? <Link to={"/sign-up"}>Sign up</Link>
        </small>
      </div>
    </div>
  );
};

export default Login;

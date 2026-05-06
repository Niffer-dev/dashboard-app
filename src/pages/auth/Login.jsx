// pages/Login.jsx
import { useState } from "react";
import loginBg from "../../assets/loginUI.svg";
import Input from "../../components/ui/Input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const validate = () => {
    let newErrors = {};

    //email validation
    if(!form.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(form.email)){
      newErrors.email = "Invalide email address"
    }

    if (!form.password) {
      newErrors.password = "Password is required"
    } else if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    return newErrors;
  };

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate("/", { replace: true });
    }
  }


  return (
    <div className="w-full lg:w-200 mx-auto mt-10 flex lg:flex-row flex-col  items-center lg:gap-10 h-screen lg:h-130 rounded-md overflow-hidden backdrop-blur-md">
      <div className="bg-white">
        <div className="w-full h-fit lg:w-100 lg:h-100 flex items-center justify-center"> 
          <img src={loginBg} alt="image" />
        </div>
      </div>

      <div className="bg-gray-50 h-full w-full p-5 lg:p-8 flex flex-col gap-5 items-start lg:justify-center">
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

        <form className="w-full lg:w-full  flex flex-col gap-3" onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}

          <Input
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}

          <button type="submit" className="py-2 px-4 rounded-md bg-purple-800 text-white cursor-pointer" >
            Login
          </button>
        </form>
        <small>
          I don't have an account? <Link to={"/sign-up"} className="text-red-500 hover:text-red-600">Sign up</Link>
        </small>
      </div>
    </div>
  );
};

export default Login;

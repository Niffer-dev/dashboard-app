// pages/SignUp.jsx
import { useState } from "react";
import signupBg from "../../assets/signupUI.svg";
import Input from "../../components/ui/Input";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


const initialFormData = {
    username: '',
    email: '',
    password: ''
}
const SignUp = () => {
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(e){
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  async function handleSubmit(e){
    e.preventDefault()
    try {
        const response = await axios.post('', formData)

        if(!response === 200){
            alert("Something went wrong!")
        }

        return toast("User Register successfully")
    } catch (error) {
        console.log(error)
    }
  }

  const notify = () =>{
    toast.success("Save")
  }


  return (
    <div className="w-full lg:w-200 mx-auto mt-10 flex lg:flex-row flex-col  items-center lg:gap-10 h-screen lg:h-130 rounded-md overflow-hidden backdrop-blur-md">
      <div className="bg-white">
        <div className="w-full h-fit lg:w-100 lg:h-100 flex items-center justify-center"> 
          <img src={signupBg} alt="image" />
        </div>
      </div>

      <div className="bg-gray-50 h-full w-full p-5 lg:p-5 flex flex-col gap-5 items-start lg:justify-center">
        <div className="mb-5">
          <h1 className="lg:text-3xl text-2xl font-bold">
            Create an Account
          </h1>
          <p className="text-sm text-gray-500">
            with <span className="text-purple-700 font-semibold">Backend Project</span>
          </p>
        </div>

        <div className="flex w-full justify-between">
          <button onClick={notify} className="text-sm py-1 px-4 rounded-sm bg-purple-800 text-white">
            I'm a teacher
          </button>
          <button className="text-sm py-1 px-4 rounded-sm border-2 border-purple-700 text-purple-700 active:scale-95 transition cursor-pointer">
            I'm a student
          </button>
        </div>

        <form onSubmit={handleSubmit} className="w-full lg:w-full  flex flex-col gap-3">
          <Input
            label="Username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />

          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <Input
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />

          <button className="py-2 px-4 rounded-md bg-purple-800 text-white cursor-pointer">
            Sign up
          </button>
        </form>
        <small>
          I have an account? <Link to={"/login"} className="text-red-500 hover:text-red-600">Login</Link>
        </small>
      </div>
    </div>
  );
};

export default SignUp;

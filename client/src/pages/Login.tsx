import { useState,useEffect } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast'
const Login = () => {
  //put in all alerts the toast thing
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const signup = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/${e.currentTarget.name}`);
  }

  useEffect(() => {
    if(localStorage.getItem("token")) {
      navigate('/')
    }
  
  }, [])
  const handleSubmit = async (): Promise<void> => {
    setLoading(true);
    if (!(email && password)) {
      toast.error("Please Enter all fields", {
        duration: 3000,
        position: 'top-center',
        style: {
          backgroundColor: 'red',
          color: 'white'
        }
      });
      setLoading(false);

      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    if (!validator.isEmail(email)) {
      toast.error("Invalid Email address", {
        duration: 3000,
        position: 'top-center',
        style: {
          backgroundColor: 'red',
          color: 'white'
        }
      });
      setLoading(false);
      return;
    }
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { data } = await axios.post("http://localhost:4000/user/login", {
        email: email,
        password: password,
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      localStorage.setItem("token", data.token);
      toast.success("Logged in successfully", {
        duration: 3000,
        position: 'top-center'
      });
      setLoading(false);
      navigate("/");
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
      toast.error(error.response.data.message, {
        duration: 3000,
        position: 'top-center',
        style: {
          backgroundColor: 'red',
          color: 'white'
        }
      });
      setLoading(false);
    }
  };
  return (
    <div className="bg-yellow-400 flex justify-center items-center  w-full h-[100vh]">
      <Toaster />
      <div className="w-[300px] shadow-lg  rounded-2xl flex flex-col p-5 bg-slate-200">
        <div className="flex justify-center items-center">
          <img
            src="logo.png"
            className="mt-5 rounded-[50%]"
            width={100}
            height={100}
          />
        </div>

        <h1 className="text-center mt-2"> Expense Management System </h1>
        <div className="mt-10">
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-sm rounded-lg p-2 outline-none   placeholder:text-yellow-400  placeholder:font-semibold"
            placeholder="Email"
          />
        </div>
        <div className="mt-3">
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-sm  rounded-lg p-2 outline-none   placeholder:text-yellow-400 placeholder:font-semibold"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center items-center gap-2 mt-3">
          <p className="font-semibold text-sm"> Not Registered? </p>
          <div>
            <button name="signup" onClick={signup}  className="w-full font-semibold duration-150 hover:scale-105 bg-yellow-200 p-2 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
        <div className="mt-2">
          {
          loading ? (<div className="flex justify-center items-center" >
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-orange-400"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>) : (
            <button
            className="w-full font-semibold duration-150 hover:scale-105 bg-yellow-400 py-2 rounded-lg"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={handleSubmit}
          >
            Login
          </button>
          )
         
          }
          
        </div>
      </div>
    </div>
  );
};

export default Login;

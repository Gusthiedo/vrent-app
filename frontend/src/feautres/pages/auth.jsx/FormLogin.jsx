import axios from "axios"
import Button from "./Button";
import Input from "./Input";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";

function FormLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState();
  const {token, setToken} = useContext(UserContext);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("http://localhost:3003/api/users/login", { email, password });
      
      setToken(data.data.token);
      
      const decode = jwt_decode(token);
      
      if(decode.email !== "admin@mail.com") {
        navigate('/'); 
      } else {
        navigate('/admin')
      }

    } catch (error) {
      setMsg(error.response.data.message);
    }
  }

  return (
    <div className="flex flex-col">
      <p className="mb-2 text-center text-lg text-slate-600">{msg}</p>
      <form onSubmit={handleSubmit} className="p-4 bg-primary text-white flex flex-col items-center gap-4 rounded-lg shadow-mdshadow-slate-400" action="">
        <h1 className="text-3xl font-medium">Login</h1>
        <Input setInput={setEmail} label={'Email'} name={`email`} />
        <Input setInput={setPassword} label={'Password'} type={'password'} />
        <Button type={"Submit"} text={'Login'} />
        <p className="text-xs">Don{`'`}t have an account?
        <Link to='/register' className="text-black font-bold">SignUp</Link>
        </p>
      </form>
    </div>
  )
}

export default FormLogin;
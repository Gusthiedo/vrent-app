import axios from "axios";
import Button from "./Button";
import Input from "./Input";
import { Link } from "react-router-dom";
import { useState } from "react";

function FormRegister() {
  const [name, setName] = useState();
  const [no_hp, setNo_Hp] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("http://localhost:3003/api/users/register", {name, email, password, no_hp});

      setMsg(data.data.message);
    } catch (error) {
      setMsg(error.response.data.message);
    }
  }
  
  return (
    <div className="flex flex-col">
      <p className="mb-2 text-center text-lg text-slate-600">{msg}</p>
      <form onSubmit={handleSubmit} className="p-4 bg-primary text-white flex flex-col items-center gap-6 rounded-lg shadow-mdshadow-slate-400" action="">
        <h1 className="text-3xl">Register</h1>
        <div className="flex gap-2">
          <Input setInput={setName} variant={"w-52"} label={'Name'} />
          <Input setInput={setNo_Hp} variant={"w-52"} label={"Phone Number"} />
        </div>
        <div className="flex gap-2">
          <Input setInput={setEmail} variant={"w-52"} label={'Email'} type={'email'}/>
          <Input setInput={setPassword} variant={"w-52"} label={'Password'} type={'password'} />
        </div>
        <Button type={"Submit"} text={'Register'} />
        <p className="text-xs">Already have an account?
        <Link to='/login' className="text-black font-bold">Login</Link>
        </p>
      </form>   
    </div>
  )
}

export default FormRegister
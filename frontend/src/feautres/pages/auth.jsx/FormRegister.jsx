import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

function FormRegister() {
  return (
    <form className="p-4 bg-primary text-white flex flex-col items-center gap-4 rounded-lg shadow-mdshadow-slate-400" action="">
      <h1 className="text-3xl">Register</h1>
      <Input label={'Name'} />
      <Input label={'Email'} type={'email'}/>
      <Input label={'Password'} type={'password'} />
      <Button text={'Register'} />
      <p className="text-xs">Already have an account?
      <Link to='/login' className="text-black font-bold">Login</Link>
      </p>
    </form>
  )
}

export default FormRegister
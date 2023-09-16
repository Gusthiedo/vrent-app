import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

function FormLogin() {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('isLogin', JSON.stringify(true));
    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-primary text-white flex flex-col items-center gap-4 rounded-lg shadow-mdshadow-slate-400" action="">
      <h1 className="text-3xl font-medium">Login</h1>
      <Input label={'Email'} name={`email`} />
      <Input label={'Password'} type={'password'} />
      <Button text={'Login'} />
      <p className="text-xs">Don{`'`}t have an account?
      <Link to='/register' className="text-black font-bold">SignUp</Link>
      </p>
    </form>
  )
}

export default FormLogin;
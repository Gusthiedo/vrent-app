import FormLogin from '../feautres/pages/auth.jsx/FormLogin';
import Shape from '../feautres/pages/auth.jsx/Shape';

function Login() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Shape pos={`top-0 left-0`} />
      <FormLogin />
      <Shape pos={`bottom-0 right-0 rotate-180`} />
    </div>
  )
}

export default Login;
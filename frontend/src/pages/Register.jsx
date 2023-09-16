import FormRegister from '../feautres/pages/auth.jsx/FormRegister';
import Shape from '../feautres/pages/auth.jsx/Shape';

export default function Register() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Shape pos={`top-0 left-0`} />
      <FormRegister />
      <Shape pos={`bottom-0 right-0 rotate-180`} />
    </div>
  )
}

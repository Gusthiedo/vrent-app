/* eslint-disable react/prop-types */
function Input({label, type}) {
  return (
    <label className="text-sm flex flex-col">
      {label}
      <input className="text-base text-black indent-2 h-10 w-64 rounded" type={type} required/>
    </label>
  )
}

export default Input;
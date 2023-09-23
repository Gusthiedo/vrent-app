/* eslint-disable react/prop-types */
function Input({label, type, setInput, variant}) {
  return (
    <label className="text-sm flex flex-col">
      {label}
      <input onChange={(e) => {setInput(e.target.value)}} className={`text-base text-black indent-2 h-10 ${variant ? variant : "w-64"} rounded`} type={type} required/>
    </label>
  )
}

export default Input;
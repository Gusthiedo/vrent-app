/* eslint-disable react/prop-types */
function Button({text, type}) {
  return (
    <button type={type} className="w-full h-10 bg-black rounded mt-2">{text}</button>
  )
}

export default Button;
/* eslint-disable react/prop-types */
function Button({text}) {
  return (
    <button type="submit" className="w-full h-10 bg-black rounded mt-2">{text}</button>
  )
}

export default Button;
/* eslint-disable react/prop-types */
import shape from '../../../assets/shape/login-shape.png';

function Shape({pos}) {
  return (
    <div className={`max absolute min-w-xs ${pos}`}>
      <img className='object-cover' src={shape} alt="" />
    </div>
  )
}

export default Shape;
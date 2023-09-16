import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function NavAuth() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const statusLogin = JSON.parse(localStorage.getItem('isLogin'));
    if(statusLogin) {
      setIsLogin(statusLogin)
    }
  }, [isLogin]);

  const handleClick = (e) => {
    e.preventDefault();

    localStorage.setItem('isLogin', JSON.stringify(false));
    navigate('/');
    location.reload()
  }
  
  return (
    <div className="text-base pt-4 min-[900px]:pt-0 flex items-center gap-4 font-medium">
      {!isLogin ? (
        <>
          <Link to={'/login'}>
            <button  className="hover:-translate-y-[1px]">Sign In</button>
          </Link>
          <Link to='/register'>
            <button className="text-white py-2 px-4 bg-primary rounded shadow- shadow-slate-400 hover:brightness-90">Register</button>
          </Link>
        </>
      ) : (
        <button onClick={handleClick} className="hover:-translate-y-[1px]">Sign Out</button>
      )}
    </div>
  )
}

export default NavAuth;
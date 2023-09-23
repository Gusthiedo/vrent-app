import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../../context/UserContext";
import jwt_decode from "jwt-decode";

function NavAuth() {
  const {token, setToken} = useContext(UserContext);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if(token) {
      const decode = jwt_decode(token);
      setUser(decode);
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setToken(undefined)
    navigate('/');
    location.reload();
  }
  
  return (
    <div className="text-base pt-4 min-[900px]:pt-0 flex items-center gap-4 font-medium">
      {!user ? (
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
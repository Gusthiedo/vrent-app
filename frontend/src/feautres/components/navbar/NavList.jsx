import jwt_decode from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

function NavList() {
  const {token} = useContext(UserContext);
  const [user, setUser] = useState();

  useEffect(() => {
    if(token) {
      const decode = jwt_decode(token);
      setUser(decode);
    }
  }, [token]);

  const links = [
    { link: "Home", to: "/" },
    { link: "About", to: "/about" },
    { link: "Vehicle Model", to: "/model" },
    { link: "Book", to: "/book" },
  ];
  return (
    <ul className="flex flex-col gap-4 pt-4 min-[900px]:pt-0 text-base font-medium min-[900px]:flex-row">
      {
        user &&
        user.email === "admin@mail.com" ? (
          ""
        ) : 
        links.map((link) => (
          <li key={link.link}>
            <Link to={link.to}>{link.link}</Link>
        </li>
      ))
      }
    </ul>
  );
}

export default NavList;

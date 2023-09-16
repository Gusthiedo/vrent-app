import { Link } from "react-router-dom";

function NavList() {
  const links = [
    { link: "Home", to: "/" },
    { link: "About", to: "/about" },
    { link: "Vehicle Model", to: "/model" },
    { link: "Book", to: "/book" },
  ];
  return (
    <ul className="flex flex-col gap-4 pt-4 min-[900px]:pt-0 text-base font-medium min-[900px]:flex-row">
      {links.map((link) => (
        <li key={link.link}>
          <Link to={link.to}>{link.link}</Link>
        </li>
      ))}
    </ul>
  );
}

export default NavList;

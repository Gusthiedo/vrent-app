/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";

const Protected = ({ children }) => {
  return (
    // Protected ngoding disini
    <section>
      <Navbar />
      {children}
    </section>
  );
};

export default Protected;

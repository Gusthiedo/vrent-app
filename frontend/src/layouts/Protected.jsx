/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Protected = ({ children }) => {
  return (
    // Protected ngoding disini
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export default Protected;

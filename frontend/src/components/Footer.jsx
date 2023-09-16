import Company from "../feautres/components/footer/Company";
import Help from "../feautres/components/footer/Help";
import Vrent from "../feautres/components/footer/Vrent";
import Working from "../feautres/components/footer/Working";

function Footer() {
  return (
    <div className="w-[90%] mx-auto flex flex-col sm:flex-row gap-5 sm:gap-20 py-4">
      <Vrent />
      <div className="flex flex-1 flex-wrap justify-between gap-4">
        <Company />
        <Working />
        <Help />
      </div>
    </div>
  )
}

export default Footer;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import SocialIcons from "./SocialIcons";

const Navbar = ({ logo, businessName, phone, socialLinks }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm flex justify-between items-center px-6 py-3 z-50">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt={`${businessName} logo`}
          className="w-10 h-10 rounded-full"
        />
        <h1 className="text-xl font-bold text-gray-800">{businessName}</h1>
      </div>

      <div className="flex items-center gap-6">
        <a
          href={`tel:${phone}`}
          className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
        >
          <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2" />
          {phone}
        </a>
        <SocialIcons socialLinks={socialLinks} />
      </div>
    </nav>
  );
};

export default Navbar;

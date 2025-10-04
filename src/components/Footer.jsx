import SocialIcons from "./SocialIcons";

const Footer = ({ logo, businessName, address, phone, socialLinks }) => (
  <footer className="bg-gray-900 text-gray-300 py-10 text-center">
    <div className="flex flex-col items-center gap-3">
      <img
        src={logo}
        alt="Deez Essence logo"
        className="w-12 h-12 rounded-full"
      />
      <h4 className="text-lg font-semibold text-white">{businessName}</h4>
      <p>{address}</p>
      <a href={`tel:${phone}`} className="text-green-400 hover:underline">
        {phone}
      </a>
      <SocialIcons socialLinks={socialLinks} />
      <p className="text-sm text-gray-500 mt-4">
        © {new Date().getFullYear()} Deez Essence. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

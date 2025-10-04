import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const SocialIcons = ({ socialLinks }) => (
  <div className="flex gap-3 text-gray-700">
    {socialLinks.facebook && (
      <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-600 transition-transform hover:scale-110"
      >
        <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
      </a>
    )}

    {socialLinks.instagram && (
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noreferrer"
        className="hover:text-pink-500 transition-transform hover:scale-110"
      >
        <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
      </a>
    )}

    {socialLinks.tiktok && (
      <a
        href={socialLinks.tiktok}
        target="_blank"
        rel="noreferrer"
        className="hover:text-black transition-transform hover:scale-110"
      >
        <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
      </a>
    )}

    {socialLinks.whatsapp && (
      <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="hover:text-green-500 transition-transform hover:scale-110"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
      </a>
    )}

    {socialLinks.message && (
      <a
        href={socialLinks.message}
        target="_blank"
        rel="noreferrer"
        className="hover:text-sky-500 transition-transform hover:scale-110"
      >
        <FontAwesomeIcon icon={faMessage} className="w-5 h-5" />
      </a>
    )}
  </div>
);

export default SocialIcons;

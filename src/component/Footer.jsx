import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import logo from "../assets/icon/avacos.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 mt-16">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4 px-4 text-sm">
        {/* Company Info */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
            <img
              src={logo}
              alt="Avacos Logo"
              className="h-10 transition-transform duration-300 hover:scale-110"
            />
            <h4 className="font-bold text-lg">AVACOS</h4>
          </Link>

          <p className="text-gray-600 mb-2">
            <strong>AVACOS SERVICE PRIVATE LIMITED</strong>
          </p>

          <p className="text-gray-600 text-xs mb-2">
            CIN: U46301UP2023PTC178608
          </p>

          <p className="text-gray-600 text-xs">
            1054, Church Road, Pahalwara, Balrampur, Uttar Pradesh 271201, India
          </p>
        </div>

        {/* Company Links */}
        <FooterCol
          title="Company"
          links={[
            { label: "About Us", to: "/about" },
            { label: "Careers", to: "/career" },
            { label: "Contact", to: "/contact" },
          ]}
        />

        {/* Help */}
        <FooterCol
          title="Help"
          links={[
            { label: "Support", to: "/support" },
            { label: "Delivery Info", to: "/delivery" },
            { label: "Terms & Conditions", to: "/terms" },
          ]}
        />

        {/* Contact & Social */}
        <div>
          <h5 className="font-semibold mb-3">Contact</h5>

          <p className="text-gray-600 text-sm mb-1">📧 info@avacosfoods.com</p>

          <p className="text-gray-600 text-sm mb-3">📞 +91 9922117866</p>

          <a
            href="https://www.avacosfoods.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition mb-4">
            <FaGlobe /> www.avacosfoods.com
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <SocialIcon
              href="https://www.instagram.com/avacosfoods"
              icon={<FaInstagram />}
            />
            <SocialIcon
              href="https://www.youtube.com/@avacosfood"
              icon={<FaYoutube />}
            />
            <SocialIcon
              href="https://www.facebook.com/avacosfoods"
              icon={<FaFacebook />}
            />
            <SocialIcon
              href="https://www.linkedin.com/company/avacosfoods"
              icon={<FaLinkedin />}
            />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-xs mt-10">
        © {new Date().getFullYear()} AVACOS SERVICE PRIVATE LIMITED. All rights
        reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h5 className="font-semibold mb-3">{title}</h5>
      <ul className="space-y-2">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              to={item.to}
              className="text-gray-600 hover:text-green-600 transition hover:translate-x-1 inline-block">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-gray-600 hover:text-green-600 transition transform hover:scale-110">
      {icon}
    </a>
  );
}

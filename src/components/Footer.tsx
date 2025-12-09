import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import NavigationTree from "../atoms/NavigationTree";

export const SOCIAL_LINKS = [
  {
    icon: <FaLinkedin strokeWidth={1} />,
    href: "https://www.linkedin.com/company/50323414/",
    ariaLabel: "Vers la page LinkedIn de Code Rouge Info",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/coderougeinfo.fr/",
    ariaLabel: "Vers la page Instagram de Code Rouge Info",
  },
  {
    icon: <FaFacebookSquare strokeWidth={1} />,
    href: "https://www.facebook.com/profile.php?id=61573753883070",
    ariaLabel: "Vers la page Facebook de Code Rouge Info",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer flex flex-col mt-auto bg-rolling-stone-900 text-white items-center justify-center h-auto px-28 py-8 space-y-8 text-xs">
      <section className="flex justify-between w-full items-center">
        <p>Logo Code Rouge Info</p>
        <NavigationTree />
      </section>
      <div className="divider border border-white w-full" />
      <section className="flex items-center justify-between w-full">
        <p>&copy; {year} Code Rouge Info - Tous droits réservés</p>
        <div className="flex gap-4">
          {SOCIAL_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              target="_blank"
              aria-label={link.ariaLabel}
              className="text-white text-2xl hover:text-red-600 transition-colors"
            >
              {link.icon}
            </NavLink>
          ))}
        </div>
      </section>
    </footer>
  );
}

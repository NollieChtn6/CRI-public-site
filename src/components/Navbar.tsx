import NavButton from "../atoms/NavButton";

interface NavLinkInterface {
  label: string;
  path: string;
}

export default function NavBar() {
  const _NAV_LINKS: NavLinkInterface[] = [
    { label: "Accueil", path: "" },
    { label: "L'association", path: "association" },
    { label: "Prévention", path: "prevention" },
    { label: "Reportages", path: "reportages" }, // activités
    { label: "Contact", path: "contact" },
  ];
  return (
    <nav className="navbar flex w-1/2 bg-rolling-stone-900 h-full justify-around items-center">
      {_NAV_LINKS.map((link) => (
        <NavButton key={link.path} path={`${link.path}`} label={link.label} />
      ))}
    </nav>
  );
}

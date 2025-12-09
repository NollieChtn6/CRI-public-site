import { NavLink } from "react-router-dom";

interface NavButtonProps {
  label: string;
  path: string;
}

export default function NavButton({ label, path }: NavButtonProps) {
  return <NavLink to={`/${path}`}>{label}</NavLink>;
}

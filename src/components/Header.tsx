import Logo from "../atoms/Logo";
import NavBar from "./Navbar";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full bg-rolling-stone-500 text-white h-24">
      <Logo />
      <NavBar />
    </header>
  );
}

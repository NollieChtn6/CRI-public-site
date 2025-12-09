import { NavLink } from "react-router-dom";

export function NotFoundPage() {
  return (
    <>
      <div>404 • Page Non Trouvée</div>
      <NavLink to="/">Retour à l'accueil</NavLink>
    </>
  );
}

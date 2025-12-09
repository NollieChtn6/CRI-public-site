import { NavLink } from "react-router-dom";

interface SectionInterface {
  label: string;
  path: string;
  pages?: PageInterface[];
}

interface PageInterface {
  label: string;
  path: string;
}

export default function NavigationTree() {
  const _NAV_TREE: SectionInterface[] = [
    {
      label: "L'association",
      path: "association",
      pages: [
        { label: "Qui sommes-nous ?", path: "histoire" },
        { label: "Nos partenaires", path: "partenaires" },
        { label: "Recrutement", path: "recrutement" },
      ],
    },
    {
      label: "Prévention",
      path: "prevention",
      pages: [
        { label: "Bonnes pratiques", path: "bonnes-pratiques" },
        { label: "Dangers", path: "dangers" },
      ],
    },
    {
      label: "Reportages",
      path: "reportages",
      pages: [
        { label: "Articles", path: "articles" },
        { label: "Sapeurs-pompiers", path: "pompiers" },
      ],
    },
  ];
  return (
    <nav className="flex gap-12 justify-end">
      {_NAV_TREE.map((section) => (
        <div key={section.label} className="flex flex-col space-y-2">
          <h3 className="page-label font-semibold">{section.label}</h3>
          {section.pages?.map((page) => (
            <NavLink to={`${section.path}/${page.path}`} key={page.label}>
              {page.label}
            </NavLink>
          ))}
        </div>
      ))}
    </nav>
  );
}

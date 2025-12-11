import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu.tsx";
import { useWindowSize } from "@/hooks/useWindowSize";
import { convertToSmartApostrophe } from "@/utils/formatText";
import type { SectionInterface } from "../@types/types";

const NAV_LINKS: SectionInterface[] = [
  { label: "Accueil", path: "" },
  {
    label: "L'association",
    path: "association",
    pages: [
      {
        label: "Qui sommes-nous ?",
        path: "a-propos",
        description: "En savoir plus sur Code Rouge Info et son histoire.",
      },
      {
        label: "Partenaires",
        path: "partenaires",
        description: "Les partenaires qui soutiennent notre mission.",
      },
      {
        label: "Recrutement",
        path: "recrutement",
        description: "Rejoignez notre équipe en tant que bénévole.",
      },
    ],
  },
  {
    label: "Prévention",
    path: "prevention",
    pages: [
      {
        label: "Bonnes pratiques",
        path: "bonnes-pratiques",
        description: "Des conseils pour une meilleure prévention.",
      },
      {
        label: "Dangers",
        path: "dangers",
        description: "Retrouvez des informations de sensibilisation.",
      },
    ],
  },
  {
    label: "Reportages",
    path: "reportages",
    pages: [
      {
        label: "Articles",
        path: "articles",
        description: "Découvrez les activités de notre association.",
      },
      {
        label: "Sapeurs-pompiers",
        path: "pompiers",
        description: "Nos reportages sur les sapeurs-pompiers.",
      },
    ],
  },
  { label: "Contact", path: "contact" },
];

export default function Navbar() {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <NavigationMenu viewport={isMobile} className="px-4">
      <NavigationMenuList className="gap-6">
        {NAV_LINKS.map((link) => (
          <NavigationMenuItem key={link.label}>
            {!link.pages ? (
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} navbarLink`}>
                <a href={`/${link.path}`}>{link.label}</a>
              </NavigationMenuLink>
            ) : (
              <>
                <NavigationMenuTrigger className="navbarLink">
                  {convertToSmartApostrophe(link.label)}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="">
                  <ul className="grid gap-2 w-56 text-sm">
                    {link.pages.map((page) => (
                      <ListItem
                        key={page.path}
                        title={page.label}
                        href={`/${link.path}/${page.path}`}
                        className="block px-2 py-1 hover:bg-accent rounded-sm"
                      >
                        {page.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

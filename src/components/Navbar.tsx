import NavItem from "@/atoms/NavItem";
import { useWindowSize } from "@/hooks/useWindowSize";
import type { SectionInterface } from "../@types/types";

export const NAV_LINKS: SectionInterface[] = [
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
      {
        label: "Nous soutenir",
        path: "nous-soutenir",
        description: "Soutenez notre association et nos actions.",
      },
    ],
  },
  {
    label: "Prévention",
    path: "prevention",
    pages: [
      {
        label: "Dangers",
        path: "dangers",
        description: "Retrouvez des informations de sensibilisation.",
      },
      {
        label: "Bonnes pratiques",
        path: "bonnes-pratiques",
        description: "Des conseils pour une meilleure prévention.",
      },
      {
        label: "Articles",
        path: "articles",
        description: "Nos articles de prévention et de conseils.",
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
        description: "Plongée au cœur de la vie et des actions de notre association.",
      },
      {
        label: "Sapeurs-pompiers",
        path: "galeries/sapeurs-pompiers",
        description: "L'engagement et le courage des sapeurs-pompiers en intervention.",
      },
      {
        label: "AASC",
        path: "galeries/aasc",
        description: "Les acteurs de l'assistance et du secours sur le terrain.",
      },
      {
        label: "Défense",
        path: "galeries/defense",
        description: "Des images rares au plus près des forces de la Défense.",
      },
      {
        label: "Forces de l'ordre",
        path: "galeries/forces-de-l-ordre",
        description: "Le quotidien des forces de l'ordre au service de la sécurité.",
      },
      {
        label: "SAMU/SMUR",
        path: "galeries/samu-smur",
        description: "L'urgence médicale capturée au cœur de l'action.",
      },
    ],
  },
  { label: "Contact", path: "contact" },
];

export default function Navbar() {
  const { width } = useWindowSize();
  const _isMobile = width < 768;

  return (
    <nav className="flex items-center gap-2 px-4 text-shark-100">
      {NAV_LINKS.map((item) => (
        <NavItem key={item.label} item={item} />
      ))}
    </nav>
  );
}

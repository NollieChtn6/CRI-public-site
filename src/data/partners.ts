import BalyTech from "@/assets/partners/logo_BalyTech.png";
import CHBourgEnBresse from "@/assets/partners/logo_CH_Bourg_En_Bresse.png";
import CHWilliamMorrey from "@/assets/partners/logo_CH_William_Morey.png";
import ExtractionChallenge from "@/assets/partners/logo_Extraction_Challenge.png";
import InfoChalon from "@/assets/partners/logo_Info_Chalon.svg";
import Instavox from "@/assets/partners/logo_Instavox.png";
import MSASafety from "@/assets/partners/logo_MSA.svg";
import ProtectionCivileSL from "@/assets/partners/logo_Protection_civile_Saone_et_Loire.png";
import SecoursExpo from "@/assets/partners/logo_Secours_Expo.png";
import FedeCroixBlanche from "@/assets/partners/logo_SF_Croix_Blanche.png";
import StandBy from "@/assets/partners/logo_StandBy.svg";

export interface PartnerInterface {
  id: string;
  name: string;
  website: string | null;
  logo: ImageMetadata;
}

export const partners: PartnerInterface[] = [
  {
    id: "ch-william-morey",
    name: "Centre Hospitalier William Morey",
    website: "https:/ch-chalon71.fr/",
    logo: CHWilliamMorrey,
  },
  {
    id: "ch-bourg-en-bresse",
    name: "Centre Hospitalier de Bourg-en-Bresse",
    website: "https:/www.ch-bourg-en-bresse.fr/",
    logo: CHBourgEnBresse,
  },
  {
    id: "federation-secouristes-francais-croix-blanche",
    name: "Fédération des Secouristes Français Croix Blanche",
    website: "https:/www.croixblanche.org/",
    logo: FedeCroixBlanche,
  },
  {
    id: "protection-civile-saone-et-loire",
    name: "Protection Civile de la Saône-et-Loire",
    website: "https:/saone-et-loire.protection-civile.org/",
    logo: ProtectionCivileSL,
  },
  {
    id: "balytech",
    name: "BalyTech",
    website: "https:/www.balytech.com/",
    logo: BalyTech,
  },
  {
    id: "secours-expo",
    name: "Secours Expo",
    website: "https:/www.secours-expo.com/",
    logo: SecoursExpo,
  },
  {
    id: "extraction-challenge",
    name: "Extraction Challenge 2018",
    website: null,
    logo: ExtractionChallenge,
  },
  {
    id: "info-chalon",
    name: "Info-Chalon",
    website: "https:/www.info-chalon.com/",
    logo: InfoChalon,
  },
  {
    id: "msa-the-safety",
    name: "MSA The Safety",
    website: "https:/fr.msasafety.com/",
    logo: MSASafety,
  },
  {
    id: "instavox",
    name: "Instavox",
    website: "https:/www.instavox.fr/",
    logo: Instavox,
  },
  {
    id: "standby",
    name: "StandBy",
    website: "https:/standbygroup.com/",
    logo: StandBy,
  },
];

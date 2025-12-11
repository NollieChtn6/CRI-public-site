import { BsBookmarkCheck } from "react-icons/bs";
import { ImHourGlass } from "react-icons/im";
import { TfiCamera } from "react-icons/tfi";
import type { TimelineCardProps } from "@/@types/types";
import TimelineCard from "@/components/TimelineCard";
import { Separator } from "@/components/ui/separator";
import { capitalizeString } from "@/utils/capitalizeString";

export default function Timeline() {
  const TIMELINE_STEPS: TimelineCardProps[] = [
    {
      id: "2015-creation",
      startMonth: "mars",
      startYear: 2015,
      endMonth: null,
      endYear: null,
      title: "Création de l'association",
      text: "Le projet Code Rouge a été lancé le 10 mars 2015 par Stefan Amarica. Sa vocation principale était de faire découvrir au grand public les services de secours et d'urgence — qu'ils soient professionnels ou bénévoles — et de valoriser leur action à travers des contenus immersifs.",
      Icon: ImHourGlass,
    },
    {
      id: "2016-inscription",
      startMonth: "décembre",
      startYear: 2016,
      endMonth: null,
      endYear: null,
      title: "Inscription officielle au RNA",
      text: "Il s'agit d'une association déclarée, inscrite au Répertoire National des Associations (RNA) le 27 décembre 2016. Le siège social est situé au 32 rue du Champ Gaillard, 71100 Chalon-sur-Saône (Saône-et-Loire).",
      Icon: BsBookmarkCheck,
    },
    {
      id: "2018-definition",
      startMonth: null,
      startYear: 2018,
      endMonth: null,
      endYear: 2019,
      title: "Définition des activités Code Rouge",
      text: "Du terrain aux événements, Code Rouge Info met en lumière tous les acteurs de la sécurité civile : sapeurs-pompiers, police, gendarmerie, SAMU et associations de secours. À travers nos reportages et actions de sensibilisation, nous valorisons leur engagement quotidien, qu'il s'agisse d'interventions opérationnelles ou de missions auprès du public.",
      Icon: TfiCamera,
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="relative mx-auto max-w-4xl">
          <Separator orientation="vertical" className="bg-muted absolute left-2 top-4" />

          {TIMELINE_STEPS.map((entry) => (
            <div key={entry.id} className="relative mb-10 pl-8">
              <div className="flex space-x-4">
                <div
                  className="
                    flex h-10 w-10 items-center justify-center 
                    rounded-full bg-primary text-primary-foreground shadow 
                    ring-2 ring-background
                  "
                >
                  <entry.Icon className="h-5 w-5" />
                </div>
                <h4 className="rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-4 xl:px-3">
                  {entry.title}
                </h4>
              </div>
              <h5 className="text-md -left-34 text-muted-foreground top-3 rounded-xl tracking-tight xl:absolute mb-4">
                {entry.startMonth
                  ? `${capitalizeString(entry.startMonth)} ${entry.startYear}`
                  : `${entry.startYear}-${entry.endYear}`}
              </h5>
              <TimelineCard {...entry} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

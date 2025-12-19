import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import type { IconType } from "react-icons/lib";
import * as MdIcons from "react-icons/md";
import TimelineCard from "@/components/TimelineCard";
import { Separator } from "@/components/ui/separator";
import milestones from "@/data/milestones.json";
import { formatTimelineDate } from "@/utils/formatTimelineDate";

export default function Timeline() {
  return (
    <section className="py-20 mx-auto">
      <div className="container">
        <div className="relative mx-auto max-w-4xl">
          <Separator orientation="vertical" className="bg-muted absolute left-5 top-0 h-full z-0" />

          {milestones.map((entry) => {
            const IconComponent =
              (FaIcons as { [key: string]: IconType })[entry.iconName] ||
              (IoIcons as { [key: string]: IconType })[entry.iconName] ||
              (MdIcons as { [key: string]: IconType })[entry.iconName];

            return (
              <div key={entry.id} className="relative mb-10 pl-8">
                <div className="flex relative z-10 items-center space-y-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow ring-2 ring-background -translate-x-4/5">
                    {IconComponent && <IconComponent className="h-5 w-5" />}
                  </div>
                  <h4 className="rounded-xlpy-2 text-lg lg:text-xl font-bold tracking-tight px-4">
                    {entry.title}
                  </h4>
                </div>
                <h5 className="text-md -left-30 ml-2 top-3 rounded-xl tracking-tight xl:absolute mb-4">
                  {formatTimelineDate(
                    entry.startDay,
                    entry.startMonth,
                    entry.startYear,
                    entry.endDay,
                    entry.endMonth,
                    entry.endYear,
                  )}
                </h5>
                <TimelineCard {...entry} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

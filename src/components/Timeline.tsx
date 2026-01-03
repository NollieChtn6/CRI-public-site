import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import type { IconType } from "react-icons/lib";
import * as MdIcons from "react-icons/md";
import * as PiIcons from "react-icons/pi";
import type { YearEntry } from "@/@types/types";
import TimelineCard from "@/components/TimelineCard";
import { Separator } from "@/components/ui/separator";
import milestones from "@/data/milestones.json";
import { formatTimelineDate } from "@/utils/formatTimelineDate";

export default function Timeline() {
  return (
    <section className="py-20 mx-auto">
      <div className="container">
        <div className="relative mx-auto max-w-4xl">
          <Separator
            orientation="vertical"
            className="bg-shark-700 absolute left-5 top-0 h-full z-0"
          />

          {(milestones as YearEntry[])
            .map((yearEntry) => (
              <>
                <h3 className="text-2xl font-bold text-shark-50 mb-6 -translate-x-15 lg:-translate-x-20">
                  {yearEntry.year}
                </h3>
                <div key={yearEntry.year} className="mb-12">
                  {yearEntry.events.map((event) => {
                    const IconComponent: IconType | undefined =
                      (FaIcons as { [key: string]: IconType })[event.iconName] ||
                      (IoIcons as { [key: string]: IconType })[event.iconName] ||
                      (MdIcons as { [key: string]: IconType })[event.iconName] ||
                      (PiIcons as { [key: string]: IconType })[event.iconName];

                    return (
                      <div key={event.id} className="relative mb-10 pl-8 space-y-4">
                        <div className="flex relative z-10 items-center space-y-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-orange-500 text-shark-50 shadow ring-[1.5px] ring-shark-50 -translate-x-4/5">
                            {IconComponent && <IconComponent className="h-5 w-5" />}
                          </div>
                          <h4 className="text-lg lg:text-xl font-bold tracking-tight text-shark-50 ">
                            {event.title}
                          </h4>
                        </div>

                        {(event.startDay || event.startMonth) && (
                          <h5 className="text-sm text-shark-300 -left-30 ml-2 top-3 rounded-xl tracking-tight xl:absolute mb-4">
                            {formatTimelineDate(event.startDay, event.startMonth, yearEntry.year)}
                          </h5>
                        )}

                        <TimelineCard event={event} />
                      </div>
                    );
                  })}
                </div>
              </>
            ))
            .reverse()}
        </div>
      </div>
    </section>
  );
}

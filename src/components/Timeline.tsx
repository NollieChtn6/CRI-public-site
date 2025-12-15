import TimelineCard from "@/components/TimelineCard";
import { Separator } from "@/components/ui/separator";
import milestones from "@/data/milestones.json";
import { formatTimelineDate } from "@/utils/formatTimelineDate";

export default function Timeline() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="relative mx-auto max-w-4xl">
          <Separator orientation="vertical" className="bg-muted absolute left-2 top-4" />

          {milestones.map((entry) => (
            <div key={entry.id} className="relative mb-10 pl-8">
              <div className="flex space-x-4">
                <div
                  className="
                    flex h-10 w-10 items-center justify-center 
                    rounded-full bg-primary text-primary-foreground shadow 
                    ring-2 ring-background
                  "
                >
                  {/* <BedIcon className="h-5 w-5" /> */}
                </div>
                <h4 className="rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-4 xl:px-3">
                  {entry.title}
                </h4>
              </div>
              <h5 className="text-md -left-34 text-muted-foreground top-3 rounded-xl tracking-tight xl:absolute mb-4">
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
          ))}
        </div>
      </div>
    </section>
  );
}

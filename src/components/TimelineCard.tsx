import type { TimelineEvent } from "@/@types/types";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineCardProps {
  event: TimelineEvent;
}

export default function TimelineCard({ event }: TimelineCardProps) {
  return (
    <Card>
      <CardContent>
        <p>{event.text}</p>
      </CardContent>
    </Card>
  );
}

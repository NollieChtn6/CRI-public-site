import type { TimelineCardProps } from "@/@types/types";
import { Card, CardContent } from "@/components/ui/card";

export default function TimelineCard(content: TimelineCardProps) {
  return (
    <Card>
      <CardContent>
        <p>{content.text}</p>
      </CardContent>
    </Card>
  );
}

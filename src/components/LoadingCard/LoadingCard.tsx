import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

function LoadingCard() {
  return (
    <Card className="flex justify-between items-center space-x-4 p-4">
      <Skeleton className="h-16 w-16 rounded-full" />
      <div className="flex-col gap-4 space-y-3">
        <Skeleton className="h-4 flex-grow" />
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </Card>
  );
}

export default LoadingCard;

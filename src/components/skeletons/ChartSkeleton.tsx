import { Skeleton } from "@/components/ui/skeleton";


// loading skeleton for Chart page
function ChartSkeleton() {
  return (
    <div className="w-screen md:w-[80vw] flex  flex-col items-center">
      <div className="m-4 p-4 flex gap-2">
        <Skeleton className=" h-12 w-20" />
        <Skeleton className=" h-12 w-20" />
        <Skeleton className=" h-12 w-20" />
      </div>

      <Skeleton className="min-w-[310px] w-[85vw] md:w-[58vw] h-[550px] " />
    </div>
  );
}

export default ChartSkeleton;

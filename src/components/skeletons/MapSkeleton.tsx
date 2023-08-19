import { Skeleton } from "@/components/ui/skeleton";

// loading skeleton for map page
function MapSkeleton() {
  return (
    <div className="flex justify-center mt-4 md:mt-10 w-screen md:w-[80vw]">
    <Skeleton className=" min-w-[320px] w-[90vw] md:w-[60vw] h-[550px] rounded-lg" />
    </div>

  )
}

export default MapSkeleton
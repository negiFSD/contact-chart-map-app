import CovidCharts from "@/components/main/CovidCharts";
import ChartSkeleton from "@/components/skeletons/ChartSkeleton";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function Charts() {
  const [visibleChart, setVisibleChart] = useState<string>("cases");

  // fetching covid data to show on chart
  const { isLoading, isError, data } = useQuery({
    queryKey: ["chartData"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then(
        (res) => res.json()
      ),
  });

  const chartHandler = (name: string) => {
    setVisibleChart(name);
  };

  if (isLoading) {
    return <ChartSkeleton />;
  }

  if (isError) {
    return <span>Something went wrong, please try again</span>;
  }

  return (
    <div className="w-screen md:w-[80vw] flex  flex-col items-center">
      <div className="m-4 p-4 flex gap-2">
        <Button
          variant={visibleChart === "cases" ? "secondary" : "outline"}
          onClick={() => chartHandler("cases")}
        >
          Cases
        </Button>
        <Button
          variant={visibleChart === "deaths" ? "secondary" : "outline"}
          onClick={() => chartHandler("deaths")}
        >
          Deaths
        </Button>
        <Button
          variant={visibleChart === "recovered" ? "secondary" : "outline"}
          onClick={() => chartHandler("recovered")}
        >
          Recovered
        </Button>
      </div>

      <div className=" shadow-2xl min-w-[320px] w-[90vw] md:w-[60vw] h-[550px] rounded-lg">
        <CovidCharts data={data} chartType={visibleChart} />
      </div>
    </div>
  );
}

export default Charts;

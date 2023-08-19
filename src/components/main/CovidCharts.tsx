import { ConvertedData, chartfetchDataType } from "@/types/types";
import { Card, Title, LineChart } from "@tremor/react";
import { useEffect, useState } from "react";
import React from "react";

// Daily cases number formatter
const dataFormatter = (number: number) =>
  `${Intl.NumberFormat("us")
    .format(number / 1000)
    .toString()}K`;

// This component is showing the chart on Chart Page
const CovidCharts =
 React.memo(
  ({ data, chartType }: { data: chartfetchDataType; chartType: string }) => {
    const [convertedData, setConvertedData] = useState<ConvertedData[]>([]);

    useEffect(() => {
      //function to convert fetched data in required format to show chart.
      const convertOldData = () => {
        const convertedArray = Object.entries(data.cases).map(
          ([date, cases]) => ({
            date,
            cases,
            deaths: data.deaths[date],
            recovered: data.recovered[date],
          })
        );

        setConvertedData(convertedArray.slice(0, 30));
      };

      convertOldData();
    }, [data]);

    return (
      <Card className="shadow-2xl min-w-[320px] w-[90vw] md:w-[60vw] h-[550px] rounded-lg ">
        <Title>Day wise covid reports</Title>
        <LineChart
          className="mt-6"
          data={convertedData}
          index="date"
          categories={[chartType]}
          colors={["emerald", "gray"]}
          valueFormatter={dataFormatter}
          yAxisWidth={40}
          showYAxis={true}
          showXAxis={true}
        />
      </Card>
    );
  }
);

export default CovidCharts;

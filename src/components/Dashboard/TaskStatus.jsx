import React from "react";
import { PieChart, BarChart } from "@mui/x-charts";
import CalculateTasks from "../../utils/CalculateTasks";
import formatteDate from "../../utils/formattedDate";

function TaskStatus() {
  const {
    pendingTasks,
    progressTasks,
    completedTasks,
    highPriority,
    mediumPriority,
    lowPriority,
  } = CalculateTasks();

  const chartData = [
    { id: 1, value: pendingTasks, label: "Pending", color: "#b608b6" },
    { id: 2, value: progressTasks, label: "Progress", color: "#4D96FF" },
    { id: 3, value: completedTasks, label: "Completed", color: "#42C87B" },
  ];
  const barData = [
    { id: 1, value: lowPriority, label: "Low", colors: "green" },
    { id: 2, value: mediumPriority, label: "Medium", colors: "yellow" },
    { id: 3, value: highPriority, label: "High", colors: "red" },
  ];

  const formattedDate = formatteDate(new Date());

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">
      <div className="col-span-1 md:col-span-2 w-full bg-gray-100 shadow-sm flex justify-between p-4 items-center gap-6 dark:bg-[#323232d8]">
        <div>
          <p className=" font-bold">Hello MIKE</p>
          <p className=" pl-2 text-gray-500 dark:text-gray-400">
            {formattedDate}
          </p>
        </div>
        <div className=" flex flex-col gap-2 sm:flex-row sm:gap-2 md:gap-6 lg:gap-8">
          {chartData.map((data) => (
            <p
              key={data.id}
              className="border-0 border-l-8 pl-2 flex items-center"
              style={{ borderLeftColor: data.color }}
            >
              {data.value} {data.label}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center bg-gray-100 shadow-sm  p-4 dark:bg-[#323232d8]">
        <p className=" font-semibold text-cyan-500 text-2xl  ">
          Task Distribution
        </p>
        <PieChart
          height={250}
          series={[
            {
              data: chartData,
              innerRadius: 70,
              arcLabelMinAngle: 10,
              colors: chartData.map((data) => data.color),
              labelStyle: { fontSize: 14 },
            },
          ]}
          sx={{
            "& text": {
              fill: "black",
            },

            ".dark & text": {
              fill: "white !important",
            },
          }}
        />
      </div>
      <div className="flex flex-col items-center bg-gray-100 shadow-sm  p-4 dark:bg-[#323232d8]">
        <p className=" font-semibold text-cyan-500 text-2xl  ">
          Task Priority Label
        </p>
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: barData.map((data) => data.label),
            },
          ]}
          series={[{ data: barData.map((data) => data.value) }]}
          width={300}
          height={300}
          sx={{
            "& text": {
              fill: "black",
            },
            ".dark & text": {
              fill: "white !important",
            },
          }}
        />
      </div>
    </div>
  );
}

export default TaskStatus;

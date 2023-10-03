"use client";
import "chart.js/auto";
import { ChartData, ChartDataset } from "chart.js/auto";
import { Line } from "react-chartjs-2";

type LineChartData = {
  data: tableRowInterface[];
};

type tableRowInterface = {
  mes: number;
  juros: number;
  totalInvestido: number;
  totalJuros: number;
  totalAcumulado: number;
};

export default function LineChart({ data }: LineChartData) {
  const datasets: ChartDataset<"line", number[]>[] = [
    {
      data: data.map((d) => d.totalAcumulado),
      label: "Total Acumulado",
      pointStyle: false,
    },
  ];
  const labels = data.map((d) => d.mes);

  return (
    <Line
      data={{
        datasets,
        labels,
      }}
    />
  );
}

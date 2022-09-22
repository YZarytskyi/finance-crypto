import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface ChartCoinsProps {
  data: Array<number>;
}
const ChartCoins: React.FC<ChartCoinsProps> = ({ data }) => {
  const options: ApexOptions = {
    chart: {
      animations: {
        enabled: false,
      },
      id: "area-datetime",
      type: "area",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      show: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        opacityFrom: 0.1,
        opacityTo: 0.7,
        stops: [0, 100],
      },
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
      x: {
        show: false,
      },
      y: {
        formatter: function (value) {
          if (value > 5) {
            return value.toFixed(2);
          }
          return value.toFixed(5);
        },
        title: {
          formatter: (seriesName) => "$",
        },
      },
      marker: {
        show: false,
      },
    },

    xaxis: {
      type: "numeric",
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    stroke: {
      show: true,
      curve: "straight",
      width: 2,
    },
  };
  const series = [
    {
      name: "price",
      type: "area",
      data: data,
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width="100%"
      height="60px"
    />
  );
};

export default ChartCoins;

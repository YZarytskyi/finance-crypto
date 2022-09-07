import style from './SelectedCoin.module.scss'
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useAppSelector } from '../../../Store/hooks';


interface ApexChartProps {
  setDays: (e: number | 'max') => void;
}

const ApexChart: React.FC<ApexChartProps> = ({setDays}) => {

  const selectedCoinMarketChart = useAppSelector((state) => state.crypto.selectedCoinMarketChart);
  const marketChart = selectedCoinMarketChart.prices

  const parseNumber = (number: number) => new Intl.NumberFormat("ua-UA").format(number);
  const [chartTime, setChartTime] = useState<number | 'max'>(30)
  
  const series = [
    {
      data: marketChart,
    },
  ]
  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
    },
    yaxis: {
    tickAmount: 6,
    labels: {
        show: true,
        align: 'right',
        style: {
            colors: '#eaeaea',
            fontSize: '12px',
            fontWeight: 400,
        },
        formatter: (value: number) => {
          if (value === 0) {
            return 0
          } else if (value < 1) {
            return value.toFixed(6)
          } else if (value > 1 && value < 100) {
            return value.toFixed(2)
          }
          return parseNumber(value)
        },
    },
    },
    xaxis: {
      show: true,
      type: "datetime",
      labels: {
        style: {
          colors: '#eaeaea',
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
        },
      }
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      style: "hollow",
    },
    stroke: {
      show: true,
      curve: "straight",
      lineCap: "butt",
      width: 2,
      dashArray: 0,
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
      x: {
        format: "dd MMM yyyy",
      },
      y: {
        formatter: function (value:number) {
          if (value > 5) {
            return value.toFixed(2);
          }
          return value.toFixed(5);
        },
        title: {
          formatter: () => "$",
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 0,
        opacityFrom: 0.1,
        opacityTo: 0.7,
        stops: [0, 100],
      },
    },
  }

    return (
      <div className={style.chartTools}>
        <div className={style.inputChartTime}>
          <input type='number' onChange={(e) => setChartTime(Number(e.target.value))}/>
          <button onClick={() => setDays(chartTime)}>Show</button>
        </div>
        <div className={style.chartButtons}>
          <button onClick={() => setDays(1)} >1d</button>
          <button onClick={() => setDays(7)} >7d</button>
          <button onClick={() => setDays(30)} >1m</button>
          <button onClick={() => setDays(183)} >6m</button>
          <button onClick={() => setDays(365)} >1y</button>
          <button onClick={() => setDays('max')} >All</button>
        </div>

        <div>
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
          />
        </div>
      </div>
    );
}

export default ApexChart;

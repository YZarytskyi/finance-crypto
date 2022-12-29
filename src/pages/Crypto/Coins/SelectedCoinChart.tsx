import style from './SelectedCoin.module.scss'
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useAppSelector } from '../../../hooks/redux-hooks';


interface ApexChartProps {
  setDays: (e: number | 'max') => void;
}

const ApexChart: React.FC<ApexChartProps> = ({setDays}) => {

  const selectedCoinMarketChart = useAppSelector((state) => state.crypto.selectedCoinMarketChart);
  const marketChart = selectedCoinMarketChart.prices

  const setNumberFormat = (number: number) => new Intl.NumberFormat("ua-UA").format(number);
  const [chartTime, setChartTime] = useState<number | 'max'>(30)
  
  const series = [
    {
      data: marketChart && marketChart,
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
          if (!value) {
            return 0
          } else if (value < 1) {
            return value.toFixed(6)
          } else if (value > 1 && value < 100) {
            return value.toFixed(2)
          }
          return setNumberFormat(value)
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

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChartTime(Number(e.target.value))
  }

  const onClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDays(chartTime)
  }

    return (
      <div className={style.chartTools}>
        <div className={style.chartButtons}>
          <button type="button" onClick={() => setDays(1)} >1d</button>
          <button type="button" onClick={() => setDays(7)} >7d</button>
          <button type="button" onClick={() => setDays(30)} >1m</button>
          <button type="button" onClick={() => setDays(183)} >6m</button>
          <button type="button" onClick={() => setDays(365)} >1y</button>
          <button type="button" onClick={() => setDays('max')} >All</button>
          <span className={style.inputDays}>
            <input type='number' placeholder='Days' onChange={onChangeInput}/>
            <button type="button" onClick={onClickButton}>Show</button>
          </span>
        </div>

          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={'300vw'}
          />
      </div>
    );
}

export default ApexChart;

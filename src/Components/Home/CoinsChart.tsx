import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useAppSelector } from "../../Store/hooks";

interface ChartHomeProps {
  sparkline: Array<number>;
  coinId: string;
}

const CoinsChart: React.FC<ChartHomeProps> = ({sparkline, coinId}) => {

  const marketsTime = useAppSelector(state => state.crypto.marketsTime)
  const marketsTimeKeys = Object.keys(marketsTime);
  const data = marketsTimeKeys.includes(coinId)
    ? ((marketsTime[coinId] === '168' && sparkline) 
    || (marketsTime[coinId] === '72' && sparkline.slice(-72))
    || (marketsTime[coinId] === '24' && sparkline.slice(-24))) as Array<number>
    : sparkline


    const options: ApexOptions = {
      chart: {
        animations: {
          enabled: false,
        },
        id: "area-datetime",
        type: 'area',
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false,
      }, 
      grid: {
        show: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: "vertical",
          shadeIntensity: 1,
          opacityFrom: 0.1,
          opacityTo: 0.7,
          stops: [0, 100]
        },
      },

      tooltip: {
        enabled: true,
        theme: 'dark',
        style: {
          fontSize: '12px',
          fontFamily: undefined
        },
        x: {
            show: false,
        },
        y: {
            formatter: function(value: number) {
              if (value > 5) {
                return value.toFixed(2)
              }
              return value.toFixed(5)
            },
            title: {
                formatter: () => '$',
            },
        },
        marker: {
            show: false,
        },
      },
      
      xaxis: {
        type: 'numeric',
        labels: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        tickAmount: 1,
      },      
      stroke: {
        show: true,
        curve: 'straight',
        width: 2, 
      },
      states: {
        hover: {
            filter: {
                type: 'none',
            }
        },
      }
      
    };

    const series = [
      {
        name: "price",
        type: "area",
        data: data,
      }
    ]

  if (data) {
    return (
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          width="100%"
          height="100%"
        />
    );
  }
  return null
}

export default CoinsChart;

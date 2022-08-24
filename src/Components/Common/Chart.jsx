import React, { Component, useState } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import './Chart.scss';

const ApexChart = ({markets, coinId}) => {
  const marketsTime = useSelector(state => state.crypto.marketsTime)
  const check = Object.keys(marketsTime);
  const settings = {
    optionsMixedChart: {
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
      grid: {
        show: true,
        position: 'back',
        xaxis: {
            lines: {
                show: false
            },
        },   
        yaxis: {
            lines: {
                show: false
            }
        },  
        padding: {
            top: 8,
            right: 0,
            bottom: 0,
            left: 0,
        },  
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
            formatter: function(value) {
              if (value > 5) {
                return value.toFixed(2)
              }
              return value.toFixed(5)
            },
            title: {
                formatter: (seriesName) => '$',
            },
        },
        marker: {
            show: false,
        },
      },
      
      xaxis: {
        yAxisIndex: 0,
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
        lineCap: 'butt',
        colors: undefined,
        width: 2,
        dashArray: 0,      
      },
      states: {
        hover: {
            filter: {
                type: 'none',
            }
        },
      }
      
    },
    seriesMixedChart: [
      {
        name: "price",
        type: "area",
        data: (check.includes(coinId)) 
        ? ((marketsTime[coinId] === '168' && markets) 
        || (marketsTime[coinId] === '72' && markets.slice(-72))
        || (marketsTime[coinId] === '24' && markets.slice(-24)))
        : (markets)
  }
  ]
}
  if(markets.length !== 0) {
    return (
      <div>
        <Chart
          options={settings.optionsMixedChart}
          series={settings.seriesMixedChart}
          type="line"
          width="135"
          height="60"
        />
      </div>
    );
    }
}

export default ApexChart;

import React from "react"
import ReactApexChart from "react-apexcharts";

const ApexChartMemo = (props) => {
  return(
    <>
  <ReactApexChart
  options={props.options}
  series={props.series}
  type="line"
  width="100%"
  height="100%"
/>
</>
)
}

export default React.memo(ApexChartMemo)
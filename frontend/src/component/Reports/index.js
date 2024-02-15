import {Bar} from "react-chartjs-2";
import Chart from 'chart.js/auto';

import './index.css';



import React from 'react'
import { Tooltip } from "antd";

const labels=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const options={
    plugins:{
        legend:{
            position:'top'
        },title:{
            display:true,text:"Money Tracker"
        }
    }

}
const data={
    labels,datasets:[{
        label:'2022 Expense',
        data:[2000,6000,9000,6000,2000,12000,9000,3000,4000,9000,8000,6000],
        backgroundColor:'pink'
    },
    {
        label:'2023 Expense',
        data:[21000,16000,900,16000,9000,13000,8000,4000,14000,2000,4000,7000],
        backgroundColor:'black'
    }
]
}
function Reports() {
  return (
    <div style={{'height':400,'width':800,'margin':'auto'}}>
      <Bar options={options} data={data}/>
    </div>
  )
}

export default Reports



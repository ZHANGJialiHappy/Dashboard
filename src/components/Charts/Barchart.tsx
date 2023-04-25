import React from 'react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

type Props = {
    width: number;
    height: number;
    horizontal: boolean;
    vertical: boolean;
    data: any[];
}
function Barchart({width, height, horizontal, vertical, data} : Props) {
  return (
    <BarChart width={width} height={height} data={data}>
       <CartesianGrid strokeDasharray="10 10" horizontal={horizontal} vertical={vertical}/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
    <Bar dataKey="Earning" fill="#36B4EA" />
  </BarChart>
  )
}

export default Barchart

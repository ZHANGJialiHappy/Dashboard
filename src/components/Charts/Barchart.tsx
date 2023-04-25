import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import { earningData } from '../../data/dummy'

type Props = {
    width: number;
    height: number;
    horizontal: boolean;
    vertical: boolean;
}
function Barchart({width, height, horizontal, vertical} : Props) {
  return (
    <BarChart width={width} height={height} data={earningData}>
       <CartesianGrid strokeDasharray="10 10" horizontal={horizontal} vertical={vertical}/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
    <Bar dataKey="Earning" fill="#36B4EA" />
  </BarChart>
  )
}

export default Barchart

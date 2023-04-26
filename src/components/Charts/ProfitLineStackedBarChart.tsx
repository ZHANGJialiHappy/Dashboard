import { Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from "recharts";

type Props = {
    width: number;
    height: number;
    horizontal: boolean;
    vertical: boolean;
    data: any;
}

function ProfitLineStackedBarChart({width, height, horizontal, vertical, data} : Props) {
  return (
<ComposedChart
          width={width}
          height={height}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" horizontal={horizontal} vertical={vertical}/>
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Revenue" stackId="a" fill="#8884d8" />
          <Bar dataKey="Expense" stackId="a" fill="#82ca9d" />
          <Line type="monotone" dataKey="profit" stroke="#ff7300" />

        </ComposedChart>
  )
}

export default ProfitLineStackedBarChart;

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { lineChartData } from '../../data/dummy';

type Props = {
    width: number;
    height: number;
    horizontal: boolean;
    vertical: boolean;
}

function Linechart({width, height, horizontal, vertical} : Props) {
  return (
      <LineChart
        width={width}
        height={height}
        data={lineChartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="10 10" horizontal={horizontal} vertical={vertical}/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Users" stroke="#36B4EA" activeDot={{ r: 4 }} />
        <Line type="monotone" dataKey="Unsubscribers" stroke="#FF0000" activeDot={{ r: 4 }}/>
        <Line type="monotone" dataKey="Trial" stroke="#82CA9D" activeDot={{ r: 4 }}/>
      </LineChart>
  )
}

export default Linechart;

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { lineChartData } from '../../data/dummy';

type Props = {
    width: string;
    horizontal: boolean;
    vertical: boolean;
}

function Linechart({width, horizontal, vertical} : Props) {
  return (
    <ResponsiveContainer width={width} aspect={3}>
      <LineChart
        width={250}
        height={150}
        data={lineChartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={horizontal} vertical={vertical}/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Users" stroke="#36B4EA" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Unsubscribers" stroke="#FF0000" />
        <Line type="monotone" dataKey="Trial" stroke="#82CA9D" />

      </LineChart>
    </ResponsiveContainer>
  )
}

export default Linechart;

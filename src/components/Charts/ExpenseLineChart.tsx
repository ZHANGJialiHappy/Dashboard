import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

type Props = {
    width: number;
    height: number;
    horizontal: boolean;
    vertical: boolean;
    data: any;
}

function ExpenseLineChart({width, height, horizontal, vertical, data} : Props) {
    return (
        <div>
            <LineChart
                width={width}
                height={height}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 5,
                    bottom: 0,
                }}
            >
                <Legend />
                <CartesianGrid strokeDasharray="10 10" horizontal={horizontal} vertical={vertical} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Budget" stroke="#36B4EA" activeDot={{ r: 4 }} />
                <Line type="monotone" dataKey="Expense" stroke="#FF0000" activeDot={{ r: 4 }} />
            </LineChart>
        </div>

    )
}
export default ExpenseLineChart;

import { LineChart, Line, BarChart, Bar, XAxis } from 'recharts';
import { earningData, revenueData } from "../data/dummy";
import earning from "../data/earning.svg"

function Dashboard() {
  return (
    <div className="mt-5 m-5 bg-main-bg flex justify-center">
      <div className="m-5">
        <div className="card card-side w-80 bg-base-100 shadow-xl">
          <div className="card-body">
            <p className="font-bold text-gray-400">Earning</p>
            <p className="text-2xl">DKK 40,000</p>
            <div className="card-actions">
              <button className="rounded bg-sky-400 opacity-0.9 text-sky-100 hover:drop-shadow-xl p-2 ">Download</button>
            </div>
          </div>
          <figure><img src={earning} alt="earning" /></figure>
        </div>
        <div className="mt-5">
          <div className="card card-side items-end w-auto bg-base-100 shadow-xl">
            <div className="card-body">
              <p className="font-semibold">Revenue Update</p>
              <div>
                <p>
                  <span className="text-3xl font-semibold">DKK 40,000</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-400">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">DKK 40,000</p>
                <p className="text-gray-400 mt-1">Expense</p>
              </div>
              <LineChart
                width={200}
                height={100}
                data={revenueData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 5,
                  bottom: 0,
                }}
              >
                <Line type="monotone" dataKey="Budget" stroke="#36B4EA" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Expense" stroke="#FF0000" activeDot={{ r: 8 }} />
              </LineChart>
              <div className="card-actions">
                <button className="rounded bg-sky-400 opacity-0.9 text-sky-100 hover:drop-shadow-xl p-2 ">Download Report</button>
              </div>
            </div>
            <div className="bg-gray-200 self-stretch w-0.5 my-20"></div>
            <div className="m-5">
              <p className="text-3xl font-semibold mb-20">Earning</p>
              <BarChart width={200} height={200} data={earningData}>
                <XAxis dataKey="name" />
                <Bar dataKey="Earning" fill="#36B4EA" />
              </BarChart>
            </div>

          </div>



        </div>
      </div>
    </div>
  )
}

export default Dashboard;

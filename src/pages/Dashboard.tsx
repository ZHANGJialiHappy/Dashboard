import { ExpenseLineChart, RevenueBarchart } from "../components";
import layer1 from "../data/layer1.svg";
import { quarterlyRevenueData, quarterlyExpenseData, usersGrowthData } from '../data/dummy';

function Dashboard() {

  return (
    <div className="mt-5 bg-main-bg flex justify-center">
      <div>
        <div className="m-5 flex-wrap flex">
          <div className="card card-side w-80 h-44 bg-base-100 shadow-xl">
            <div className="card-body">
              <p className="font-bold text-gray-400">Revenue</p>
              <p className="text-2xl">DKK 40,000</p>
              <div className="card-actions">
                <button className="rounded bg-sky-400 opacity-0.9 text-sky-100 hover:drop-shadow-xl p-2 ">Download</button>
              </div>
            </div>
            <figure><img src={layer1} alt="earning" /></figure>
          </div>
          <div className="flex ml-5 flex-wrap justify-center gap-3 items-center">
            {usersGrowthData.map((item) => (
              <div key={item.title} className="card w-50 h-44 bg-base-100 shadow-xl">
                <div className="card-body">
                  <button 
                  type="button" 
                  style={{color:item.iconColor, backgroundColor:item.iconBg}}
                  className="text-lg w-8 h-8 opacity-50 rounded-full p-2 hover:drop-shadow-xl">
                    {item.icon}
                  </button>
                  <p className="mt-2">
                    <span className="text-lg font-semibold">{item.amount}</span>
                    <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div>

          </div>
        </div>
        <div className="m-5 flex-wrap flex">
          <div className="card card-side items-end w-auto bg-base-100 shadow-xl">
            <div className="card-body">
              <p className="font-semibold">Expense Update in Quarter</p>
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
              <div className="card-actions">
                <button className="rounded bg-sky-400 opacity-0.9 text-sky-100 hover:drop-shadow-xl p-2 ">Download Report</button>
              </div>
            </div>
            <div className="bg-gray-200 self-stretch w-0.5 my-20"></div>
            <div className="mb-8">
              <ExpenseLineChart width={245} height={200} horizontal={false} vertical={false} data={quarterlyExpenseData} />
            </div>
          </div>
          <div className="card w-72 bg-base-100 shadow-xl ml-5">
            <div className="card-body">
              <p className="font-semibold">Revenue in quarter</p>
              <RevenueBarchart width={245} height={200} horizontal={false} vertical={false} data={quarterlyRevenueData} />
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Dashboard;

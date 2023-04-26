import { ExpenseLineChart, RevenueBarchart } from "../components";
import layer1 from "../data/layer1.svg";
import { quarterlyRevenueData, quarterlyExpenseData } from '../data/dummy';

function Dashboard() {

  return (
    <div className="mt-5 bg-main-bg flex justify-center">
      <div>
        <div className="m-5 flex-wrap flex">
          <div className="card card-side w-82 bg-base-100 shadow-xl">
            <div className="card-body">
              <p className="font-bold text-gray-400">Revenue</p>
              <p className="text-2xl">DKK 40,000.96</p>
              <div className="card-actions">
                <button className="rounded bg-sky-400 opacity-0.9 text-sky-100 hover:drop-shadow-xl p-2 ">Download</button>
              </div>
            </div>
            <figure><img src={layer1} alt="earning" /></figure>
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
              <ExpenseLineChart width={250} height={200} horizontal={false} vertical={false} data={quarterlyExpenseData}/>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl ml-5">
            <div className="card-body">
              <p className="font-semibold">Revenue in quarter</p>
              <RevenueBarchart width={250} height={200} horizontal={false} vertical={false} data={quarterlyRevenueData} />
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Dashboard;

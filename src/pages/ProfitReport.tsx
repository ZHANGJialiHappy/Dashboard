import { ExpenseLineChart, ProfitLineStackedBarChart, RevenueBarchart } from '../components'
import { yearlyExpenseData, yearlyProfitData, yearlyRevenueData } from '../data/dummy';


function ProfitReport() {
    return (
        <div className="flex justify-center">
            <div>
                <p className="m-5 text-3xl flex justify-center"> Yearly Profit Analysis</p>
                <div className="mt-20 card card-side m-5 items-center w-auto justify-center bg-base-100 shadow-xl">
                    <div>
                        <RevenueBarchart width={600} height={250} horizontal={true} vertical={true} data={yearlyRevenueData} />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Yearly Revenue Analysis</h2>
                        <p>20% year-on-year growth.</p>
                        <p>Last year's goal was to grow by 10%</p>
                        <p>Exceeded expectations DKK 40,000</p>
                    </div>
                </div>
                <div className="mt-20 card card-side m-5 items-center w-auto justify-center bg-base-100 shadow-xl">
                    <div>
                        <ExpenseLineChart width={600} height={250} horizontal={true} vertical={true} data={yearlyExpenseData} />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Yearly Expenditure Analysis</h2>
                        <p>5% year-on-year growth.</p>
                        <p>Expected to spend 5% more last year</p>
                        <p>As expected last year</p>
                    </div>
                </div>
                <div className="mt-20 card card-side m-5 items-center w-auto justify-center bg-base-100 shadow-xl">
                    <div>
                        <ProfitLineStackedBarChart width={600} height={250} horizontal={true} vertical={true} data={yearlyProfitData} />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Yearly Profit Analysis</h2>
                        <p>10% year-on-year growth.</p>
                        <p>Expected to spend 5% more last year</p>
                        <p>5% more than last year</p>
                    </div>
                </div>
            </div>
        </div>
        



    )
}

export default ProfitReport;

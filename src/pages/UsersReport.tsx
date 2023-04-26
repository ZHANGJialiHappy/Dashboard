import { UsersLineChart } from "../components";
import { usersData } from "../data/dummy";

function UsersReport() {
  return (

    <div className="flex justify-center">
      <div>
        <p className="m-5 text-3xl flex justify-center"> Yearly Profit Analysis</p>
        <div className="mt-20 card card-side m-5 items-center w-auto justify-center bg-base-100 shadow-xl">
          <div>
            <UsersLineChart width={600} height={400} horizontal={true} vertical={true} data={usersData}/>
          </div>
          <div className="card-body">
          <h2 className="card-title">About users in total</h2>
            <p>20% year-on-year growth.</p>
            <p>Last year's goal was to grow by 10%</p>
            <p>Exceeded expectations 5000 users.</p>
            <h2 className="card-title">About unsubscribers</h2>
            <p>20% year-on-year decrease.</p>
            <p>Last year's goal was to reduce by 10%</p>
            <p>5000 less subscribers.</p>
            <h2 className="card-title">About trials</h2>
            <p>20% year-on-year increase.</p>
            <p>Last year's goal was to growth by 10%</p>
            <p>Exceeded expectations 5000 users in trial.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default UsersReport;

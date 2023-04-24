import Linechart from "../components/Charts/Linechart"

function Home() {
  return (
    <div>
      Here you can see overview of various charts.
      <div className="md:w-full overflow-auto mt-5">
        <Linechart width="50%" />
      </div>
    </div>
  )
}

export default Home

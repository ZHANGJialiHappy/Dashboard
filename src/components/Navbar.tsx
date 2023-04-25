import { Link } from "react-router-dom"

function Navbar() {
  return (
<div className="navbar bg-base-100">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-xl" to="/">Dashboard</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/usersreport">Users' Report</Link></li>
      <li><Link to="/profitreport">Profit Report</Link></li>
    </ul>
  </div>
</div>
  )
}

export default Navbar

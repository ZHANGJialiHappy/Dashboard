import React from 'react'
import { Barchart } from '../components'

function EarningReport() {
  return (
    <div className="mt-5 flex justify-center">
      <div>
      <p className=" m-5 text-3xl flex justify-center"> Users' Report</p>
      <Barchart width={1000} height={500} horizontal={true} vertical={true}/>
      </div>
    </div>
  )
}

export default EarningReport

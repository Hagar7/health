import React, { useEffect, useState } from 'react'
import { BounceLoader } from 'react-spinners'

export default function AnimatedRoutes({children}) {
  const [load,setLoading] = useState(false)
      useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
        }, 2000)
},[])
  return (
    
    <div>
      {load &&
      <BounceLoader color="#33ccff" loading />} 
    </div>
  )
}









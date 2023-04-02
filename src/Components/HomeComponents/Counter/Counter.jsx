import React, { useEffect, useRef, useState } from 'react'
 

export default function Counter({start =0,end,timer=50}) {

    const [count, setCount] = useState(null)
    const ref = useRef(start)
    const accumulator = end / 200;
    const updateCounter = ()=>{
        if(ref.current < end){
            const result = Math.ceil(ref.current + accumulator)
            if(result > end) return setCount(end)
            setCount(result)
            ref.current = result
        }
        setTimeout(updateCounter,timer)
    }

   useEffect(() => {
    let ismounted = true
    if(ismounted){updateCounter()}
    return ()=> ismounted = false
     
   }, [end,start])
   

  return (
   <div className='cnt'>{count}</div>
  )
}

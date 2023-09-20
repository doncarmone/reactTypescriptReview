import React, { useEffect, useRef, useState } from 'react'

type TimerArgs = {
  milisegundos: number
}

export const Timer = ({ milisegundos }: TimerArgs) => {
  const [segundos, setSegundos] = useState(0);

  const ref = useRef<NodeJS.Timeout>()

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    //with the func, the setState will take the argument as the previous value  
    ref.current = setInterval(() => setSegundos(s => s + 1),milisegundos);
    return () => {
      
    }
  }, [milisegundos])
  return (
    <>
        <h4>Timer: <small>{segundos}</small></h4>
    </>
  )
}

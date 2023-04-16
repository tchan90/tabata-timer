import { useState, useEffect } from "react"

export const Timer = (formFields: any) => {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const { prepare, work, rest, cycles } = formFields
    const total = prepare + ((work + rest) * cycles)
    setMinutes(parseInt(Math.floor(total / 60).toString().padStart(2, '0')))
    setSeconds(parseInt(Math.floor(total % 60).toString().padStart(2, '0')))
  }, [formFields])

  return <div>
    {`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
  </div>
}


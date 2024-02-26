import { useEffect, useRef, useState } from "react"


export default function UseReff () {
    const [count, setCount] = useState(0)
    const prevCount = useRef()

    useEffect(() => {
        prevCount.current = count

    },[count])
    const prev = prevCount.current

    return (
        <div>
            <h1>Prev: {prev} next: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}
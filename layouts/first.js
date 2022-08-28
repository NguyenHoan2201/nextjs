import { useState } from "react"

export function FirstLayout({ children }) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3> THIS IS FIRST LAYOUT- count: {count}</h3>
            <button onClick={()=>setCount(count +1)}>increase +</button>
            <main>{children}</main>
        </div>
    )
}
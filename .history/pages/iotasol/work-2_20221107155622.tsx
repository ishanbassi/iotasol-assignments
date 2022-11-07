import { useEffect } from "react"
import { useState } from "react"
export default function App() {
    const [timer,setTimer] = useState(5)
    useEffect(() => {
        setInterval(() => setTimer(prev => prev-1), 1000)
        return clearInterval()
    }
    
    ,[])
    return (
        <>
            <h2>Redirect without using anchor Tag</h2>
            <p>Page Redirection in {timer}</p>
        </>
    )
}
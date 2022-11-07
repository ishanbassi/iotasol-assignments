import { useEffect } from "react"
import { useState } from "react"
import { useRouter } from "next/router"
export default function App() {
    const [timer,setTimer] = useState(5)
    const router = useRouter()
    useEffect(() => {
        const interval  = setInterval(() => setTimer(prev => prev-1), 1000)
        if(timer === 0){
            router.push('work-2-redirection')
        }
        return () =>  clearInterval(interval)
    }
    
    ,[timer])
    
    return (
        <>
            <h2>Redirect without using anchor Tag</h2>
            <p>Page Redirection in {timer}</p>
        </>
    )
}
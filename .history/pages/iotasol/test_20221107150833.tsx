import { useEffect, useState } from "react"
export default function App( ) {
    const [name, setName] = useState('')
    useEffect(() => {
        setName(localStorage.getItem('name'))
    }) 
    
    return (
        <h2>Hi 👋, {name}</h2>
        
    )
}
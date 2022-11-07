import { useState } from "react"
export default function App( ) {
    const [name, setName] = useState(localStorage.getItem('name'))
    
    return (
        <h2>Hi 👋, {name}</h2>
        
    )
}
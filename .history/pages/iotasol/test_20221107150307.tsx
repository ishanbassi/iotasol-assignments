import { useState } from "react"
export default function App( ) {
    const [name, setName] = useState(localStorage.getItem('name'))
    console.log(name)
    return (
        <h1>test</h1>
    )
}
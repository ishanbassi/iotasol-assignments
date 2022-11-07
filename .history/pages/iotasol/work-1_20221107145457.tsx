import { useState } from "react"
import { KeyboardEvent } from "react"
import Head from "next/head"
export default function App() {
    const [name ,setName] = useState('')
    const passValue= () => {

        localStorage.setItem('name',name)
        console.log(localStorage.getItem('name'))
    }
    return (
        <>
           <Head>
                <title>Work 1</title>
            </Head> 
            <h2>Passing value from one page to another without using form</h2>

                <label>
                    Enter your name
                    <input type="text" onInput={(e) => setName(e.target.value)} value={name}/>
                </label>
                <button type="button" onClick={passValue}>Test</button>
                
        
        </>
    )
}
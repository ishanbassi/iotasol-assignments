import { useState } from "react"

import Head from "next/head"
import { useRouter } from "next/router"
export default function App() {
    const [name ,setName] = useState('')
    const router = useRouter()
    const passValue= () => {

        localStorage.setItem('name',name)
        router.push('test')
    }
    return (
        <>
           <Head>
                <title>Work 1</title>
            </Head> 
            <h2>Passing value from one page to another without using form</h2>

                <label>
                    Enter your name
                    <input type="text" onInput={(e:any) => setName(e.target.value)} value={name}/>
                </label>
                <button type="button" onClick={passValue}>Test</button>
                
        
        </>
    )
}
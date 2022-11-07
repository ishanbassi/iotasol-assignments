import { useState, useEffect } from "react"

export default function App() {
    const [framework, setFramework]   = useState('')
    useEffect(() => {
        console.log('hi')
        const selectedRadio = document.querySelector('input[name="framework"]:checked').value
        setFramework(selectedRadio)
    }, [framework])  
    
    return (
        <>

            <h2>Reading Value of Radio button</h2>
            <fieldset>
                <legend>Select your favourite JS framework</legend>    
                <div>
                    <label>React.js<input type="radio" value={'react'} name="framework"></input></label>
                </div>
                <div>
                    <label>Vue.js<input type="radio" value={'vue'} name="framework"></input></label>
                </div>
                <div>
                    <label>Angular.js<input type="radio" value={'angular'} name="framework"></input></label>
                </div>
                
            </fieldset>
            <p>Your favourite JS framework is {framework}.</p>

        </>
    )
}
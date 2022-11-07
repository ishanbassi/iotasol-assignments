import { useState, useEffect } from "react"

export default function App() {
    useEffect(() => {
        const selectedRadio = document.querySelector('input[framework]:checked')
        console.log(selectedRadio)
    })  
    const [framework, setFramework]   = useState('')
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
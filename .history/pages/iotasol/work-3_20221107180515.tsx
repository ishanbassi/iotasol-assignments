import { useState, useEffect } from "react"

export default function App() {
    const [framework, setFramework]   = useState('')
    const showFavFramework = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        console.log(form.get('framework'))
    } 
    
    return (
        <>

            <h2>Reading Value of Radio button</h2>
            <form onSubmit={showFavFramework}>
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
                    <button type="submit">submit</button>
                </fieldset>
            </form>
            <p>Your favourite JS framework is {framework}.</p>

        </>
    )
}
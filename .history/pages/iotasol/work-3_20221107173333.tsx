export default function App() {
    return (
        <>

            <h2>Reading Value of Radio button</h2>
            <fieldset>
                <legend>Select your favourite JS framework</legend>    
                <label><input type="radio" value={'react'} name="framework"></input>React.js</label>
                <label>Vue.js<input type="radio" value={'vue'} name="framework"></input></label>
                <label>Angular.js<input type="radio" value={'angular'} name="framework"></input></label>
            </fieldset>

        </>
    )
}
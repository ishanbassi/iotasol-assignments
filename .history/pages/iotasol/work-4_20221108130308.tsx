import { useState } from "react"
export default function App() {
    const [lang ,setLang] = useState<String[]>()
    const showResult = (e)  => {
        e.preventDefault()
        const form = new FormData(e.target)
        const langs = form.getAll('programming language') as string[]
        setLang(langs)
        e.target.reset()
    }
    return (
        <>
            <h2>Reading the value of dropdowns's selected item.</h2>
            <form onSubmit={showResult}>
                <fieldset>
                    <legend>Select Programming languages you like.</legend>
                    <div>
                        <label>
                        Javascript
                        <input  type="checkbox" value="Javascript" name="programming language"/>
        
                        </label>
                    </div>
                    <div>
                        <label>
                        C++
                        <input type="checkbox" value="C++" name="programming language"/>
        
                        </label>
                    </div>
                    <div>
                        <label>
                            Python
                            <input type="checkbox" value="Python" name="programming language"/>
            
                        </label>
                    </div>
                    <div>
                        <label>
                            Rust
                            <input type="checkbox" value="Rust" name="programming language"/>
            
                        </label>
                    </div>
                    <div>
                        <label>
                            Other
                            <input type="checkbox" value="Other" name="programming language"/>
            
                        </label>

                    </div>
                    <button type="submit" >submit</button>
                </fieldset>
            </form>
            {lang ? <ol>
                You have selected:
                {
                    lang.map(l => {
                        return (
                            <li key={`${l}`}>{l}</li>
                        )
                    })
                }
            </ol>: null}
        </>

    )
}
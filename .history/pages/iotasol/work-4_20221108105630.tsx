export default function App() {
    const showResult = (e)  => {
        e.preventDefault()
        const form = new FormData(e.target)
        console.log(form.get('languages'))
    }
    return (
        <>
            <h2>Reading the value of dropdowns's selected item.</h2>
            <form onSubmit={showResult}>
                
                    <label>
                        Javascript
                        <input type="checkbox" value="Javascript" name="programming language"/>
        
                    </label>
                    <label>
                        C++
                        <input type="checkbox" value="C++" name="programming language"/>
        
                    </label>
                    <label>
                        Python
                        <input type="checkbox" value="Python" name="programming language"/>
        
                    </label>
                    <label>
                        Rust
                        <input type="checkbox" value="Rust" name="programming language"/>
        
                    </label>
                    <label>
                        Other
                        <input type="checkbox" value="Other" name="programming language"/>
        
                    </label>
                
            </form>
        </>

    )
}
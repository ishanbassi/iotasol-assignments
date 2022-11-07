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
                
                    <div><label htmlFor="programming languages">Select Languages you have worked with:</label></div>
                    <select name="languages" id="programming languages">
                        <option value="Javascript">Javascript</option>
                        <option value="Python">Python</option>
                        <option value="C++">C++</option>
                        <option value="Rust">Rust</option>
                        <option value="Other">Other</option>
                    </select>
                    <div><button type="submit">submit</button></div>
                
            </form>
        </>

    )
}
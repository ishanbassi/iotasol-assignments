export default function App() {
    return (
        <>
            <h2>Reading the value of dropdowns's selected item.</h2>
            <form>
                <fieldset>
                    <legend></legend>
                    <select name="languages" id="programming languages">
                        <option value="Javascript">Javascript</option>
                        <option value="Python">Python</option>
                        <option value="C++">C++</option>
                        <option value="Rust">Rust</option>
                    </select>
                </fieldset>
            </form>
        </>

    )
}
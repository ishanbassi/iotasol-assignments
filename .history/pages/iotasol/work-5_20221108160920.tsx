
export default function App() {
    
    const selectAll = (e) => {
        console.log(e.target.labels[0].value)
        const checkboxes = document.querySelectorAll('input[name="programming language"]') as any
        if(e.target.checked){
            checkboxes.forEach(elem => elem.checked = true)    
        }
        else{
            checkboxes.forEach(elem => elem.checked = false)
        }
    }    
    return (
        <>
            
            <form>
                <fieldset>
                    <legend>Select Programming languages you like.</legend>
                     <div>
                        <label>
                            
                            <input type="checkbox" name="selectAll" value={'select all'} onClick={e => selectAll(e)}/>
                            Select All
                        </label>
                     </div>
                    <div>
                        <label>
                        
                        <input  type="checkbox" value="Javascript" name="programming language"/>
                        Javascript
                        </label>
                    </div>
                    <div>
                        <label>
                        
                        <input type="checkbox" value="C++" name="programming language"/>
                        C++
                        </label>
                    </div>
                    <div>
                        <label>
                           
                            <input type="checkbox" value="Python" name="programming language"/>
                            Python
                        </label>
                    </div>
                    <div>
                        <label>
                            
                            <input type="checkbox" value="Rust" name="programming language"/>
                            Rust
                        </label>
                    </div>
                    <div>
                        <label>
                        
                            <input type="checkbox" value="Other" name="programming language"/>
                            Other
                        </label>

                    </div>
                    <button type="submit" >submit</button>
                </fieldset>
            </form>
         
        </>

    )
}
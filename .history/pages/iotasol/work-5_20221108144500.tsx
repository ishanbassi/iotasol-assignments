import { useState } from "react"
export default function App() {
    
    const selectAll = (e) => {
        const checkboxes = document.querySelectorAll('input[name="programming language"]') 
        checkboxes.forEach(elem => console.log(elem))
    }    
    return (
        <>
            
            <form>
                <fieldset>
                    <legend>Select Programming languages you like.</legend>
                     <div>
                        <label>
                            
                            <input type="checkbox" name="selectAll" value={'select all'} onSelect={selectAll}/>
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
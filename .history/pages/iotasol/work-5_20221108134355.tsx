import { useState } from "react"
export default function App() {
    
    
    return (
        <>
            
            <form>
                <fieldset>
                    <legend>Select Programming languages you like.</legend>
                     <div>
                        <label>
                            Select All
                            <input type="checkbox" name="selectAll" value={'select all'}/>
                        </label>
                     </div>
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
         
        </>

    )
}
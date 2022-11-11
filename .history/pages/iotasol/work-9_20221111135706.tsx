import { useState } from "react"

export default function App() {
    const [dropDownValues,setDropDownValues] = useState([['value 1','value 2','value 3','value 4','value 5','value 6','value 7','value 8','value 9','value 10']])
    return(
        <>
            <h2>Dropboxes</h2>
            {dropDownValues.map((val,j) => {
                return(
                    <select name="dropbox" key={j}>
                    { val.map((v, i) => {
                        
                        return (
                                <option key={v} value={v}>{v}</option>
                        )
                    })}
                    </select>
            )})}
        </>

    )
}
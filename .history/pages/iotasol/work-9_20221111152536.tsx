import { useEffect, useState } from "react"

export default function App() {
    const [dropDownValues,setDropDownValues] = useState([])
    useEffect(() => {
        let arr = []
        for(let i=0; i < 10;i++){
            arr.push(['select' ,'value 1','value 2','value 3','value 4','value 5','value 6','value 7','value 8','value 9','value 10'])
        }
        setDropDownValues(arr)
    }, [])
    const updateList = (e,j) => {
        console.log(e.target.value)
    }
    return(
        <>
            <h2>Dropboxes</h2>
            {dropDownValues.map((val,j) => {
                return(
                    <select name="dropbox" key={j} >
                    { val.map((v, i) => {
                        
                        return (
                                <option key={v} value={v} onClick={e => updateList(e,i)}>{v}</option>
                        )
                    })}
                    </select>
            )})}
        </>

    )
}
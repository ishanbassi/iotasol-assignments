import { useEffect, useState, useRef } from "react"

export default function App() {
    const [dropDownValues,setDropDownValues] = useState([])
    const dropDownValuesRef = useRef(dropDownValues)
    useEffect(() => {
        let arr = []
        for(let i=0; i < 10;i++){
            arr.push(['select' ,'value 1','value 2','value 3','value 4','value 5','value 6','value 7','value 8','value 9','value 10'])
        }
        setDropDownValues(arr)
    }, [])
    const updateList = (e,j,i) => {
        console.log(dropDownValuesRef)
        let arrCopy = [...dropDownValues].map(arr => {
            return arr.filter(val => val !== e.target.value)
        })
        setDropDownValues(arrCopy)

    }
    return(
        <>
            <h2>Dropboxes</h2>
            {dropDownValues.map((val,j) => {
                return(
                    <select name="dropbox" key={j} >
                    { val.map((v, i) => {
                        
                        return (
                                <option key={v} value={v} onClick={e => updateList(e,j,i)}>{v}</option>
                        )
                    })}
                    </select>
            )})}
        </>

    )
}
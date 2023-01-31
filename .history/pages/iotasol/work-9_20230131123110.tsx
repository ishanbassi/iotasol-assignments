import { useEffect, useState, useRef, ChangeEvent } from "react"

export default function App() {
    const [dropDownValues,setDropDownValues] = useState([])
    const dropDownValuesRef = useRef([])
    useEffect(() => {
        let arr = []
        for(let i=0; i < 10;i++){
            arr.push(['select' ,'value 1','value 2','value 3','value 4','value 5','value 6','value 7','value 8','value 9','value 10'])
        }
        setDropDownValues(arr)
        dropDownValuesRef.current = arr
    }, [])
    const updateList = (e:ChangeEvent) => {
        console.log(e.target)
        let arrCopy = dropDownValuesRef.current.map(arr => {

            
            return arr.filter(val => val !== e.currentTarget.)
        })
        setDropDownValues(arrCopy)

    }
    return(
        <>
            <h2>Dropboxes</h2>
            {dropDownValues.map((val,j) => {
                return(
                    <select name="dropbox" key={j} onChange={ e => updateList(e)}>
                    { val.map((v, i) => {
                        
                        return (
                                <option key={v} value={v} >{v}</option>
                        )
                    })}
                    </select>
            )})}
        </>

    )
}
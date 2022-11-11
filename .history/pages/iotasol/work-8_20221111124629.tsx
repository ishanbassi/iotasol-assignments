import { Table, Button } from "react-bootstrap"
import { useState , useRef} from "react"

interface userData {
    text:string,
    textarea:string,
    radio:string,
    select:string,
    checkbox:boolean
}
export default function App() {
    const resultRef  = useRef<HTMLTextAreaElement>()
    const [data,setData] = useState<userData[]>([{
        text:'',
        textarea:'',
        radio:'',
        select:'',
        checkbox:false
    }])
    const [textareaData, setTextareaData] = useState<userData[]>()
    const updateData = (e,i) => {
        let value
        if(e.target.type == 'checkbox'){
            value = e.target.checked
            
        }
        
        else{value = e.target.value}
        
        const d = {...data[i], [e.target.type]:value,}
        d['select'] = d['select-one'] || d['select']
        delete d['select-one'] 
        const dataCopy = [...data]
        dataCopy.splice(i,1,d)
        setData(dataCopy)
   
    }
    const insertRow = () => {
        setData(prev => prev.concat({
            text:' ',
            textarea:' ',
            radio:' ',
            select:' ',
            checkbox:false
        }))
    }
    const saveData = () => {
        const dataCopy = data.map(() => {
            return {
            text:' ',
            textarea:' ',
            radio:' ',
            select:' ',
            checkbox:false
        }})
        setTextareaData(data)
        setData(dataCopy)
        const textArea = resultRef.current
        let value = ''
        
        data.forEach(({text,textarea,radio,select,checkbox}) => {
            value += `${text}----${textarea}----${radio}----${checkbox}----${select}\n`
          
        })
        
        textArea.value = value

    }
    const populateData = () => {

    }
    const deleteData = () => {
        setData([{
            text:' ',
            textarea:' ',
            radio:' ',
            select:' ',
            checkbox:false
         }])
    }
    return (
        <>
            <h2>Table and Rows</h2>
            <Table>
                <thead>
                    <tr>
                        <th>textbox</th>
                        <th>texarea</th>
                        <th>radio</th>
                        <th>checkbox</th>
                        <th>Select</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((detail,i) => {
                            return (
                                <tr>
                        <td>
                            <input type="text" name="small" id="small"  value={detail.text} onChange={e => updateData(e,i)} />
                        </td>
                        <td>
                            <textarea name="details" id="details" cols={15} rows={1} value={detail.textarea} onChange={e => updateData(e,i)}></textarea>
                        </td>
                        <td>
                            <div>
                                <label htmlFor={`rd1_${i}`}>rd1</label>
                                <input type="radio" name={`rd_${i}`} id={`rd1_${i}`} value="rd1" onChange={e => updateData(e,i)} checked={detail.radio === 'rd1'}/>
                            </div>
                            <div>
                                <label htmlFor={`rd2_${i}`}>rd2</label>
                                <input type="radio" name={`rd_${i}`} id={`rd2_${i}`} value="rd2" onChange={e => updateData(e,i)}checked={detail.radio === 'rd2'}/>
                            </div>
                            <div>
                                <label htmlFor={`rd3_${i}`}>rd3</label>
                                <input type="radio" name={`rd_${i}`} id={`rd3_${i}`} value="rd3" onChange={e => updateData(e,i)} checked={detail.radio === 'rd3'}/>
                            </div>
                        </td>
                        <td>
                            <label htmlFor="check">checkbox</label>
                            <input type="checkbox" name="check" id="check" checked={detail.checkbox} onChange={e => updateData(e,i)} />
                        </td>
                        <td>
                            <select name="select" id="select" onChange={e => updateData(e,i)} value={detail.select}>
                                <option value="op1">op1</option>
                                <option value="op2">op2</option>
                                <option value="op3">op3</option>
                            </select>
                        </td>
                    </tr>
                            )
                        })
                    }
                    
                </tbody>
            </Table>
            <div className="action-btns">
                <Button  variant="primary" size="sm" type="button" name="save" onClick={saveData}>Save</Button>
                <Button variant="primary" size="sm"  type="button" name="insert" onClick={insertRow}>Insert</Button>
                <Button  variant="primary" size="sm" type="button" name="populate">populate</Button>
                <Button  variant="primary" size="sm" type="button" name="delete" onClick={deleteData}>Delete</Button>
            </div>
            <div className="result-textarea">
                <textarea ref={resultRef} name="result" id="result" cols={60} rows={4}></textarea>
            </div>
            <style jsx>{`
                    label{
                        padding-right:.5em;
                    }
                    .action-btns{
                        padding-top:3em;
                        text-align:center

                    }
                    .result-textarea{
                        padding-top:2em;
                        text-align:center
                    }
                    

                `}

            </style>
        </>
    )
}
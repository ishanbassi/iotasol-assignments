import { Table, Button } from "react-bootstrap"
import { useState } from "react"
import { defaultMaxListeners } from "events"
interface userData {
    textbox:string,
    textarea:string,
    radio1:boolean,
    radio2:boolean,
    radio3:boolean
    select:string,
    checkbox:boolean
}
export default function App() {
    const [data,setData] = useState<userData[]>([{
        textbox:'',
        textarea:'',
        radio1:false,
        radio2:false,
        radio3:false,
        select:'',
        checkbox:false
    }])
    const updateData = (e,i,type) => {
        let value
        if(type == 'checkbox' || type.includes('radio')){
            value = e.target.checked
        }
        else{value = e.target.value}
        
        const d = {...data[i], [type]:value}
        console.log(d)
        const dataCopy = [...data]
        dataCopy.splice(i,1,d)
        setData(dataCopy)
        
    }
    const insertRow = () => {
        setData(prev => prev.concat({
            textbox:'',
            textarea:'',
            radio1:false,
            radio2:false,
            radio3:false,
            select:'',
            checkbox:false
        }))
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
                            <input type="text" name="small" id="small"  value={detail.textbox} onChange={e => updateData(e,i,'textbox')} />
                        </td>
                        <td>
                            <textarea name="details" id="details" cols={15} rows={1} value={detail.textarea} onChange={e => updateData(e,i,'textarea')}></textarea>
                        </td>
                        <td>
                            <div>
                                <label htmlFor={`rd1_${i}`}>rd1</label>
                                <input type="radio" name={`rd_${i}`} id={`rd1_${i}`} value="rd1" onChange={e => updateData(e,i,'radio-1')} checked={detail.radio1}/>
                            </div>
                            <div>
                                <label htmlFor={`rd2_${i}`}>rd2</label>
                                <input type="radio" name={`rd_${i}`} id={`rd2_${i}`} value="rd2" onChange={e => updateData(e,i,'radio-2')}checked={detail.radio2}/>
                            </div>
                            <div>
                                <label htmlFor={`rd3_${i}`}>rd3</label>
                                <input type="radio" name={`rd_${i}`} id={`rd3_${i}`} value="rd3" onChange={e => updateData(e,i,'radio-3')} checked={detail.radio3}/>
                            </div>
                        </td>
                        <td>
                            <label htmlFor="check">checkbox</label>
                            <input type="checkbox" name="check" id="check" checked={detail.checkbox} onChange={e => updateData(e,i,'checkbox')} />
                        </td>
                        <td>
                            <select name="select" id="select" onChange={e => updateData(e,i,'select')}>
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
                <Button  variant="primary" size="sm" type="button" name="save">Save</Button>
                <Button variant="primary" size="sm"  type="button" name="insert" onClick={insertRow}>Insert</Button>
                <Button  variant="primary" size="sm" type="button" name="populate">populate</Button>
                <Button  variant="primary" size="sm" type="button" name="delete">Delete</Button>
            </div>
            <div className="result-textarea">
                <textarea name="result" id="result" cols={60} rows={4}></textarea>
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
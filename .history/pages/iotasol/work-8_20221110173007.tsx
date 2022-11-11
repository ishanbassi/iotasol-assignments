import { Table, Button } from "react-bootstrap"
import { useState } from "react"
interface userData {
    textbox:string,
    textarea:string,
    radio:string,
    select:string,
    checkbox:string
}
export default function App() {
    const [data,setData] = useState<userData[]>([{
        textbox:'',
        textarea:'',
        radio:'',
        select:'',
        checkbox:''
    }])
    const updateData = (e,i,type) => {
        const value = e.target.value
        const d = {...data[i], [type]:value}
        
    }
    const insertRow = () => {
        setData(prev => prev.concat({
            textbox:'',
            textarea:'',
            radio:'',
            select:'',
            checkbox:''
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
                            <textarea name="details" id="details" cols={15} rows={1} ></textarea>
                        </td>
                        <td>
                            <div>
                                <label htmlFor={`rd1_${i}`}>rd1</label>
                                <input type="radio" name={`rd_${i}`} id={`rd1_${i}`} value="rd1" />
                            </div>
                            <div>
                                <label htmlFor={`rd2_${i}`}>rd2</label>
                                <input type="radio" name={`rd_${i}`} id={`rd2_${i}`} value="rd2" />
                            </div>
                            <div>
                                <label htmlFor={`rd3_${i}`}>rd3</label>
                                <input type="radio" name={`rd_${i}`} id={`rd3_${i}`} value="rd3" />
                            </div>
                        </td>
                        <td>
                            <label htmlFor="check">checkbox</label>
                            <input type="checkbox" name="check" id="check" />
                        </td>
                        <td>
                            <select name="select" id="select">
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
import { Table } from "react-bootstrap"
import { useState } from "react"
export default function App() {
    const [count, setCount] = useState(1)
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
                    <tr>
                        <td>
                            <input type="text" name="small" id="small" />
                        </td>
                        <td>
                            <textarea name="details" id="details" cols={15} rows={1}></textarea>
                        </td>
                        <td>
                            <div>
                                <label htmlFor="rd1">rd1</label>
                                <input type="radio" name="rd" id="rd1" value="rd1" />
                            </div>
                            <div>
                                <label htmlFor="rd2">rd2</label>
                                <input type="radio" name="rd" id="rd2" value="rd2" />
                            </div>
                            <div>
                                <label htmlFor="rd3">rd3</label>
                                <input type="radio" name="rd" id="rd3" value="rd3" />
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
                </tbody>
            </Table>
            <style jsx>{`
                    body{
                        background:red;
                    }
                `}

            </style>
        </>
    )
}
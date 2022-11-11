import { Table } from "react-bootstrap"
import { useState } from "react"
export default function App() {
    const [count, setCount] = useState(1)
    return (
        <>
            <h2>Table and Rows</h2>
            <Table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="text" name="small" id="small" />
                        </td>
                        <td>
                            <textarea name="details" id="details" cols={5} rows={5}></textarea>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}
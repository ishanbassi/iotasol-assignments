import { useState } from "react"
import { Container,Row,Col } from "react-bootstrap"
export default function App() {
    const [select1Values, setSelect1Values] = useState([
        'row 1','row 2','row 3','row 4','row 5','row 6','row 7','row 8','row 9','row 10'
    ])
    const [select2Values,setSelect2Values] = useState([])
    return (
        <Container>
            <Row className="mt-5">
                <Col >
                    <label htmlFor="select1">Row 1:</label>
                    <select name="select1" id="select1" multiple size={10}>
                        {
                            select1Values.map(val => {
                                return <option value={val}>{val}</option>
                            })
                        }
                    </select>
                </Col>
                <Col>
                    <label htmlFor="select2">Row 2:</label>
                    <select name="select2" id="select2" multiple size={10}>
                        {
                            select2Values.map(val => {
                                return <option value={val}>{val}</option>
                            })
                        }
                    </select>
                </Col>
            </Row>
        </Container>
    )
}
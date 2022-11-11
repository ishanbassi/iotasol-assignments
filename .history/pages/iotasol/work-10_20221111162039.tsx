import { useState } from "react"
import { Container,Row,Col } from "react-bootstrap"
export default function App() {
    const [select1Values, setSelect1Values] = useState([
        'row 1','row 2','row 3','row 4','row 5','row 6','row 7','row 8','row 9','row 10'
    ])
    const [select2Values,setSelect2Values] = useState([])
    return (
        <Container>
            <Row>
                <Col className="mt-5">
                    <select name="select1" multiple>
                        {
                            select1Values.map(val => {
                                return <option value={val}>{val}</option>
                            })
                        }
                    </select>
                </Col>
                <Col>
                    <select name="select2" >
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
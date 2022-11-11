import { useState } from "react"
import { Container,Row,Col, Button } from "react-bootstrap"
export default function App() {
    const [select1Values, setSelect1Values] = useState([
        'row 1','row 2','row 3','row 4','row 5','row 6','row 7','row 8','row 9','row 10'
    ])
    const moveLeft = () => {

    }
    const moveRight = () => {
        
    }
    const moveAllLeft = () => {
        
    }
    const moveAllRight = () => {
        
    }
    const [select2Values,setSelect2Values] = useState([])
    return (
        <Container>
            <Row className="mt-5">
                <Col md="3">
                    
                    <select name="select1" id="select1" multiple size={10}>
                        {
                            select1Values.map(val => {
                                return <option value={val}>{val}</option>
                            })
                        }
                    </select>
                </Col>
                <Col md="3">
                        <Button size="sm" onClick={moveRight}>moveRight &lt;&lt;</Button>
                        <Button size="sm" onClick={moveLeft}>&gt;&gt; moveLeft</Button>
                        <Button size="sm" onClick={moveAllRight}>moveAllRight &gt;&gt;</Button>
                        <Button size="sm" onClick={moveAllLeft}>Add &lt;&lt;</Button>
                </Col>
                <Col md="3">
                    
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
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
                    
                    <select name="select1" id="select1"  size={10}>
                        {
                            select1Values.map(val => {
                                return <option value={val}>{val}</option>
                            })
                        }
                    </select>
                </Col>
                <Col md="3">
                        <Button size="sm" onClick={moveRight} className="btn-10">moveRight &gt;&gt;</Button>
                        <Button size="sm" onClick={moveLeft} className="btn-10">&lt;&lt; moveLeft</Button>
                        <Button size="sm" onClick={moveAllRight} className="btn-10">moveAllRight &gt;&gt;</Button>
                        <Button size="sm" onClick={moveAllLeft} className="btn-10">moveAllLeft &lt;&lt;</Button>
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
            <style jsx>{`
                        
                        button{
                            
                            margin-bottom:1em !important;
                        }
                `}

            </style>
        </Container>
    )
}
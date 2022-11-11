import { useState } from "react"
import { Container,Row,Col, Button } from "react-bootstrap"
export default function App() {
    const [select1Values, setSelect1Values] = useState([
        'row 1','row 2','row 3','row 4','row 5','row 6','row 7','row 8','row 9','row 10'
    ])
    const [select2Values,setSelect2Values] = useState([])
    const moveLeft = () => {
        const selectElem = document.querySelector('#select2') as HTMLSelectElement
        if(selectElem.selectedOptions.length > 0) {
            const arr  = select2Values.filter(val => val !== selectElem.value)
            setSelect2Values(arr)
            setSelect1Values(prev => prev.concat(selectElem.value))
        }
    }
    const moveRight = (e) => {
        
        const selectElem = document.querySelector('#select1') as HTMLSelectElement
        if(selectElem.selectedOptions.length > 0) {
            const arr  = select1Values.filter(val => val !== selectElem.value)
            setSelect1Values(arr)
            setSelect2Values(prev => prev.concat(selectElem.value))
        }
        
    }
    const moveAllLeft = () => {
        setSelect2Values([])
        setSelect1Values(prev => prev.concat(select2Values))
    }
    const moveAllRight = () => {
        
        
        setSelect1Values([])
        setSelect2Values(prev => prev.concat(select1Values))
    }
    
    return (
        <Container>
            <Row className="mt-5">
                <Col md="3">
                    
                    <select name="select1" id="select1"  size={10}>
                        {
                            select1Values.map((val, i) => {
                                return <option value={val} key={val}>{val}</option>
                            })
                        }
                    </select>
                </Col>
                <Col md="3">
                        <Button size="sm" onClick={moveRight} className="btn-10" disabled={select1Values.length > 0 ? false : true}>moveRight &gt;&gt;</Button>
                        <Button size="sm" onClick={moveLeft} className="btn-10" disabled={select2Values.length > 0 ? false : true}>&lt;&lt; moveLeft</Button>
                        <Button size="sm" onClick={moveAllRight} className="btn-10" disabled={select1Values.length > 0 ? false : true}>moveAllRight &gt;&gt;</Button>
                        <Button size="sm" onClick={moveAllLeft} className="btn-10" disabled={select2Values.length > 0 ? false : true}>moveAllLeft &lt;&lt;</Button>
                </Col>
                <Col md="3">
                    
                    <select name="select2" id="select2"      size={10}>
                        {
                            select2Values.map(val => {
                                return <option value={val} key={val}>{val}</option>
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
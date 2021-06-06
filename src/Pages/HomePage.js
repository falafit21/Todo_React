import React, { useEffect,useState }  from 'react' //usestate like attribute(const), useEffect get parameter = called back
import { Form,Container,Button, Row,Col,Table} from 'react-bootstrap'


export default function HomePage() {
    const [input,setInput] = useState('')
    const [date,setDate] = useState('')
    const [data,setData] = useState([])
    const [number,setNumber] = useState(1)

    const handleInputOnChange=(e)=>{
        // console.log(e.target.value);
        setInput(e.target.value)

    }
    const handleDateOnChange=(e)=>{
        setDate(e.target.value)
        // console.log(e.target.value);
    }
    const HandleBtnSubmitOnClick=(e)=>{
        e.preventDefault();
        console.log(input,date)
        const temp = []
        data.map((key)=>{
            temp.push({
                number:key.number,
                todo:key.todo, 
                date:key.date 
            })
            // setData(temp)

        })
        temp.push({
            number:number,todo:input, date:date 
        })
            setData(temp)
            setNumber(number+1)
        // const temp = [{todo:input, date:date }]
        // setData (temp)

    }

    useEffect (()=>{
        // console.log('useEffect',input);
    },[input])
    return (
        <div>
            <Container>
                <Form>
                <Row>
                    <Col xs={5}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>To-do</Form.Label>
                            <Form.Control type="text" placeholder="Enter what to-do" onChange={handleInputOnChange}/>
                        </Form.Group>
                    </Col>
                    <Col xs={5}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" placeholder="Enter what to-do" onChange={handleDateOnChange}/>
                        </Form.Group>
                    </Col>
                </Row>
                        <Button variant="primary" type="submit" onClick={HandleBtnSubmitOnClick}>
                            Submit
                        </Button>
                </Form>
                <br/>
                <Row>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Activities</th>
                            <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                data.map((key,index)=>{
                                    return(
                                        <tr>
                                            <td>{key.number}</td>
                                            <td>{key.todo}</td>
                                            <td>{key.date}</td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </Table>

                </Row>
            </Container>
        </div>
    )
}

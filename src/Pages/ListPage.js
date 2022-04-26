import React, { useState,useEffect } from 'react'
import {Container,Table} from 'react-bootstrap'
export default function ListPage() {
    return (
        <div>
            <Container>
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

            </Container>
            List
        </div>
    )
}

import React, { Component } from "react";

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class DisplayList extends Component {
    constructor() {
        super();
        this.state = {};
    }

    // renders a card for each course
    createCourses = (item, idx) => {
        var writ = 'No';
        if (item.writ) { writ = 'Yes' }
        return (
            <Col xs={6} sm={6} md={4} lg={4} className='my-2 mx-0 px-1' key={idx}>
                <Card border="dark" style={{ width: '20 rem' }} className="h-100">
                    <Card.Body className="px-0 pt-0">
                        <Card.Img variant="top" src={item.img} />
                        <Card.Title className="mx-3 mt-3">{item.name}</Card.Title>
                        <Card.Subtitle className="mb-4 text-muted mx-3">{item.num}</Card.Subtitle>
                        <Card.Text className="mx-3"><b>Department: </b>{item.department}</Card.Text>
                        <Card.Text className="mx-3"><b>Avg. Time Committment: </b><br></br>{item.time} hrs/week</Card.Text>
                        <Card.Text className="mx-3"><b>Instruction Mode: </b>{item.teaching}</Card.Text>
                        <Card.Text className="mx-3"><b>WRIT: </b>{writ}</Card.Text>
                        <Button variant="outline-primary" onClick={() => this.props.addCourse(item)} className="mx-3">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
        );
    };
    
    render() {
        const listCourses = this.props.list.map(this.createCourses);
        return (
            <Container className="my-3">
                <Row>
                    {listCourses}
                </Row>
            </Container>
        );
    }
  }
  
  export default DisplayList;
  
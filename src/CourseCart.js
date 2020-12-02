import React, { Component } from "react";

import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

class CourseCart extends Component {
    constructor() {
        super();
        this.state = {};
    }

    // rendering function for each item in array
    createCart = (item, idx) => {
        return (
            <ListGroup.Item key={idx} action={false}>
                <b>{item.num}</b> {item.name} <br></br>
                <Button variant="warning"onClick={() => this.props.removeCourse(item)} style={{display: 'flex', marginLeft: "auto"}}>Remove</Button>
            </ListGroup.Item>
        )
    }
    
    render() {
        const cart = this.props.list.map(this.createCart)
        // calculate the sum of time committment
        let sumTime = this.props.list.reduce((acc, curr) => acc + curr.time, 0);
        sumTime = (Math.round(sumTime * 100) / 100).toFixed(2);
        return (
            <Container className="my-3">
                <h3 className="display-5">Course Cart</h3>
                <hr/>
                    <ListGroup activeKey="-1">
                        {cart}
                    </ListGroup>
                <hr />
                <b>Total Time Committment: </b>{sumTime} hrs/week
            </Container>
        );
    }
  }
  
  export default CourseCart;
  
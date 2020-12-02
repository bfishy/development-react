import React, { Component } from "react";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

import DisplayList from './DisplayList.js';

class FilteredList extends Component {
    constructor() {
        super();
        this.state = {
            mode: "all",
            writ: "all",
            sort: "Select",
        };
    }

    // function that filters for the instruction mode
    onSelectFilterMode = event => {
        this.setState({
            mode: event
        })
    }

    // function that filters for WRIT courses
    onSelectFilterWrit = event => {
        if (event === 'true'){
            this.setState({
                writ: true
            })
        } else {
            this.setState({
                writ: false
            })
        }
    }

    // helper that determines whether to include item based on filters
    matchesFilter = item => {
        const {mode, writ} = this.state;
        if (mode === 'all' && writ === 'all') {
            return true;
        } else if (((item.teaching === mode) || (mode === 'all')) 
        && ((writ === 'all') || (item.writ === writ))) {
            return true;
        } else {
            return false;
        }
    }

    // function that stores the sorting order
    onSelectSort = event => {
        this.setState({
            sort: event
        })
    }

    // the compare method for sorting when sorting from low to high
    compareLH = (courseA, courseB) => {
        if (courseA.time < courseB.time) {
            return -1;
        } else if (courseA.time > courseB.time) {
            return 1;
        } else {
            return 0;
        }
    }

    // the compare method for sorting when sorting from high to low
    compareHL = (courseA, courseB) => {
        if (courseA.time < courseB.time) {
            return 1;
        } else if (courseA.time > courseB.time) {
            return -1;
        } else {
            return 0;
        }
    }

    // funtion that dynamically generates a DisplayList based on the selected sorting order
    genSorted = () => {
        let copyCourse = [...this.props.courses.filter(this.matchesFilter)];
        if (this.state.sort === 'Select') {
            return (<DisplayList list={copyCourse} addCourse={this.props.addCourse}/>);
        } else if (this.state.sort === 'Lowest to Highest') {
            return (<DisplayList list={copyCourse.sort(this.compareLH)} addCourse={this.props.addCourse}/>);
        } else {
            return (<DisplayList list={copyCourse.sort(this.compareHL)} addCourse={this.props.addCourse}/>);
        }
    }

    render() {
        return (
            <div className="mx-3">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>Teaching Mode: </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav defaultActiveKey="all" className="mr-auto">
                            <Nav.Item><Nav.Link eventKey="all" onSelect={this.onSelectFilterMode}>All</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="Hybrid" onSelect={this.onSelectFilterMode}>Hybrid</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="Remote" onSelect={this.onSelectFilterMode}>Remote</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>ＷRIT: </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav defaultActiveKey="all" className="mr-auto">
                            <Nav.Item><Nav.Link eventKey="all" onSelect={this.onSelectFilterWrit}>All</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey={ true } onSelect={this.onSelectFilterWrit}>WRIT Courses</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey={ false } onSelect={this.onSelectFilterWrit}>Non-WRIT Courses</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>Sort by Time Committment: </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav defaultActiveKey="0" className="mr-auto">
                            <NavDropdown title={this.state.sort} id="nav-dropdown">
                                <NavDropdown.Item eventKey="Select" onSelect={this.onSelectSort}>Select</NavDropdown.Item>
                                <NavDropdown.Item eventKey="Lowest to Highest" onSelect={this.onSelectSort}>Lowest to Highest</NavDropdown.Item>
                                <NavDropdown.Item eventKey="Highest to Lowest" onSelect={this.onSelectSort}>Highest to Lowest</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {this.genSorted()}
                
            </div>
        );
    }
}
  
export default FilteredList;
  
import React, { useState } from 'react';
//import Button from 'react-bootstrap/Button';
import { Button, Form, Container, Row, Col, FormSelect, Dropdown, DropdownButton } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Zip from 'react-zipcode';

const Home = () => {
    const [result,setResult] = useState("");
    const {register, handleSubmit, trigger, formState} = useForm();
    const onSubmit = data => {console.log(data)};
    const onError = (errors, e) => console.log(errors, e);

    // Messages
    const required = "This field is required";
    const maxLength = "Your input exceed maximum length";

    // Error Component
    const errorMessage = error => {
        return <div className="invalid-feedback">{error}</div>;
    };

    return (
        <div>
            <Container> 
                <h2>CSC 642 848 Fall 2021 Individual Assignment Alfonso Duarte-Sarabia</h2>
                <h3>Data Survey Form</h3>
                <br></br>
            <Form onSubmit={handleSubmit(onSubmit,onError)}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formLastName">
                        {/* <Form.Label>Last Name</Form.Label> */}
                        <Form.Control type="text" placeholder="Last Name" className="lastName"
                        {...register("lastName", {required: true, maxLength: 40, pattern: /^[A-Za-z]+$/i})}>
                        </Form.Control> 
                        {/* <Form.Text className="text-muted">Enter email</Form.Text> */}
                        {formState.errors.lastName && <p>{required}</p>}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formFirstName">
                        {/* <Form.Label>First Name</Form.Label> */}
                        <Form.Control type="text" placeholder="First Name" 
                        {...register("firstName", {required: true, maxLength: 40, pattern: /^[A-Za-z]+$/i})}>
                        </Form.Control>
                        {formState.errors.firstName && <p>{required}</p>}
                        </Form.Group>
                    </Col>
                </Row>
                {/* <Form.Group className="mb-3" controlId="form"> */}
                {/* <FormSelect className="mb-3" aria-label="Default select example" {...register("title")}> */}
                {/* <Dropdown>
                        <Dropdown.Toggle variant="success" className="mb-3" {...register("title")}>
                           Select Preferred Title
                        </Dropdown.Toggle>
                    <Dropdown.Menu>
					<Dropdown.Item>None</Dropdown.Item>
					<Dropdown.Item>Student</Dropdown.Item>
					<Dropdown.Item>Professor</Dropdown.Item>
                    <Dropdown.Item>Staff</Dropdown.Item>
				    </Dropdown.Menu>
                </Dropdown> */}
                {/* </FormSelect> */}
                {/* </Form.Group> */}
                <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="formAddress" {...register("address")}>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="" required="required"></Form.Control>
                        {/* {formState.errors.address && <p>{required}</p>} */}
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="formZipcode" {...register("zipcode", 
                     {maxLength:5})} >
                        <Form.Label>Zip Code</Form.Label>
                        {/* <Form.Control type="text" placeholder="" required='true'></Form.Control> */}
                        {/* {formState.errors.zipcode && <p>{required}</p>} */}
                        <Form.Control type="number" maxLength='5' required="true"></Form.Control>
                    </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicEmail" {...register("email", 
                {required: true, pattern: /^\S+@\S+$/i})}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="example@email.com" required="true"></Form.Control>
                </Form.Group>   
                <Form.Group>
                    <Form.Check 
                    type="checkbox"
                    required='true'
                    label='I Agree to Terms and Conditions'
                   />
                </Form.Group>
                <Button variant="primary" type="submit" 
                 
                >Submit Form</Button>
            </Form>
            </Container>
            <p>{result}</p>
        </div>  
    );
}

// async () => {const result = await trigger(["firstName", "lastName","title","address","zipcode" ,"email"]);}

export default Home;
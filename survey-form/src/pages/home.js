import React from 'react';
//import Button from 'react-bootstrap/Button';
import { Button, Form, Container, Row, Col, FormSelect } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Home = () => {
    const {register, handleSubmit, trigger} = useForm();
    const onSubmit = data => console.log(data);
    const onError = (errors, e) => console.log(errors, e);

    return (
        <div>
            <Container>
                <h2>Survey Form</h2>
                <br></br>
            <Form onSubmit={handleSubmit(onSubmit,onError)}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formLastName">
                        {/* <Form.Label>Last Name</Form.Label> */}
                        <Form.Control type="text" placeholder="Last Name" 
                        {...register("lastName", {required: true, maxLength: 40, pattern: /^[A-Za-z]+$/i})}>
                        </Form.Control>
                        {/* <Form.Text className="text-muted">Enter email</Form.Text> */}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formFirstName">
                        {/* <Form.Label>First Name</Form.Label> */}
                        <Form.Control type="text" placeholder="First Name" 
                        {...register("firstName", {required: true, maxLength: 40, pattern: /^[A-Za-z]+$/i})}>
                        </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                {/* <Form.Group className="mb-3" controlId="form"> */}
                <FormSelect className="mb-3" aria-label="Default select example" {...register("title")}>
                        <option>Select Preferred Title</option>
                        <option value="none">None</option>
                        <option value="student">Student</option>
                        <option value="professor">Professor</option>
                        <option value="staff">Staff</option>
                        <option value="retired">Retired</option>
                </FormSelect>
                {/* </Form.Group> */}
                <Form.Group className="mb-3" controlId="formAddress" {...register("address")}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder=""></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" {...register("email")}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="example@email.com"></Form.Control>
                </Form.Group>   
                <Button variant="primary" type="submit" 
                onClick={async () => {const result = await trigger(["firstName", "lastName"]);}}>Enter</Button>
            </Form>
            </Container>
        </div>  
    );
}

export default Home;
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Container, Row, Col, Dropdown} from 'react-bootstrap';
import Zip from 'react-zipcode';

export default function Survey() {
  const { register, handleSubmit, formState} = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));
//   const { step, firstName, lastName, email, address, city, state, zip } = this.state;
//   const inputValues = { firstName, lastName, email, address, city, state, zip };

  return (
    <Container>
        <h2>CSC 642 848 Fall 2021 Individual Assignment Alfonso Duarte-Sarabia</h2>
        <h3>Data Survey Form</h3>
        <br></br>   
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
            <Form.Group as={Col} controlId="formFirstName">
                <Form.Label className="firstname">First Name</Form.Label>
                <Form.Control
                type="text"
                {...register("firstname", {maxLength: 40, pattern: /^[A-Za-z]+$/i}) }
                required
                />
                {formState.errors.firstname && <p>Please provide a correct name.</p>}
            </Form.Group>

            <Form.Group as={Col} controlId="formLastName">
                <Form.Label className="lastname">Last Name</Form.Label>
                <Form.Control
                type="text"
                {...register("lastname", {maxLength: 40, pattern: /^[A-Za-z]+$/i}) }
                required
                />
                {formState.errors.lastname && <p>Please provide a correct name.</p>}
            </Form.Group>
        </Row>

        <Row>
        <Form.Group as={Col} className="mb-3" controlId="formAddress">
            <Form.Label className="address">Address</Form.Label>
            <Form.Control type="text" {...register("address")} required></Form.Control>
        </Form.Group>      

        <Form.Group as={Col} className="mb-3" controlId="formCity">
            <Form.Label className="city">City</Form.Label>
            <Form.Control type="text" {...register("city")} required></Form.Control>
        </Form.Group>  

        <Form.Group as={Col} className="mb-3" controlId="formState">
            <Form.Label className="state">State</Form.Label>
            <Form.Control type="text" {...register("state")} required></Form.Control>
        </Form.Group>    
        
        <Form.Group as={Col} className="mb-3" controlId="formZipCode">
            <Form.Label className="zipcode">Zip Code</Form.Label>
            <Form.Control type="text" 
            {...register("zipcode", {maxLength:5,minLength:4, pattern: /^[0-9]+$/i})} required></Form.Control>
            {formState.errors.zipcode && <p>Please provide a valid zip.</p>}
        </Form.Group>
        </Row>

        <Form.Group controlId="formEmail"  className="mb-3">
            <Form.Label className="email">Email Address</Form.Label>
            <Form.Control
            type="email"
            name="email"
            {...register("email", {pattern: /^\S+@\S+$/i})}
            required
            />
        </Form.Group>

        <Form.Group className="mb-3">
            <Dropdown title='Select Preferred Title' {...register("title")} required>
            <Dropdown.Toggle className="mb-3">
            </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>hh</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Form.Group>

        <Form.Group className="mb-4">
            <Form.Check 
                type="checkbox"
                required='true'
                label='I agree to'
            />
            <a href="#">Terms and Conditions</a>
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
    </Form>
    <p>{result}</p>
    </Container>
  );
}
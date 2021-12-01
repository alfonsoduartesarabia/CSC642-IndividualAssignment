import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Container, Row, Col} from 'react-bootstrap';
import useFormPersist from 'react-hook-form-persist';
import { useNavigate } from "react-router-dom";
import { useAuth } from './Auth';
import ReCAPTCHA from 'react-google-recaptcha';

import './survey.css';

//   const { step, firstName, lastName, email, address, city, state, zip } = this.state;
//   const inputValues = { firstName, lastName, email, address, city, state, zip };

export default function Survey() {
  const { register, handleSubmit, watch,setValue,formState} = useForm();
  const [result, setResult] = useState("");
  const [none, setNone] = useState(true);
  const [professor, setProfessor] = useState(false);
  const [student, setStudent] = useState(false);
  const [staff, setStaff] = useState(false);

  const [captcha, setCaptcha] = useState(false);
  let navigate = useNavigate();

  const onSubmit = async (data) =>    
  {
    useAuth.completed(() => {
        setResult(JSON.stringify(data));
        navigate('/verification');
    });
  };

  function onChange() {
    setCaptcha(true);
    //console.log("Captcha value:", value);
  }

  function onProffesorChange(){
    setProfessor(true);
    setStudent(false);
    setStaff(false);
    setNone(false);
  }
  function onStudentChange(){
    setStudent(true);
    setProfessor(false);
    setStaff(false);
    setNone(false);
  }
  function onStaffChange(){
    setStaff(true);
    setProfessor(false);
    setStudent(false);
    setNone(false);
  }
  function onNoneChange(){
    setNone(true);
    setProfessor(false);
    setStudent(false);
    setStaff(false);
  }

  useFormPersist('Form',{watch,setValue});

  return (
    <div className="div-form">
    <h2>CSC 642 848 Fall 2021 Individual Assignment Alfonso Duarte-Sarabia</h2>
    <h3>Data Survey Form</h3>
    <br></br>   
    <Container className='Container'>
    <Form onSubmit={handleSubmit(onSubmit)} className="form">
        <Row>
            <Form.Group as={Col} controlId="formFirstName" className='mb-4'>
                <Form.Label className="firstname">First Name</Form.Label>
                <Form.Control
                type="text"
                {...register("firstname", {maxLength: 40, pattern: /^[A-Za-z]+$/i}) }
                required
                />
                {formState.errors.firstname && <p className="errors">Please provide a correct name.</p>}
            </Form.Group>

            <Form.Group as={Col} controlId="formLastName" className='mb-4'>
                <Form.Label className="lastname">Last Name</Form.Label>
                <Form.Control
                type="text"
                {...register("lastname", {maxLength: 40, pattern: /^[A-Za-z]+$/i}) }
                required
                />
                {formState.errors.lastname && <p className="errors">Please provide a correct name.</p>}
            </Form.Group>
        </Row>

        <Form.Label className="title">Choose Title</Form.Label>
        <Form.Group as={Col} className="mb-4">
                <Form.Check
                    type='checkbox'
                    label='None'
                    checked={none}
                    onChange={onNoneChange}
                >
                </Form.Check>

                <Form.Check
                    type='checkbox'
                    label='Professor'
                    checked={professor}
                    onChange={onProffesorChange}
                >
                </Form.Check>
                <Form.Check
                    type='checkbox'
                    label='Student'
                    checked={student}
                    onChange={onStudentChange}
                >
                </Form.Check>

                <Form.Check
                    type='checkbox'
                    label='Staff'
                    checked={staff}
                    onChange={onStaffChange}
                >
                </Form.Check>
            </Form.Group>

            <Form.Label className="height">Height</Form.Label>
        <Row>
            <Form.Group as={Col} className="mb-4">
                <Form.Label className="feet">Feet</Form.Label>
                <Form.Control
                    type="text"
                    {...register("feet", {maxLength: 2,minLength: 1, pattern: /^[0-9]+$/i}) }
                />
                {formState.errors.feet && <p className="errors">Plase provide a valid height.</p>}
            </Form.Group>

            <Form.Group as={Col} className="mb-4">
                <Form.Label className="inches">Inches</Form.Label>
                <Form.Control
                    type="text"
                    {...register("inches", {maxLength: 4,minLength: 1, pattern: /^[0-9]+$/i}) }
                />
                {formState.errors.inches && <p className="errors">Plase provide a valid height.</p>}
            </Form.Group>
        </Row>

        <Form.Group className="mb-4">
            <Form.Label className="phone">Phone Number</Form.Label>
            <Form.Control
                type="text"
                {...register("phone", {maxLength: 10,minLength: 10, pattern: /^[0-9]+$/i}) }
            />
            {formState.errors.phone && <p className="errors">Plase provide a valid phone number.</p>}
        </Form.Group>

        <Row>
        <Form.Group as={Col} className="mb-3" controlId="formAddress">
            <Form.Label className="address">Address</Form.Label>
            <Form.Control type="text" {...register("address")} required className="address"></Form.Control>
        </Form.Group>      

        <Form.Group as={Col} className="mb-2" controlId="formCity">
            <Form.Label className="city">City</Form.Label>
            <Form.Control type="text" {...register("city")} required></Form.Control>
        </Form.Group>  

        <Form.Group as={Col} className="mb-2" controlId="formState">
            <Form.Label className="state">State</Form.Label>
            <Form.Control type="text" {...register("state")} required></Form.Control>
        </Form.Group>    
        
        <Form.Group as={Col} className="mb-2" controlId="formZipCode">
            <Form.Label className="zipcode">Zip Code</Form.Label>
            <Form.Control type="text" 
            {...register("zipcode", {maxLength:5,minLength:4, pattern: /^[0-9]+$/i})} required></Form.Control>
            {formState.errors.zipcode && <p className="errors">Please provide a valid zip.</p>}
        </Form.Group>
        </Row>

        
        <Row>
        <Form.Group as={Col} className="mb-4">
        <Form.Label className="title">Choose Services You Require</Form.Label>
                <Form.Check
                    type='checkbox'
                    label='Email'
                >
                </Form.Check>

                <Form.Check
                    type='checkbox'
                    label='Phone'
                >
                </Form.Check>
                <Form.Check
                    type='checkbox'
                    label='Facebook'
                >
                </Form.Check>

                <Form.Check
                    type='checkbox'
                    label='Twitter'
                >
                </Form.Check>

                <Form.Check
                    type='checkbox'
                    label='Surface Email'
                >
                </Form.Check>

                <Form.Check
                    type='checkbox'
                    label='Personal Visit'
                >
                </Form.Check>
            </Form.Group>

        <Form.Group as={Col} className="mb-4">
        <Form.Label className="title">Monthly Budget for Services</Form.Label>
                <Form.Check
                    type='checkbox'
                    label='Less than $50'
                >
                </Form.Check>

                <Form.Check
                    type='checkbox'
                    label='Between $50 and $100'
                >
                </Form.Check>
                
                <Form.Check
                    type='checkbox'
                    label='Above $100'
                >
                </Form.Check>
            </Form.Group>
        </Row>

            <Form.Group as={Col} controlId="formEmail"  className="email">
                <Form.Label className="email">Email Address</Form.Label>
                <Form.Control
                className="email-form"
                type="email"
                name="email"
                {...register("email", {pattern: /^\S+@\S+$/i})}
                required
                />
            </Form.Group>

        {/* <Form.Group className="mb-4">
            <Form.Check 
                type="checkbox"
                required='true'
                label='I agree to'
            />
            <a href="/">Terms and Conditions</a>
        </Form.Group>    */}

        <div className="tacbox">
        <input id="checkbox" type="checkbox"  required/>
        <label for="checkbox"> I agree to these <a href="/">Terms and Conditions</a>.</label>
        </div>

        <ReCAPTCHA 
        sitekey='6LfA-modAAAAAFgzH3RrMtomnEAcQ_Inpgy5A871' 
        size='normal'
        onChange={onChange}
        className='captcha'
        />
        <div  className='submit-button'>
        <Button variant="primary" type="submit" disabled={!captcha}>Submit</Button>
        </div>
    </Form>
    {/* <p>{result}</p> */}
    </Container>
    </div>
  );
}
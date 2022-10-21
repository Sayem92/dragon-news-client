import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const [error, setError] = useState('');
    const {signIn, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleSubmit = (e) =>{
        e.preventDefault();

        const form = e.target;
       
        const email = form.email.value;
        const password = form.password.value;
        // console.log( email, password);

        signIn(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            setError('');
            console.log(user);
            if(user?.emailVerified){
                navigate(from, {replace: true});
            }
            else{
                toast.error('Your email is not verified Please verify your email')
            }
        })
        .catch(error => { 
            console.log(error);
            setError(error.message);
        })
        .finally( () => {
            setLoading(false)
        })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
    
                <Button variant="primary" type="submit">
                   Login
                </Button>
                <Form.Text className="text-danger">
                       <p>{error}</p>
                 </Form.Text>
            </Form>
        </div>
    );
};

export default Login;
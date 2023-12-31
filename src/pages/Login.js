import classes from './Login.module.css';
import Button from '../UI/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login () {

    const [formData, setFormData] = useState({userName: '', password: ''});

        
    const navigate = useNavigate();
    const submitHandler = async(event) => {
        event.preventDefault();
        let token = '';
        // console.log(formData.userName, formData.password);
        try{
            const response = await fetch('https://dummyjson.com/auth/login', 
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {username: formData.userName,
                    password: formData.password})
            }            
            );

            if (response.ok) {
                // console.log('Login successful!');
                localStorage.setItem('authToken', token);
            }
            else {
                console.error('Login failed');
            }
        }
        catch (error){
            console.error('ERROR:', error);
        }
        navigate('/tasks');
    };

    const onChangeHandler = (event) => {
        const {id, value} = event.target;
        setFormData({...formData, [id]: value });

    };
return (
    <>
    <form onSubmit={submitHandler}>
        <div className={classes.login}>
            <h4 className={classes.heading} >Sign in</h4>
            
            <input type="text" 
            id="userName" 
            className={classes.input} 
            value={formData.userName} 
            placeholder='        UserName'
            onChange={onChangeHandler}
            autoComplete = "off"
            required />

            <input type='password' 
            id="password" 
            className={classes.input} 
            value={formData.password} 
            placeholder='        Password'
            onChange={onChangeHandler}
            autoComplete = "off"
            required />

            <Button type="submit" className= "buttonAuth" >Sign in</Button>
            
        </div>
    </form>
    {/* <a >New here? Register now</a> */}
    <Link to= "register" className={classes.link}> New here? Register now</Link>
    </>
)
}
export default Login;
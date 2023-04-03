import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password,setPassowrd] = useState('');

    const handleSubmit = (event) => {
       

        event.preventDefault();
        

        if(email.length < 1){
           alert('Email is required');
        }
       
        else if(password.length <6){
            alert('Password can not be less than six characters');
        }
        else{
            const userInfo = {
                
                email: email,
                password: password
            }
        
           
            // post api call

        // axios.post("/login", userInfo)
        // .then(res => {
            // localStorage.setItem('jwt',res.data.jwt);
            // console.log(res)
        // });

        }


    }

    return (
        <div>
            <h1 className='mt-5 reg-hed-text-style'>Login successfully by filling the below form</h1>

            <div className='w-100 mt-5 mx-auto text-center'>

                <form onSubmit={handleSubmit}>

              
                

              <div className='mb-3'>
              <TextField id="standard-basic" type="email" onChange={(e)=>setEmail(e.target.value)} className='w-50' label="Email" variant="standard" />
              </div>

               

               <div className='mb-5'>
               <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            className='w-50'
            variant="standard"
            onChange={(e)=>setPassowrd(e.target.value)}
            />
               </div>

               <input type="submit" className='sbmt-btn-style'></input>
              

                </form>

            </div>

            
        </div>
    );
};

export default Login;
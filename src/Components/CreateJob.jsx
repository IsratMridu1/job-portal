import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';


const CreateJob = () => {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const handleSubmit = (event) => {
       

        event.preventDefault();
        

        if(title.length < 1){
           alert('Job title is required');
        }
       
        else if(description.length <6){
            alert('Job description is required');
        }
        else{
            const jobInfo = {
                
                title: title,
                description: description
            }
        
           
            // post api call

        // axios.post("/createJob", jobInfo)
        // .then(res => {
          
            // console.log(res)
        // });

        }


    }



    return (
        <div>
        <h1 className='mt-5 reg-hed-text-style'>Create a job post successfully by filling the below form</h1>

        <div className='w-100 mt-5 mx-auto text-center'>

            <form onSubmit={handleSubmit}>

          
            

          <div className='mb-5'>
          <TextField id="standard-basic" type="text" onChange={(e)=>setTitle(e.target.value)} className='w-50' label=" Job Title" variant="standard" />
          </div>

          <div className='mb-5'>

          <TextareaAutosize
          placeholder='Job Description'
          className='w-50'
          minRows={8}
          onChange={(e)=>{
            setDescription(e.target.value)
          }}
          
          />


          </div>

           

       

           <input type="submit" className='sbmt-btn-style'></input>
          

            </form>

        </div>

        
    </div>
    );
};

export default CreateJob;
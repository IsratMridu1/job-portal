import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';


const ViewJob = () => {

    const [jobs,setJobs] = useState([]);

    useEffect(()=>{
        axios.get('/allJobs')
        .then(res => setJobs(res.data.result));
    },[])

    const handleDelete = (data) => {
        
        // delete api

        // axios.delete(`/deletejob/${data.title}`)
        // .then(res => {
        //     console.log(res);
        //     const newData = jobs.filter(job => job.title !== data.title);
        //     setJobs(newData)
        // })
    }


    return (
        <div>
        <h1 className='mt-5 reg-hed-text-style'>Below are the job opening for available positions at our company.</h1>

        {
            jobs.map(job => (

                <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                     Title: {job?.title}
                  </Typography>
                  <Typography variant="h5" component="div">
                    Description: {job?.description}
                  </Typography>
                  
                </CardContent>
                <CardActions>
                <Button variant="outlined" color="error" onClick={()=>handleDelete(job)}>
                Delete
                </Button>
                </CardActions>
              </Card>

            ))
        }

       

        
    </div>
    );
};

export default ViewJob;
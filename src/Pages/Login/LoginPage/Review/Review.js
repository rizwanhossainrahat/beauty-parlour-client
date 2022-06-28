import { async } from '@firebase/util';
import { Button, Container, TextField } from '@mui/material';
import { AuthErrorCodes } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth/useAuth';


const Review = () => {
    const {user}=useAuth()
    const nameRef=useRef();
    const descriptionRef=useRef();



    const handleAddUser=e=>{
            const name=nameRef.current.value;
            const description=descriptionRef.current.value;
            const newUser={name:name,description:description}

            fetch('https://safe-earth-59643.herokuapp.com/reviews',{
                method:'post',
                headers:{
                    'content-type':'application/json',
                },
                body:JSON.stringify(newUser)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    alert('successfully added user')
                    // e eikhane from k bujaise
                    e.target.reset();
                }
            })

        e.preventDefault();

    }
       
    
    return (
        <Container>
            <h2 style={{color:'#b4004e'}}>Please give Your opinion</h2>
            <form onSubmit={handleAddUser}>
                <input style={{width:'40%',height:'35px'}} type="text" ref={nameRef}  defaultValue={user.displayName} />
                <br />
                <br />
            
                <input style={{width:'40%',height:'35px'}}   type="text" name="" ref={descriptionRef} id=""  placeholder='Opinion'/>
                <br />
                <br />
                <input style={{backgroundColor:'#b4004e',color:'white',border:'none',borderRadius:'5px',padding:'10px'}} type="submit" value="Review" />


            </form>

                
        </Container>
    );
};

export default Review;



    // console.log(reviewData)
        // fetch('https://safe-earth-59643.herokuapp.com/reviews',{
        //     method:'POST',
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body:JSON.stringify(reviewData)
        //     .then(res=>res.json())
        //     .then(data=>{
        //         if(data.insertedId){
        //             alert('successfully added user')
        //             // e eikhane from k bujaise
        //             e.target.reset();
        //         }
        //     })
          
        // })
        // .catch(console.dir);
        // e.preventDefault();
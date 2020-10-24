import React, { Fragment, useEffect, useState } from 'react'
import { Button, Container, Form, FormGroup, Input } from 'reactstrap'
import axios from "axios";
import base_url from "./../api/bootapi";
import { toast } from 'react-toastify';
const AddCourse=()=>{

    useEffect(() => {
        document.title = "Add Course || Pankaj"
    },[]);

    const [course,setCourse] = useState({});

    //form Handler function
    const handleForm =(e) => {
        console.log(course);

        e.preventDefault();
    }

    //creating function to post data on server
    const postDatatoServer = (data) => {
        axios.post(`${base_url}/courses`,data).then(
         (response) => {
             console.log(response);
             console.log("success");
             toast.success("Course added successfully");
             setCourse({})
         },
         (error) => {
             console.log(error);
             console.log("error");
             toast.error("Something went wrong");
         }  
        );
    };
return(
<Fragment>
<Form onSubmit={handleForm}>
    <FormGroup>
        <h1 className="text-center my-3">Fill Course Details</h1>
        <label for="userId">Course Id</label>
        <Input 
        type="text"
        placeholder="Enterhere"
        name="userId"
        id="userId"
        onChange={()=>{
            setCourse({ ...course,id: e.target.value});
        }}
        ></Input>
    </FormGroup>
    <FormGroup>
        <label for="title">Course Title</label>
        <Input type="reset" placeholder="Enter title here" 
        id="title" />
    </FormGroup>
    <FormGroup>
        <label for="description">Course Description</label>
        <input type="textarea" placeholder="Enter description here"
         id="description" style={{height: 150 }}
         onChange={()=>{
            setCourse({ ...course,description: e.target.value});
        }} ></input>
    </FormGroup>
    <Container className="text-center">
        <Button  type="submit" color="success">Add Course</Button>
        <Button type="button" 
        color="warning ml-2" onClick={(e) => {
            setCourse({});
        }}>clear</Button>
    </Container>
</Form>
</Fragment>

);    
};
export default AddCourse;
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import AllRoutes from "../../routers/Routes";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const AddToDo=()=>{

    const Api_URL='https://63b642b758084a7af3ad72cb.mockapi.io/todos';

    const Nav= useNavigate();

    const[title,setTitle]=React.useState("");
    const[comment,setComment]=React.useState("");

    const[isError,setIsError]=React.useState(false);
    const[isLoading,setIsLoading]=React.useState(false);

    const AddToList=()=>{
        axios.post(Api_URL,{
            todo_title: title,
            is_complete: false,
            comment: comment
           
        })
        .then(res=>{
            console.log(res.data);
            setIsError(false);
            Nav(AllRoutes.listtodo);
         }).catch(err=>{
                console.log(err.data);
                setIsError(true);
               
         }).finally( err=>{
            setIsLoading(false);
         }

         )
    }
    return(
        <div className="outerTable"><h1 className="title">Add ToDo</h1>
        
       {/* <input placeholder="ToDo Title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <input placeholder="Comment" type="text" value={comment} onChange={(e)=>setComment(e.target.value)} />
    <button onClick={AddToList}> Add ToDo </button>*/}


        <Stack direction="vstack" gap={4} >
     
      <Form.Control placeholder="ToDo Title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
      <Form.Control placeholder="Comment" type="text" value={comment} onChange={(e)=>setComment(e.target.value)} />

      <Button variant="secondary" onClick={AddToList}> AddToDo</Button>
      
    </Stack>

        </div>
    )
}
export default AddToDo;
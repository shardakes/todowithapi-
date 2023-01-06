import React from "react";
import { useNavigate } from "react-router-dom";
import AllRoutes from "../../routers/Routes";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ListToDo=()=>{

    const Api_URL='https://63b642b758084a7af3ad72cb.mockapi.io/todos';
    const Nav= useNavigate();
    const[todo,setTodo]=React.useState([]);

    const[isError,setIsError]=React.useState(false);
    const[isLoading,setIsLoading]=React.useState(false);


    const getTodo = ()=>{
        axios.get(Api_URL)
             .then(res=>{
                setTodo(res.data);
                setIsError(false);
             }).catch(err=>{
                console.log(isError);
                setIsError(true);
             }).finally(err=>{
                setIsLoading(false);
             })
    } 
    React.useEffect(()=>{
        getTodo();
    },[]);
    const Goto=()=>{
        Nav(AllRoutes.addtodo);
    }
    const GoToEdit=(id)=>{
       Nav("/updatetodo/"+id);
    }
    const GoToDelete=(id)=>{
        Nav("/deletetodo/"+id);
    }
    return(
        <div><h1 className="title">List ToDo</h1>
        
        {
            todo.map((todo)=>{
                return <div key={todo.id}>
                {/*<p>{todo.todo_title}</p>
                <p>{todo.comment}</p>
                <p>{todo.is_complete ? 'True' : 'False'}</p>
                <p>{new Date(todo.todo_date).toString()}</p>*/}
                
                <Container >
      <Row className="justify-content-md-center rowclass">
        <Col > {todo.todo_title}</Col>
        <Col>{todo.comment}</Col>
        <Col>{todo.is_complete ? 'True' : 'False'}</Col>
        <Col  xs={6}>{new Date(todo.todo_date).toString()}</Col>
        <Col className="newtxt"  ><Button onClick={(e) => GoToEdit(todo.id)}>Edit </Button></Col>
        <Col className="newtxt">
        <Button onClick={(e) => GoToDelete(todo.id)}> Delete</Button></Col>

      </Row>
      
    </Container>
     
   
                </div>
            })
        } 
        {/*<Button variant="secondary" onClick={Goto}> Add ToDo</Button>*/}
        <Button variant="secondary" disabled={isLoading} onClick={Goto}>{isLoading ? "Adding Todo..." : "Add Todo"}</Button>
        {!isLoading && isError && <p>Opps! Something went wrong, Unable to add Todo</p>}
        
        </div>
    )

}
export default ListToDo;
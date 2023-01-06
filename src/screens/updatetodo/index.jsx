import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AllRoutes from "../../routers/Routes";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const UpdateToDo = () => {
    const URLParams = useParams();
    const Nav = useNavigate();
    const [title, setTitle] = React.useState("");
    const [comment, setComment] = React.useState("");

    const [isError, setIsError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const Api_URL = 'https://63b642b758084a7af3ad72cb.mockapi.io/todos/' + URLParams.id;

    React.useEffect(() => {
        axios.get(Api_URL)
            .then(res => {
                setTitle(res.data.todo_title);
                setComment(res.data.comment);
                setIsError(false);
            }).catch(err => {
                console.log(err);
                setIsError(true);
            }).finally(err => {
                setIsLoading(false);
            })

    }, [])
    const UpdateToDo = () => {
        axios.put(Api_URL, {
            todo_title: title,
            comment: comment
        }
        )
            .then(res => {
                console.log(res.data);
                Nav(AllRoutes.listtodo);
            })
    }

    return (
        <div className="outerTable"><h1 className="title">UpdateToDo</h1>

            <Stack direction="vstack" gap={4} >

                <Form.Control placeholder="ToDo Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <Form.Control placeholder="Comment" type="text" value={comment} onChange={(e) => setComment(e.target.value)} />

                <Button variant="secondary" onClick={UpdateToDo}> UpdateToDo</Button>

            </Stack>
        </div>

    )
}
export default UpdateToDo;
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import AllRoutes from "../../routers/Routes";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const DeleteToDo = () => {

    const Nav = useNavigate();
    const URLParams = useParams();
    const [dele, setDele] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const Api_URL = 'https://63b642b758084a7af3ad72cb.mockapi.io/todos/' + URLParams.id;
    alert("Are you sure you want to Delete Todo!");

    React.useEffect(() => {
        axios.delete(Api_URL)
            .then(res => {
                console.log(res.data);
                setIsError(false);
                Nav(AllRoutes.listtodo);
            }).catch(err => {
                console.log(err);
                setIsError(true);
            }).finally(err => {
                setIsLoading(false);
            })

    }, [])

}
export default DeleteToDo;
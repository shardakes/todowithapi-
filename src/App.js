import React from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ListToDo from './screens/listtodo';
import AllRoutes from './routers/Routes';
import AddToDo from './screens/addtodo';
import UpdateToDo from './screens/updatetodo';
import DeleteToDo from './screens/deletetodo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/*<Route exact path={"/"} element={<AddToDo />} />*/}
        <Route exact path={"/"} element={<Navigate to={AllRoutes.listtodo} />} />
        <Route path={AllRoutes.addtodo} element={<AddToDo />} />
        <Route  path={AllRoutes.listtodo} element={<ListToDo />}/>
        <Route  path={AllRoutes.updatetodo} element={<UpdateToDo />}/>
        <Route  path={AllRoutes.deletetodo} element={<DeleteToDo />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

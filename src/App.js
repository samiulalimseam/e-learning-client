import logo from './logo.svg';
import './App.css';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import routes from './Routes/Routes/Routes';

import SignUp from './Pages/User/SignUp';

function App() {
  return (
    <div  className="">
      
      
      <RouterProvider router={routes} ></RouterProvider>
      
    </div>
  );
}

export default App;

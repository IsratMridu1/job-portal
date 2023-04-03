import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Register from './Components/Register';
import Login from './Components/Login';
import CreateJob from './Components/CreateJob';
import ViewJob from './Components/ViewJob';


function App() {

  const jwt = localStorage.getItem('jwt');

  const router = createBrowserRouter([
    {
      path: "/",
      element: (jwt) ? <ViewJob/> : <Login/>
    },
    {
      path: "/register",
      element:  <Register/> 
    },
    {
      path: "/login",
      element:   <Login/>
    },
    {
      path: "/allJobs",
      element:  (jwt) ?  <ViewJob/> : <Login/>
    },
    {
      path: "/createJob",
      element:     (jwt) ?  <CreateJob/> : <Login/>
    },


  ]);
  return (
    <div>

<RouterProvider router={router} />
      
     
     
   
      
      
    </div>
  );
}

export default App;


import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import {createBrowserRouter,RouterProvider}from "react-router-dom"
import Dashboard from './Components/dashboard';
import QuizPage from './Components/quiz';
function App() {
 const router=createBrowserRouter([
  {path:"/",
element:(
<LoginSignup/>
)},
{path:"/home",
element:(
  <Dashboard/>
)},
{path:"/quiz",
element:(
  <QuizPage/>
)}

 ])

 return(<>
  <RouterProvider router={router}/></>
 )
}

export default App;

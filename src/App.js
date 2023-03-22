import {  createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Initiative from "./Pages/Initiative";

function App() {

const routes = createHashRouter([
  {path:"/",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:"about",element:<About/>},
    {path:"initiative",element:<Initiative/>}
  ]}
])
  return (
  <RouterProvider router={routes}/>
  );
}

export default App;

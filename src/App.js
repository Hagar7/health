import {  createBrowserRouter,  RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Initiative from "./Pages/Initiative";
import News from "./Pages/News";
import Publication from "./Pages/Publication";
import ProjectsMain from "./Pages/ProjectsMain";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Career from "./Pages/Career";
import Donation from "./Pages/Donation";
import NotFound from "./Components/CommonComponents/NotFound/NotFound";


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement:<NotFound/>,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "initiative", element: <Initiative /> },
        { path: "news", element: <News /> },
        { path: "publication", element: <Publication /> },
        { path: "projects", element: <ProjectsMain /> },
        { path: "projects/:id", element: <Project /> },
        { path: "contact", element: <Contact/> },
        { path: "career", element: <Career /> },
        { path: "donation", element: <Donation /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;

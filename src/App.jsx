import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Routes/Layout/Layout";
import Home from "./Routes/Home/Home"


function App() {

  
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout/>,
        children: [
          {
            path: "/",
            element: <Home/>,
          },
        ]
      }
    ]);
    return (
      <RouterProvider router={router}/>
    )
}

export default App

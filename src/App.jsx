import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

/**Loading time optimization */
const Layout = lazy(() => import("./Routes/Layout/Layout"));
const Home = lazy(() => import("./Routes/Home/Home"));


function App() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: 
        (
          /*** Need to  design the lazy loading component*/
          <Suspense fallback={<div>loading</div>}>
            <Layout/>
          </Suspense>
        ),
        children: [
          {
            path: "/",
            element: 
            (
              <Suspense fallback={<div>loading</div>}>
                <Home/>
              </Suspense>
            ),
          },
        ]
      }
    ]);
    return (
      <RouterProvider router={router}/>
    )
}

export default App

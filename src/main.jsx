import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
    // BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import FormComponent from './components/FormComponent.jsx';
import TableComponent from './components/TableComponent.jsx';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
      
        path: "/form",
        element: <FormComponent />,
   },
   {
      
    path: "/table",
    element: <TableComponent />,
    } ,
    {
        path:"/app",
        element:<App/>
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
</React.StrictMode>
)

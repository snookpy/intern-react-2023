import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ExampleDnDPage from '../ExampleDnDPage/ExampleDnDPage'
import ExampleFormPage from '../ExampleFormPage/ExampleFormPage'

import MatLayout from './MatLayout'
import DemoFormPage from '../ExampleFormPage/DemoFormPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MatLayout />,
        children: [
            {
                path: '/',

                element: <ExampleDnDPage />,
            },
            {
                path: 'form',
                element: <ExampleFormPage />,
            },
        ],
    },
])

function InitRoute() {
    return <RouterProvider router={router} />
}

export default InitRoute

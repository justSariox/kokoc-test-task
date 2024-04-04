import {createBrowserRouter, RouteObject, RouterProvider} from "react-router-dom";
import { StartPage, GamePage } from "@/pages";


const routes: RouteObject[] = [
    {
        path: '/', element: <StartPage />
    },
    {
        path: '/play', element: <GamePage/>
    }
]

const router = createBrowserRouter([...routes])

export const Router = () => {

    return <RouterProvider router={router} />
}
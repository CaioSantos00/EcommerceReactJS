import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import Contato from "./pages/Contact/contact"
import Sobre from "./pages/Sobre/Sobre"
import VerProduto from "./pages/ProdutoVer/VerProduto"
import Login from "./pages/Login/Login"
import Cadaster from "./pages/Cadaster/Cadaster"

const router = createBrowserRouter([
    {
        index: true,
        path:"/",
        element: <Home/>,
    }, 
    {
        path:"contact",
        element: <Contato/>
    },
    {
        path:"Sobre",
        element: <Sobre/>
    },
    {
        path: "Produto",
        element: <VerProduto/>
    },
    {
        path:"Login",
        element: <Login/>
    },
    {
        path:"Cadaster",
        element: <Cadaster/>
    }
    
])

export default router
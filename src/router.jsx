import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import Contato from "./pages/Contact/contact"
import Sobre from "./pages/Sobre/Sobre"
import VerProduto from "./pages/ProdutoVer/VerProduto"

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
    }
    
])

export default router
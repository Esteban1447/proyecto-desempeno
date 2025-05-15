import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Products from "../pages/Products";
import Usuarios from "../pages/Usuarios";
import VistaImagenes from "../pages/VistaImagenes"; 
import VistaCliente from "../pages/VistaCliente";

export let routes = [

    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/products",
        element: <Products />, 
    },
    {
        path: "/usuarios",
        element: <Usuarios />,
    },
    {
        path: "/productos",
        element: <Productos />,
    },
    {
        path: "/vista-imagenes",
        element: <VistaImagenes />,
    },
    {
        path: "/vista-cliente",
        element: <VistaCliente />,
    }
];
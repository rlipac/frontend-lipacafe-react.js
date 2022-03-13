import { Result } from 'postcss';
import { useState, useEffect } from 'react'

import '../styles/productos.css';

const Productos = () => {

    const [misproductos, setMisProductos] = useState([]);

    useEffect(() => {
        const obtenerProductos = async () => {
            const url = `http://localhost:4200/API/productos/`;
            const respuesta = await fetch(url);
            const resultado = await respuesta.json()
            setMisProductos(resultado.productos)
            
        }
        obtenerProductos()


    }, [])


    // roots = numbers.map(function(num) {
    //     return Math.sqrt(num);
    // });

    return (

        <div className=" w-10/12 mx-auto bg-gray-100 py-10 px-10 " >
            <div className=' cards-container'>
            {misproductos.map(producto => (  
                <div className='my-card' key={producto._id}>
                 
                        <div className="flex justify-center ">
                            <div className="rounded-lg shadow-lg bg-white max-w-sm ">
                                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img className="rounded-t-lg" src={producto.images} alt="" />
                                </a>
                                <div className="p-6">
                                    <h5 className="text-gray-900 text-xl font-medium mb-2">{producto.nameProducto}</h5>
                                    <p className="text-gray-700 text-base mb-4">
                                        {producto.descripcion}
                                    </p>
                                    <h3>{producto.preci}</h3>

                                </div>
                            </div>
                        </div>
                </div>
                  ))}
            </div>
        </div>

    );
}

export default Productos;
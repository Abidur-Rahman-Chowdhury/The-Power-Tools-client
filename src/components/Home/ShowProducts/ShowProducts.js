import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../../api/constant';
import ShowProduct from './ShowProduct';

const ShowProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`${baseUrl}/tools`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);

    const sixTools = products.slice(0, 6);
    return (
        <div className='w-[80%] mx-auto'>
            <h1 className='text-center text-4xl font-bold mb-20'>Our Products</h1>

            <div className='grid  gap-y-10 gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    sixTools.map(tools => <ShowProduct
                    
                        key={tools._id}
                        tools={tools}
                    ></ShowProduct>)
                }
            </div>
        </div>
    );
};

export default ShowProducts;
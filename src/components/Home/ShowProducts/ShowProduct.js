import React from 'react';
import { useNavigate } from 'react-router-dom';
// You can also use <link> for styles


const ShowProduct = ({ tools }) => {
    const { _id, name, img, des, minimum, available, price } = tools;
  const navigate = useNavigate();

  return (

   
      <div className="card card-compact w-full  bg-base-100 p-5 shadow-lg border" >
      <figure>
        <img className='w-[300px]'
          src={img}
          alt={name}
        />
      </figure>
      <div className="card-body">
              <h2 className='text-center text-2xl font-bold mt-2 mb-2'>{name}</h2>
              <p className='text-justify text-xl'>{ des}</p>
              <p className='text-center text-xl'><b>Minimum Quantity:</b> { minimum}</p>
              <p className='text-center text-xl'><b>Available Quantity:</b> { available}</p>
              <p className='text-center text-xl'><b>Price:</b> ${ price}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={()=>navigate(`/purchase/${_id}`)}>Purchase Now</button>
        </div>
      </div>
    </div>
  
    
  );
};

export default ShowProduct;

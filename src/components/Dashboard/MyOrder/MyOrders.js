import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';


import { baseUrl } from '../../../api/constant';
import auth from '../../../firebase.init';
import CancelOrdersModal from './CancelOrdersModal';
import MyOrder from './MyOrder';
import 'react-toastify/dist/ReactToastify.css';

const MyOrders = () => {
  const [user] = useAuthState(auth)
  const [product, setProduct] = useState(null);
    const { data: orders, isLoading , refetch} = useQuery('orders', () =>
    fetch(`${baseUrl}/orders/${user?.email}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );
  const cancelProduct = (id) => {
    fetch(`${baseUrl}/cancel/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount >0 ) {
          toast.success('Successfully cancel the order');
          refetch();
      }
    })
  }
  return (
    <>
          <h2 className="text-center text-3xl mt-5 mb-5 font-bold">My Orders </h2>
          <h2 className="text-center text-2xl mt-5 mb-5 font-bold">My Totals Order: {orders?.length}  </h2>
          
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Tools</th>
              <th>Image</th>
              <th>Price</th>
              <th>Status</th>
              <th>Transaction ID</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
                      {
                          orders?.map((order,index) => <MyOrder
                              index= {index}
                              key={order._id}
                              order={order}
                              setProduct={setProduct}
                          ></MyOrder>)
            }

           
          </tbody>
        </table>
        <CancelOrdersModal
          product={product}
          cancelProduct={cancelProduct}
        ></CancelOrdersModal>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default MyOrders;

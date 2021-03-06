import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../api/constant';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(
  'pk_test_51L0hEkDWa8yB2PpaHAuUSDbuArMApWWQkZycDzs7d1jOFm4vd3P4GHcwONSYm6Xuecc6m6uyfRdUO5alUDT9udOb00XOUPSXU3'
);
const Payment = () => {
  const { id } = useParams();
  
  const url = `${baseUrl}/order/${id}`;
  const { data: order, isLoading } = useQuery(['orders',id], () =>
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>
  }
  return (
    <div>
      <div className="card w-50 mx-auto max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">
            Hello {}
          </p>
          <h2 className="card-title">Pay for {}</h2>
          <p>
            Your Order For:
            <span className="text-orange-700 ml-2">
              {order?.name}
            </span> is ready.
          </p>
          <p>Please Pay ${order?.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 mx-auto max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
                      <CheckoutForm order={order }/>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log('🚀 ~ file: Payment.js ~ line 8 ~ stripePromise', stripePromise);

function Payment() {
  const data = useLoaderData();
  const { appointment_date, treatment, slot, price, patient } = data;
  return (
    <div className="max-w-4xl px-6 py-16 mx-auto space-y-12">
      <article className="px-8 py-4 space-y-8 bg-gray-100 text-gray-900">
        <div className="space-y-6">
          <h1 className="text-3xl font-medium italic hover:underline md:tracking-tight md:text-5xl">
            Payment for {treatment}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-600">
            <div className="flex items-center md:space-x-2">
              <p className="font-medium italic hover:underline text-xl text-gray-600">
                Patient name: {patient}
              </p>
            </div>
            <p className="font-medium italic flex-shrink-0 mt-3 text-sm md:mt-0">
              On {appointment_date} at {slot}
            </p>
          </div>
        </div>
        <div className="font-medium italic  text-gray-800">
          <p>
            For this appointment you should pay{' '}
            <span className="text-lg hover:underline">${price}</span>
          </p>
        </div>
      </article>
      <Elements stripe={stripePromise}>
        <CheckoutForm data={data} />
      </Elements>
    </div>
  );
}

export default Payment;

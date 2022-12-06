import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

function CheckoutForm({ data }) {
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  //   paymentMethod needs information ex:price
  const { email, price, patient, treatment } = data;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(
      'https://doctors-portal-server-nu-one.vercel.app/create-payment-intent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError('');
      console.log('[PaymentMethod]', paymentMethod);
    }
    setSuccess('');
    const { paymentIntent, error: confirmerror } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email,
            name: patient,
            treatment,
          },
        },
      });

    if (confirmerror) {
      setCardError(confirmerror.message);
      return;
    }
    if (paymentIntent.status === 'succeeded') {
      setSuccess('Your Payment Completed!');
      setTransactionId(paymentIntent.id);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {cardError && (
        <div className="flex items-center my-4 p-4 space-x-4 rounded-md bg-gray-50 text-gray-800">
          <div className="flex items-center self-stretch justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 text-red-600"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <span>{cardError}</span>
        </div>
      )}
      {success && (
        <div className="flex items-center my-4 p-4 space-x-4 rounded-md bg-gray-50 text-gray-800">
          <div className="flex items-center self-stretch justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 text-green-600"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <span>{success}</span>
            <span>{transactionId}</span>
          </div>
        </div>
      )}
      <button
        className="cursor-pointer my-4 px-4 py-2 font-medium italic rounded-md bg-gradient-to-r from-primary to-secondary text-gray-50"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
    </form>
  );
}

export default CheckoutForm;

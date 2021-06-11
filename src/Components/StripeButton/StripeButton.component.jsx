import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = props => {
  const priceForStripe = props.price * 100;
  const publishableKey =
    'pk_test_51J1ImLBufemeNTod8papfNNyT6PvEFCG5W0LB9Z9xNzLSaOa2KWJpejCJDg4jxZ7ZHiifG8xIQIoevMZnNGftTcW00QG6WcnvT';

  const onTokenHandler = token => {
    console.log('token: ', token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='e-com test website'
      billingAddress
      shippingAddress
      description={`Your total is $${props.price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onTokenHandler}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeButton;

import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { PaymentContainer, FormContainer, PaymentButton } from './payment-form.styles';

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const amount = useSelector(selectCartTotal);
	const currentUser = useSelector(selectCurrentUser);
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);

	const paymentHandler = async e => {
		e.preventDefault();

		if (!stripe || !elements) return;

		setIsProcessingPayment(!isProcessingPayment);

		const response = await fetch('/.netlify/functions/create-payment-intent', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ amount: amount * 100 }),
		});

		const {
			paymentIntent: { client_secret },
		} = await response.json();

		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: currentUser ? currentUser.displayName : 'Guest',
				},
			},
		});

		setIsProcessingPayment(!isProcessingPayment);

		if (paymentResult.error) alert(paymentResult.error.message);
		else {
			if (paymentResult.paymentIntent.status === 'succeeded') alert('Payment Successful');
		}
	};

	return (
		<PaymentContainer>
			<FormContainer onSubmit={paymentHandler}>
				<h2>Credit Card Payment</h2>
				<CardElement />
				<PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>
					Pay now
				</PaymentButton>
			</FormContainer>
		</PaymentContainer>
	);
};

export default PaymentForm;

require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async event => {
	try {
		const { amount } = JSON.parse(event.body);

		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency: 'usd',
			payment_method_types: ['card'],
			description: 'payment',
			shipping: {
				name: 'Prince Roy',
				address: {
					line1: 'Rasalpur Colony',
					postal_code: '756000',
					city: 'Balaaa',
					state: 'Toyo',
					country: 'India',
				},
			},
		});

		return {
			statusCode: 200,
			body: JSON.stringify({ paymentIntent }),
		};
	} catch (error) {
		console.log({ error });

		return {
			status: 400,
			body: JSON.stringify({ error }),
		};
	}
};

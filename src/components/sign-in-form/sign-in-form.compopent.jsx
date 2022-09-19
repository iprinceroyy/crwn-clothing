import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';
import Button from '../button/button.component';

import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
	};

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(email, password);

			resetFormFields();
		} catch (err) {
			switch (err.code) {
				case 'auth/wrong-password':
					alert('incorrect password for email');
					break;
				case 'auth/user-not-found':
					alert('no user associated with this email');
					break;
				default:
					console.log(err);
			}
		}
	};

	const handleChange = event => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-in-container'>
			<h1>Already have an account</h1>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					type='email'
					required
					onChange={handleChange}
					name='email'
					value={email}
				/>

				<FormInput
					label='Password'
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>

				<div className='buttons-container'>
					<Button children='Sign In' type='submit' />
					<Button
						type='button'
						children='Google sign In'
						onClick={signInWithGoogle}
						buttonType='google'
					/>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;

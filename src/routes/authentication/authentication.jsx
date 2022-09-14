import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.compopent';
import SignInForm from '../../components/sign-in-form/sign-in-form.compopent';
import './authentication.styles.scss';

const Authentication = () => {
	return (
		<div className='authentication-container'>
			{/* <h1>Sign In Page</h1> */}
			<SignInForm />
			{/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
			<SignUpForm />
		</div>
	);
};

export default Authentication;

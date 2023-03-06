import SignUpForm from '../../components/sign-up-form/sign-up-form.compopent';
import SignInForm from '../../components/sign-in-form/sign-in-form.compopent';

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => (
	<AuthenticationContainer>
		<SignInForm />
		<SignUpForm />
	</AuthenticationContainer>
);

export default Authentication;

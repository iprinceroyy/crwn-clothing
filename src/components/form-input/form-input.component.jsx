import { Group, Input, FormInputLabel } from './form-input.styles.jsx';

const FormInput = ({ label, ...otherProps }) => {
	return (
		<Group>
			<Input {...otherProps} aria-label='' />
			{label && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>}
		</Group>
	);
};

export default FormInput;

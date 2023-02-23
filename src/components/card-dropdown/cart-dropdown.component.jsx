import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles.jsx';
import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();

	const goToCheckOut = () => navigate('/checkout');

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
				) : (
					<EmptyMessage>Your Cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckOut}>Go to checkout</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;

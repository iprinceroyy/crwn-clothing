import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

import { CartItem as TCartItem } from '../../store/cart/cart.types';

import {
	CheckoutItemContainer,
	ImageContainer,
	BaseSpan,
	Quantity,
	Value,
	Arrow,
	RemoveButton,
} from './checkout-item.styles';

type CartItemProps = {
	cartItem: TCartItem;
};

const CheckoutItem: FC<CartItemProps> = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const handleClearItem = () => dispatch(clearItemFromCart(cartItems, cartItem));
	const handleAddItem = () => dispatch(addItemToCart(cartItems, cartItem));
	const handleRemoveItem = () => dispatch(removeItemFromCart(cartItems, cartItem));

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>

			<BaseSpan>{name}</BaseSpan>

			<Quantity>
				<Arrow onClick={handleRemoveItem}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={handleAddItem}>&#10095;</Arrow>
			</Quantity>

			<BaseSpan>{price}</BaseSpan>

			<RemoveButton onClick={handleClearItem}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;

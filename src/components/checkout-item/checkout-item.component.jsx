import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

	const handleClearItem = () => clearItemFromCart(cartItem);
	const handleAddItem = () => addItemToCart(cartItem);
	const handleRemoveItem = () => removeItemFromCart(cartItem);

	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={handleRemoveItem}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={handleAddItem}>
					&#10095;
				</div>
			</span>
			<span className='price'>{price}</span>
			<div className='remove-button' onClick={handleClearItem}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;

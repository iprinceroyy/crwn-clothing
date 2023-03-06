import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CategoryItem } from '../../store/categories/category.types';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { Name, Price, ProductCardContainer } from './product-card.style';

type ProductCardProps = {
	product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const { name, price, imageUrl } = product;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const handleAddProductToCart = () => dispatch(addItemToCart(cartItems, product));

	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`} />

			<div className='footer'>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</div>

			<Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddProductToCart}>
				Add to cart
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;

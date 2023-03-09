import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;

	@media (max-width: 800px) {
		align-items: center;
	}
`;

export const Title = styled(Link)`
	font-size: 28px;
	margin-bottom: 25px;
	cursor: pointer;
`;

export const Preview = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;

	@media (max-width: 800px) {
		grid-template-columns: 1fr 1fr;
		gap: 25px 15px;
	}

	@media (max-width: 400px) {
		grid-template-columns: 1fr;
		gap: 25px 0;
	}
`;

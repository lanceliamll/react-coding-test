import React from 'react'
import './index.css'
import ProductItem, { ProductItemType } from '../ProductItem';
import { Link } from 'react-router-dom';

export default function ProductList({ items, header }: { items?: ProductItemType[], header?: string }) {
	return (
		<div className="product-list-container">
			<div className="product-list-heading">
				<div className="product-for-you">{header || ''}</div>
				<div className="product-see-all"><Link to="/see-all" state={{
					header: header || '',
					items
				}}>See All</Link></div>
			</div>

			<div className="product-items">
				{(items || [])?.map(item => {
					return <ProductItem {...item} />
				})}
			</div>
		</div>
	)
}

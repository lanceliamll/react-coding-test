import React from 'react'
import ProductItem, { ProductItemType } from '../ProductItem'
import './index.css';

export default function ProductListExpanded({ items }: { items: ProductItemType[] }) {
	return (
		<div className="product-list-ex-container">
			<div className="product-items-ex">
				{(items || [])?.map(item => {
					return <ProductItem {...item} />
				})}
			</div>
		</div>
	)
}

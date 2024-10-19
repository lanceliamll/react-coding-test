import React from 'react'
import './index.css'
import ProductItem, { ProductItemType } from '../ProductItem';

export default function ProductList({ items, header }: { items?: ProductItemType[], header?: string }) {
  return (
    <div className="product-list-container">
      <div className="product-list-heading">
				<div className="product-for-you">{header || ''}</div>
				<div className="product-see-all">See All</div>
			</div>

			<div className="product-items">
				{(items || [])?.map(item => {
					return <ProductItem {...item} />
				})}
			</div>
    </div>
  )
}

import React from 'react'
import "./index.css";
import ProgressBar from '../ProgressBar';
import { parseImageUrl } from '../../helpers';

export type ProductItemType = {
	brand_name?: string;
	brand_image?: string;
	product_name?: string;
	product_image?: string;
	progress?: number;
	title?: string;
	lane?: string;
};


export default function ProductItem(props: ProductItemType) {
	const { product_image, brand_image, product_name, title, brand_name, progress } = props;
	return (
		<div className='product-item-container'>
			<div className='product-item'>
				<img className='product-item-image' src={parseImageUrl(product_image)} alt="product-image"/>
				<img className='product-item-brand-image' src={parseImageUrl(brand_image)} alt="brand-image"/> 
				<span className='product-item-information'>
					{`${brand_name}, ${product_name} ${title}`}
				</span>
				<ProgressBar progress={progress} />
			</div>

		</div>
	)
}

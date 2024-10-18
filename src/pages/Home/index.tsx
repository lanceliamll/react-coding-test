import React from 'react'
import UserGreetings from '../../components/UserGreetings'
import ProductList from '../../components/ProductList'
import useGetProducts from '../../hooks/useGetProducts';

export default function Home() {
	// create hook
	// return filtered data
	// for_you, hot_products, featured, none
	const { data: { for_you, features, noLane, hot }, loading, error } = useGetProducts();

	console.log({ loading })
	if (loading) return <>Loading...</>
	if (error) return <>Error...</>

	return (
		<div>
			<UserGreetings />

			<ProductList items={for_you} header="For You" />

			<ProductList items={hot} header="Hot Products" />

			<ProductList items={features} header="Featured" />

			<ProductList items={noLane} header="More Items" />
		</div>
	)
}

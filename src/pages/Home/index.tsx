import React from 'react'
import UserGreetings from '../../components/UserGreetings'
import ProductList from '../../components/ProductList'
import useGetProducts from '../../hooks/useGetProducts';

export default function Home() {
	const { data: { for_you, features, noLane, hot }, loading, error } = useGetProducts();

	const renderProductListing = () => {
		return (
			<>
				<ProductList items={for_you} header="For You" />
				<ProductList items={hot} header="Hot Products" />
				<ProductList items={features} header="Featured" />
				<ProductList items={noLane} header="" />
			</>
		)
	}

	return (
		<div>
			<UserGreetings />
			{loading && <>Loading...</>}
			{error && <>Error...</>}
			{renderProductListing()}
		</div>
	)
}

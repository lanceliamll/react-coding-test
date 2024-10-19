import React from 'react'
import TopBar from '../../components/TopBar'
import { useLocation } from 'react-router-dom'
import ProductListExpanded from '../../components/ProductListExpanded'

export default function SeeAll() {
	const location = useLocation()
	const { header, items } = location.state;

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div style={{
			height: '100vh',
			overflow: 'scroll'
		}}>
			<TopBar header={header} />
			<ProductListExpanded items={items} />
		</div>
	)
}

import React from 'react'
import './index.css';
import { ReactComponent as HomeFilledSvg } from '../../icons/home-fill.svg'
import { ReactComponent as HomeTransparentSvg } from '../../icons/home-transparent.svg'
import { ReactComponent as MyCouponFill } from '../../icons/my-coupon-fill.svg'
import { ReactComponent as MyCouponTransparent } from '../../icons/my-coupon-transparent.svg'
import { ReactComponent as MeFill } from '../../icons/me-fill.svg'
import { ReactComponent as MeTransparent } from '../../icons/me-transparent.svg'
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
	const location = useLocation();
	return (
		<div className="navigation-container">
			<div className="navigation-items">
				<div className="navigation-item">
					{location.pathname === '/' ? <HomeFilledSvg /> : <HomeTransparentSvg />}
					<Link to="/">Home</Link>
				</div>

				<div className="navigation-item">
					{location.pathname === '/my-coupons' ? <MyCouponFill /> : <MyCouponTransparent />}
					<Link to="/my-coupons">My Coupons</Link>
				</div>

				<div className="navigation-item">
					{location.pathname === '/me' ? <MeFill /> : <MeTransparent />}
					<Link to="/me">Me</Link>
				</div>
			</div>
		</div>
	)
}

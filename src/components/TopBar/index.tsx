import React from 'react'
import './index.css';
import { ReactComponent as ArrowBack } from '../../icons/arrow-back.svg'

const TopBar = ({ header }: { header?: string }) => {
	const handleBackClick = () => {
		window.history.back();
	};

	return (
		<div className="top-bar-container">
			<div className="top-bar-items">
				<div className="top-bar-item" onClick={handleBackClick}>
					<ArrowBack />
					<span className="top-bar-label">Home</span>
				</div>
				<div className="top-bar-item-2">
					<span className="top-bar-label-2">{header || ''}</span>
				</div>
				<div className="top-bar-item-empty">
					<span className="top-bar-label-3"></span>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
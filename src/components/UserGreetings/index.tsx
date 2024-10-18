import React from 'react'
import Avatar from '../Avatar'
import './index.css'

export default function UserGreetings() {
	return (
		<div className='user-greeting-container'>
			<div className='user-greeting'>
				{/* Avatar */}
				<div className='user-greeting-avatar'>
					<Avatar alt="Nicole Sample" size={46} />
				</div>

				{/* Text */}
				<div className='user-greeting-text'>
					<span className='user-greeting-welcome'>Welcome to e-commerce!</span>
					<span className='user-greeting-name'>Good Morning, Nicole</span>
				</div>
			</div>
		</div>
	)
}

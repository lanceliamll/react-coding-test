import React from 'react'
import Avatar from '../Avatar'
import './index.css'

export default function UserGreetings() {
	const [userImage] = React.useState("https://staticg.sportskeeda.com/editor/2023/10/1946e-16962152072191-1920.jpg?w=640")
	return (
		<div className='user-greeting-container'>
			<div className='user-greeting'>
				{/* Avatar */}
				<div className='user-greeting-avatar'>
					<Avatar src={userImage} alt="Nicole Sample" size={46} />
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

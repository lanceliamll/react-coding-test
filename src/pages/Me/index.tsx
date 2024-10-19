import React from 'react'
import UserGreetings from '../../components/UserGreetings'
import ComingSoon from '../../components/ComingSoon'

export default function Me() {
	return (
		<div style={{
			height: '100vh'
		}}>
			<UserGreetings />
			<ComingSoon />
		</div>
	)
}

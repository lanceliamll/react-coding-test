import React from 'react';

type AvatarProps = {
	src?: string;
	alt?: string;
	size?: number;
	backgroundColor?: string;
	borderRadius?: string;
}

const Avatar = ({
	src,
	alt = "Avatar",
	size = 40,
	backgroundColor = "#7130D5",
	borderRadius = "50%",
}: AvatarProps) => {
	const avatarStyles: React.CSSProperties = {
		width: size,
		height: size,
		borderRadius: borderRadius,
		backgroundColor: src ? "transparent" : backgroundColor,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
		objectFit: 'cover',
		position: 'relative',
		border: '2px solid #fff',
	};

	const imageStyles: React.CSSProperties = {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	};

	return (
		<div style={avatarStyles}>
			{src ? (
				<img src={src} alt={alt} style={imageStyles} />
			) : (
				<span style={{ color: "#fff", fontSize: size / 2 }}>{alt.charAt(0).toUpperCase()}</span>
			)}
		</div>
	);
};

export default Avatar;
import React from 'react';
import Classes from './Button.module.css';

const Button = (props) => {
	const { onClick } = props;
	return (
		<button className={Classes.baseClass} onClick={onClick}>
			{props.children}
		</button>
	);
};

export default Button;

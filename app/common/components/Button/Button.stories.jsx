import React from 'react';

import Button from './Button';

export default {
	component: Button,
	title: 'Common/Button',
};

export const Primary = () => <Button text="Текст" />;
export const NumberButton = () => <Button text="2334" />;

import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: 'primary' | 'secondary' | 'third';
}
export default function Button({
	children,
	className,
	variant = 'primary',
	...props
}: IButton) {
	return (
		<button
			{...props}
			className={clsx(
				'rounded-lg  px-3 py-1 text-sm active:translate-y-1',
				{
					['bg-main-button']: variant === 'primary',
					['border border-main-button text-main-button']:
						variant === 'secondary',
					['bg-emergency']: variant === 'third',
				},
				className
			)}
		>
			{children}
		</button>
	);
}

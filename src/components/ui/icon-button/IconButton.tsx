import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	Icon: IconType;
	handler: () => void;
	className?: string;
	isActive?: boolean;
}

export function IconButton({
	Icon,
	handler,
	className,
	isActive = false,
	...props
}: IIconButton) {
	return (
		<button
			onClick={handler}
			{...props}
			className={clsx(
				'flex items-center justify-center rounded-md p-1 text-inactive glass-morphism active:translate-y-1',
				className,
				{ ['text-main-button']: isActive }
			)}
		>
			<Icon />
		</button>
	);
}

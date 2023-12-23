import clsx from 'clsx';
import { ButtonHTMLAttributes, Dispatch, SetStateAction } from 'react';

interface ITabs extends ButtonHTMLAttributes<HTMLButtonElement> {
	values: string[];
	variant?: 'primary' | 'secondary' | 'third';
	activeTab: number;
	setActiveTab: Dispatch<SetStateAction<number>>;
}
export default function Tabs({
	values,
	className,
	activeTab,
	setActiveTab,
	variant = 'primary',
	...rest
}: ITabs) {
	return (
		<div
			className={clsx(
				'flex h-14 w-full justify-between gap-3 rounded-lg border border-gray-600/10 bg-main-background p-2',
				className
			)}
		>
			{values.map((tab, index) => (
				<button
					{...rest}
					key={tab}
					onClick={() => setActiveTab(index)}
					className={clsx('w-full animate-opacity rounded-lg glass-morphism ', {
						['!bg-main-button']: activeTab === index && variant === 'primary',
						['bg-bg-light']: activeTab === index && variant === 'secondary',
						['bg-emergency']: activeTab === index && variant === 'third',
					})}
				>
					{tab}
				</button>
			))}
		</div>
	);
}

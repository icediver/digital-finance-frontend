import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export enum WidgetSizeEnum {
	'1x1' = 'col-span-1 row-span-1',
	'1x2' = 'col-span-1 row-span-2',
	'1x3' = 'col-span-1 row-span-3',
	'1x4' = 'col-span-1 row-span-4',
	'2x2' = 'col-span-2 row-span-2',
	'2x3' = 'col-span-2 row-span-3',
	'2x4' = 'col-span-2 row-span-4',
	'3x1' = 'col-span-3 row-span-1',
	'3x2' = 'col-span-3 row-span-2',
	'3x3' = 'col-span-3 row-span-3',
	'3x4' = 'col-span-3 row-span-4',
}

interface IWidget extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	size?: WidgetSizeEnum;
}
export default function WidgetTemplate({
	size = WidgetSizeEnum['1x1'],
	children,
	className,
}: IWidget) {
	return (
		<div
			className={clsx(
				size,
				className,
				'animate-opacity rounded-xl border border-gray-600/20 bg-widget-background py-6 transparent-panel'
			)}
		>
			<div className="mx-6 flex  justify-between text-lg">{children}</div>
		</div>
	);
}

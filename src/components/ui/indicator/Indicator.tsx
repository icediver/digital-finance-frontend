import clsx from 'clsx';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface IIndicator {
	title: string;
	value: string;
	changes: number;
}

export function Indicator({ title, value, changes }: IIndicator) {
	return (
		<div className="mt-4">
			<div className="flex justify-between">
				<p className="text-sm text-inactive">{title}</p>
				<div
					className={clsx(
						'flex items-center text-sm',
						changes > 0 ? 'text-secondary' : 'text-main-button'
					)}
				>
					{changes > 0 ? (
						<>
							<FaChevronUp className="mr-1" />
							<p>+</p>
						</>
					) : (
						<FaChevronDown className="mr-1" />
					)}
					<p className="">{changes}%</p>
				</div>
			</div>
			<p className="flex items-start text-1.75xl font-bold">
				<span className="p-1 text-sm font-bold text-inactive">$</span>
				{value}
			</p>
		</div>
	);
}

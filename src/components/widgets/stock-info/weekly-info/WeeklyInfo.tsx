import clsx from 'clsx';

interface IWeeklyInfo {
	prevClose: string;
	change: number;
	marketGap: string;
	peRatio: string;
}

export function WeeklyInfo({
	prevClose,
	change,
	marketGap,
	peRatio,
}: IWeeklyInfo) {
	return (
		<div className="mt-2 grid w-full grid-cols-2 p-3">
			<p className="text-sm text-gray-400">PrevClose</p>
			<p className="mb-2 flex items-start justify-end text-end text-sm text-gray-400">
				<span className="text-xss text-gray-400">$&nbsp;</span>
				{prevClose}
			</p>
			<p className="text-sm text-gray-400">%Change</p>
			<p
				className={clsx(
					'mb-2 text-end text-sm text-gray-400',
					change >= 0 ? 'text-green-500' : 'text-red-500'
				)}
			>
				{change >= 0 ? '+' : '-'}
				{change}%
			</p>
			<p className="text-sm text-inactive">Market Gap</p>
			<p className="mb-2 flex items-start justify-end text-end text-sm text-gray-400">
				<span className="text-xss text-gray-400">$&nbsp;</span>
				{marketGap}
			</p>
			<p className="text-sm text-gray-400">PE Ratio</p>
			<p className="mb-2 text-end text-sm text-gray-400">{peRatio}%</p>
		</div>
	);
}

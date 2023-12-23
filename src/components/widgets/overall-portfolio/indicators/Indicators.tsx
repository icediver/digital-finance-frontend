import { Indicator } from '@/components/ui/indicator/Indicator';

interface IIndicators {}

export function Indicators({}: IIndicators) {
	return (
		<div className="grid grid-cols-4 gap-14">
			<Indicator title="My Balance" value={'42,069.00'} changes={24} />
			<Indicator title="Ivestment" value={'20,619.00'} changes={28} />
			<Indicator title="Total Gain" value={'8,664.00'} changes={22} />
			<Indicator title="Total Loss" value={'1,212.00'} changes={-20} />
		</div>
	);
}

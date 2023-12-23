import { TooltipProps } from 'recharts';
// for recharts v2.1 and above
import {
	ValueType,
	NameType,
} from 'recharts/types/component/DefaultTooltipContent';
// for recharts versions below v2.1
import {
	ValueType,
	NameType,
} from 'recharts/src/component/DefaultTooltipContent';

const CustomTooltip = ({
	active,
	payload,
	label,
}: TooltipProps<ValueType, NameType>) => {
	if (active) {
		return (
			<div className="custom-tooltip">
				<p className="label">{`${label} : ${payload?.[0].value}`}</p>
				<p className="desc">Anything you want can be displayed here.</p>
			</div>
		);
	}

	return null;
};

return (
	<ComposedChart data={data}>
		...
		<Tooltip content={<CustomTooltip />} />
	</ComposedChart>
);

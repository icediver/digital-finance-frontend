import { SiOrigin } from 'react-icons/si';
import {
	AreaChart,
	Area,
	ResponsiveContainer,
	Legend,
	CartesianGrid,
	Tooltip,
	TooltipProps,
	YAxis,
	XAxis,
} from 'recharts';

const data = [
	{
		name: '11.08.2023',
		np: 25089,
		rp: 25089,
	},
	{
		name: '11.09.2023',
		np: 21089,
		rp: 28089,
	},
	{
		name: '11.10.2023',
		np: 17089,
		rp: 32089,
	},
	{
		name: '11.11.2023',
		np: 30089,
		rp: 20089,
	},
	{
		name: '11.12.2023',
		np: 20089,
		rp: 11089,
	},
	{
		name: '11.13.2023',
		np: 10089,
		rp: 32089,
	},
	{
		name: '11.14.2023',
		np: 20089,
		rp: 14089,
	},
	{
		name: '11.15.2023',
		np: 40089,
		rp: 5089,
	},
	{
		name: '11.16.2023',
		np: 19089,
		rp: 22089,
	},
	{
		name: '11.17.2023',
		np: 16089,
		rp: 24089,
	},
];

export default function Chart() {
	return (
		<ResponsiveContainer
			width="105%"
			height="100%"
			className={'-ml-4 w-full text-xs'}
		>
			<AreaChart
				width={300}
				height={60}
				data={data}
				margin={{
					top: 5,
					right: 0,
					left: 0,
					bottom: 5,
				}}
			>
				<Area
					type="monotone"
					dataKey="rp"
					stroke="var(--inactive)"
					strokeWidth={3}
					fill="none"
					name="NEW PATIENTS"
				/>

				<Area
					type="monotone"
					dataKey="np"
					stroke="#DB1BB3"
					strokeWidth={5}
					name="RETURN PATIENTS"
					// fill={css}
					fill="url(#splitColor)"
				/>

				<CartesianGrid strokeDasharray="3 3" stroke="#292524" />
				<Tooltip cursor={false} content={<CustomTooltip />} />
				<XAxis dataKey="name" />
				<YAxis domain={[0, 50000]} />
				<defs>
					<linearGradient id="splitColor" gradientTransform="rotate(90)">
						<stop offset="0%" stopColor="rgba(255, 82, 53, 0.5)" />
						<stop offset="100%" stopColor="rgba(255, 82, 53, 0)" />
					</linearGradient>
				</defs>
			</AreaChart>
		</ResponsiveContainer>
	);
}

const CustomTooltip = ({
	active,
	payload,
	label,
}: TooltipProps<number, string>) => {
	if (active) {
		return (
			<div className="flex w-48  gap-4 rounded-lg border border-inactive p-2 transparent-input">
				<div className="my-2 flex h-8 w-8 items-center justify-center rounded-lg border border-main-button shadow-[inset_0_0_25px_rgba(254,82,52,0.4)]">
					<SiOrigin className="fill-main-button text-xl" />
				</div>
				{payload && (
					<div className="flex w-28 flex-col items-start justify-center gap-1">
						<p className="flex w-full justify-between">
							<span className="text-xs">
								<span className="text-xss text-inactive">$&nbsp;</span>
								{payload[0].value
									? `${payload[0].value.toLocaleString()} M`
									: ''}
							</span>

							<span className="text-secondary">+21%</span>
						</p>

						<p className="">
							{new Date(label).toLocaleString('en-Us', {
								day: 'numeric',
								month: 'short',
								year: 'numeric',
							})}
						</p>
					</div>
				)}
			</div>
		);
	}

	return null;
};

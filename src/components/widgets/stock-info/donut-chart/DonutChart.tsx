'use client';
import React from 'react';

import { PieChart, Pie, Cell } from 'recharts';

const data = [
	{ name: 'Group A', value: 400 },
	{ name: 'Group B', value: 300 },
	{ name: 'Group C', value: 300 },
	{ name: 'Group D', value: 200 },
	{ name: 'Group E', value: 278 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];
const VALUE = 50;

export default function DonutChart() {
	return (
		<div className="flex justify-center">
			<PieChart width={170} height={170}>
				<Pie
					data={data}
					cx={80}
					cy={80}
					innerRadius={70}
					outerRadius={80}
					fill="#8884d8"
					paddingAngle={5}
					dataKey="value"
					stroke="none"
				>
					{data.map((_entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<g>
					<circle cx={85} cy={85} r={65} stroke={'var(--inactive)'} />
					<text
						fill={'var(--inactive)'}
						x={40}
						y={65}
						fontWeight={'bold'}
						fontSize={14}
					>
						Share Holder
					</text>
					<text fill={'white'} x={65} y={100} fontWeight={'bold'} fontSize={28}>
						{VALUE}
						<tspan
							fill={'var(--inactive)'}
							fontSize={15}
							y={90}
							fontWeight={'bold'}
						>
							%
						</tspan>
						<tspan
							fill={'var(--inactive)'}
							fontSize={11}
							y={120}
							x={65}
							fontWeight={'bold'}
						>
							Promoter
						</tspan>
					</text>
					<circle cx={55} cy={115} r={3} fill={'var(--primary)'} />
				</g>
			</PieChart>
		</div>
	);
}

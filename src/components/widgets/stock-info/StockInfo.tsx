'use client';
import WidgetTemplate, {
	WidgetSizeEnum,
} from '../widget-template/WidgetTemplate';
import { SiOrigin } from 'react-icons/si';
import dynamic from 'next/dynamic';
import Button from '@/components/ui/button/Button';
import SelectDates from './select-dates/SelectDates';
import { WeeklyInfo } from './weekly-info/WeeklyInfo';
const DynamicDonut = dynamic(() => import('./donut-chart/DonutChart'), {
	ssr: false,
});

interface IStockInfo {}

export function StockInfo({}: IStockInfo) {
	return (
		<WidgetTemplate size={WidgetSizeEnum['1x4']}>
			<div className="w-full">
				<div className="mb-6 flex items-center gap-4">
					<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-main-button shadow-[inset_0_0_25px_rgba(254,82,52,0.2)]">
						<SiOrigin className="fill-main-button text-lg" />
					</div>
					<div className={''}>
						<p className="text-sm font-bold">Origin Game Inc.</p>
						<p className="text-xs text-inactive">(OREA)</p>
					</div>
				</div>
				<div className="h-20 bg-gradient-to-r from-transparent via-gray-200/10 to-transparent">
					<div className="flex h-20  flex-col items-center justify-center rounded-xl glass-morphism">
						<p className="text-sm text-gray-500">My Portfolio</p>
						<p className="flex items-start  text-1.75xl">
							<span className="p-1 text-sm text-inactive">$</span>8,089.00
						</p>
					</div>
				</div>
				<p className="mt-4 text-center text-sm">Official Website</p>

				<div className="relative h-[170px] w-full ">
					<DynamicDonut />
				</div>
				<SelectDates selectDepartmentHandler={(e) => console.log(e)} />
				<WeeklyInfo
					change={26}
					marketGap={'28 M USD'}
					peRatio={14.28}
					prevClose={'17,112.00'}
				/>
				<div className="mt-8 flex flex-col items-center justify-between gap-4">
					<Button variant="secondary" className="w-40 rounded-lg">
						Sell Stock
					</Button>
					<Button className="w-40 rounded-lg">Buy Stock</Button>
				</div>
			</div>
		</WidgetTemplate>
	);
}

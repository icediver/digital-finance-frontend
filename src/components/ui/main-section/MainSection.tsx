import { OverallPortfolio } from '@/components/widgets/overall-portfolio/OverallPortfolio';
import { OverviewStatistics } from '@/components/widgets/overview-statistics/OverviewStatistics';
import { StockInfo } from '@/components/widgets/stock-info/StockInfo';

interface IMainSection {}

export function MainSection({}: IMainSection) {
	return (
		<div className="grid h-[700px] w-full grid-cols-4 grid-rows-4 gap-8 ">
			<OverallPortfolio />
			<StockInfo />
			<OverviewStatistics />
		</div>
	);
}

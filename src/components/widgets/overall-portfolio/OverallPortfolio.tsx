import Button from '@/components/ui/button/Button';
import WidgetTemplate, {
	WidgetSizeEnum,
} from '../widget-template/WidgetTemplate';
import { Indicators } from './indicators/Indicators';

interface IOveralPortfolio {}

export function OverallPortfolio({}: IOveralPortfolio) {
	return (
		<WidgetTemplate size={WidgetSizeEnum['3x1']} title="Overal Portfolio">
			<div className="flex w-full flex-col">
				<div className="flex justify-between">
					<p>Overall Portfolio</p>
					<div className="flex gap-4">
						<Button variant="secondary">Withdraw</Button>
						<Button>Deposit +</Button>
					</div>
				</div>
				<Indicators />
			</div>
		</WidgetTemplate>
	);
}

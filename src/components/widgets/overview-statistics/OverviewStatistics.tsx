'use client';
import WidgetTemplate, {
	WidgetSizeEnum,
} from '../widget-template/WidgetTemplate';
import Chart from './chart/Chart';
import { SiOrigin } from 'react-icons/si';
import { useState } from 'react';
import { GoStarFill } from 'react-icons/go';
import Tabs from '@/components/ui/tabs/Tabs';
import { IconButton } from '@/components/ui/icon-button/IconButton';
import { IoMdSettings } from 'react-icons/io';
import { IoDocumentText } from 'react-icons/io5';

interface IOverviewStatistics {}

export function OverviewStatistics({}: IOverviewStatistics) {
	const [activeTab, setActiveTab] = useState(3);

	return (
		<WidgetTemplate size={WidgetSizeEnum['3x3']}>
			<div className="w-full">
				<div className="flex items-center justify-between">
					<h1>Overview Statistics</h1>
					<div className="grid grid-cols-3 gap-4">
						<IconButton Icon={IoDocumentText} handler={() => {}} />
						<IconButton Icon={GoStarFill} isActive handler={() => {}} />
						<IconButton Icon={IoMdSettings} handler={() => {}} />
					</div>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-4">
						<div className="my-6 flex h-12 w-12 items-center justify-center rounded-lg border border-main-button shadow-[inset_0_0_25px_rgba(254,82,52,0.4)]">
							<SiOrigin className="fill-main-button text-3xl" />
						</div>
						<div className={''}>
							<p className="text-xs font-bold">Origin Game EA Inc. (OREA)</p>
							<p className="text-lg">28,089.00</p>
						</div>
					</div>
					<Tabs
						values={['1D', '1W', '1M', '1Y', 'MAX']}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
						className="!w-[370px] text-sm"
					/>
				</div>

				<div className="mx-auto -ml-5 h-[370px] w-full">
					<Chart />
				</div>
			</div>
		</WidgetTemplate>
	);
}

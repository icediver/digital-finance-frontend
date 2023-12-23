import Link from 'next/link';

import { logo, topMenu, downMenu } from './data';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ISidebar {
	isSideBarOpen: boolean;
	setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
}

export function Sidebar({ isSideBarOpen, setIsSideBarOpen }: ISidebar) {
	const [activeStock, setactiveStock] = useState(0);
	const pathname = usePathname();

	return (
		<div
			className={clsx(
				'relative flex h-full flex-col items-start  rounded-l-3xl border-r border-gray-600/20 bg-main-background  py-10  transition-width',
				!isSideBarOpen ? 'w-[100px]' : 'w-[300px]'
			)}
		>
			<Link
				href={logo.path}
				className="relative left-8 mb-20 flex items-center gap-4"
			>
				<logo.Icon className="fill-logo text-3xl" />
				<div
					className={clsx(
						'w-0 overflow-hidden whitespace-nowrap text-inactive  transition-width',
						{
							['w-32']: isSideBarOpen,
						}
					)}
				>
					<h1 className={clsx('text-md  font-bold text-inactive')}>
						Digital Finance
					</h1>
				</div>
			</Link>
			<ul>
				{topMenu.map((item) => (
					<li
						key={item.title}
						className={clsx(
							'relative left-10 flex',
							!isSideBarOpen ? 'justify-center' : 'justify-start',
							'mb-6'
						)}
					>
						<Link href={item.path} className={'flex items-center gap-4'}>
							<item.Icon
								className={clsx(
									' text-xl',
									pathname === item.path ? 'fill-white' : 'fill-inactive'
								)}
							/>
							<div
								className={clsx(
									'w-0 overflow-hidden whitespace-nowrap text-inactive  transition-width',
									{
										['w-32']: isSideBarOpen,
									}
								)}
							>
								<h1
									className={clsx(
										pathname === item.path ? 'text-white' : 'text-inactive',
										'text-md font-bold'
									)}
								>
									{item.title}
								</h1>
							</div>
						</Link>
					</li>
				))}
			</ul>

			<ul className="mt-10">
				{downMenu.map((item, index) => (
					<li
						key={item.title}
						className={clsx(
							'relative left-10 flex',
							!isSideBarOpen ? 'justify-center' : 'justify-start',
							'mb-6'
						)}
					>
						<button
							className="flex items-center justify-start gap-4"
							style={{ color: item.color }}
							onClick={() => setactiveStock(index)}
						>
							<div
								className={clsx(
									'flex h-6 w-6 items-center justify-center rounded-sm',
									activeStock === index ? item.class : 'text-inactive'
								)}
							>
								<item.Icon className={clsx('text-md')} />
							</div>
							<div
								className={clsx(
									'w-0 overflow-hidden whitespace-nowrap text-inactive  transition-width',
									{
										['w-32']: isSideBarOpen,
									}
								)}
							>
								<h1
									className={clsx(
										'text-start',
										activeStock === index ? 'text-white' : 'text-inactive'
									)}
								>
									{item.title}
								</h1>
							</div>
						</button>
					</li>
				))}
			</ul>

			<button
				className="absolute right-0 top-20 flex h-6 w-6 translate-x-1/2 items-center justify-center rounded-full border border-gray-600/60 bg-red-700  text-gray-400 transparent-panel"
				onClick={() => setIsSideBarOpen(!isSideBarOpen)}
			>
				{!isSideBarOpen ? (
					<FaChevronRight className="ml-1" />
				) : (
					<FaChevronLeft />
				)}
			</button>
		</div>
	);
}

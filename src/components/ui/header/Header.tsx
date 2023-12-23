'use client';
import { FaCloudBolt } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
import { HeaderRightSide } from './header-right-side/HeaderRightSide';
interface IHeader {}

export function Header({}: IHeader) {
	return (
		<aside className="flex animate-opacity justify-between gap-3 px-10 py-8">
			<div className="flex items-center gap-3 drop-shadow-lg">
				<FaCloudBolt className="shadow-black drop-shadow-md" />
				<span className="text-xs drop-shadow">
					{new Date().toLocaleDateString('en-Us', {
						weekday: 'long',
						day: 'numeric',
						month: 'short',
						year: 'numeric',
					})}
				</span>
			</div>
			<div className="relative flex gap-3 ">
				<input
					className="w-64 rounded-lg border border-gray-800 py-1 pl-8  text-xs outline-none transparent-input"
					type="text"
					placeholder="Search"
				/>
				<FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-sm" />
			</div>
			<HeaderRightSide />
		</aside>
	);
}

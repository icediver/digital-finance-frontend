'use client';
import { useState } from 'react';
import { HeaderBackground } from './header/HeaderBackground';
import { Sidebar } from './sidebar/Sidebar';
import clsx from 'clsx';

export function Layout({ children }: { children: React.ReactNode }) {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);
	return (
		<section className="flex h-screen w-screen items-center justify-center">
			<div className="rounded-3xl bg-gray-border p-4 shadow-2xl">
				<div className="flex h-[900px] w-[1400px] justify-end rounded-3xl bg-red-700">
					<Sidebar
						isSideBarOpen={isSideBarOpen}
						setIsSideBarOpen={setIsSideBarOpen}
					/>
					<div
						className={clsx(
							'w-full rounded-r-3xl bg-main-background py-2 pr-2'
							// !isSideBarOpen ? 'w-[100%]' : 'w-[calc(100%-300px)]'
						)}
					>
						<HeaderBackground />
						{children}
					</div>
				</div>
			</div>
		</section>
	);
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../assets/styles/globals.scss';
import { Layout } from '@/components/layout/Layout';
import { Providers } from '@/providers/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Digital Finance',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="darkmode" suppressHydrationWarning>
			<body className={inter.className}>
				<Providers>
					<div className="h-screen w-screen bg-gray-background">
						<Layout>{children}</Layout>
					</div>
				</Providers>
			</body>
		</html>
	);
}

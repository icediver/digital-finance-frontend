import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';

export const metadata: Metadata = {
	title: 'Reset Password',
	...NO_INDEX_PAGE,
};

export default function Page({ params }: { params: { token: string } }) {
	return <div className="text-white">Reset Password</div>;
}

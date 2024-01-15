import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { authService } from '@/services/auth/auth.service';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Confirm Email',
	...NO_INDEX_PAGE,
};

async function getData(token: string) {
	const res = await authService.confirmEmail(token);
	console.log(res);

	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return res;
}

export default async function Page({ params }: { params: { token: string } }) {
	const { data } = await getData(params.token);
	if (!!data.user) redirect('/auth/profile');
	return <div className="text-white">{params.token}</div>;
}

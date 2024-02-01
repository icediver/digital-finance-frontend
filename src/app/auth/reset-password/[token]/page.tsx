import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { authService } from '@/services/auth/auth.service';
import { redirect } from 'next/navigation';
import { ConfirmEmail } from '@/components/screens/auth/confirm-email/ConfirmEmail';

export const metadata: Metadata = {
	title: 'Reset Password',
	...NO_INDEX_PAGE,
};

async function getData(token: string) {
	try {
		const res = await authService.confirmEmail(token);

		return res;
	} catch (error) {
		redirect('/auth/confirm-email/error');
	}

	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.
}

export default async function Page({ params }: { params: { token: string } }) {
	const { data } = await getData(params.token);
	const { refreshToken, accessToken, user } = data;
	return (
		<ConfirmEmail
			refreshToken={refreshToken}
			accessToken={accessToken}
			user={user}
		/>
	);
}

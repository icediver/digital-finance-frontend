import { authService } from '@/services/auth/auth.service';

import { redirect } from 'next/navigation';
import { ConfirmEmail } from '@/components/screens/auth/confirm-email/ConfirmEmail';

async function getData(token: string) {
	try {
		const res = await authService.confirmEmail(token);

		return res;
	} catch (error) {
		redirect('/auth/confirm-email/error');
	}
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

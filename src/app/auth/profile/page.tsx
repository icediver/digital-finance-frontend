import { Profile } from '@/components/screens/profile/Profile';
import { API_URL } from '@/constants/api.constants';
import { EnumTokens } from '@/services/auth/auth.service';
import { IUser } from '@/types/auth.interface';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
	title: 'Auth',
	description: '',
};

const fetchProfile = async () => {
	'use server';

	const cookie = cookies();
	const accessToken = cookie.get(EnumTokens.ACCESS_TOKEN)?.value;
	return fetch(`${API_URL}/users/profile`, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	}).then((res) => res.json()) as Promise<IUser>;
};

export default async function AuthPage() {
	// const user = await fetchProfile();

	return <Profile />;
}

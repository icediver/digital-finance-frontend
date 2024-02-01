import { NextRequest, NextResponse } from 'next/server';
import { EnumTokens } from './services/auth/auth.service';
import { API_URL } from './constants/api.constants';
import { IFullUser } from './types/user.interface';

export async function middleware(request: NextRequest, response: NextResponse) {
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value;
	const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value;

	try {
		const user: IFullUser = await fetch(`${API_URL}/users/profile`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
		})
			// .then((res) => (res.ok ? res : Promise.reject(res)))
			.then((data) => {
				return data.json();
			})
			.catch(() => {
				console.log('Error');
			});

		if (!user) {
			return NextResponse.rewrite(new URL('/auth', request.url));
		}

		if (!user?.isEmailVerified)
			return NextResponse.rewrite(new URL('/auth/confirm-email', request.url));

		return NextResponse.next();
	} catch (error) {
		return new Response('Error proccessing request', { status: 500 });
	}
}

export const config = {
	matcher: ['/', '/auth/profile', '/charts'],
};

'use client';
import { saveTokenStorage } from '@/services/auth/auth.helper';
import { IAuthResponse } from '@/services/auth/auth.types';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from './ConfirmEmail.module.scss';

export function ConfirmEmail({ accessToken }: IAuthResponse) {
	const { push } = useRouter();
	useEffect(() => {
		saveTokenStorage(accessToken);
		push('/auth/profile');
	}, [accessToken, push]);

	return (
		<div className="mt-48 flex items-center justify-center text-white">
			<span className={styles.loader} />
		</div>
	);
}

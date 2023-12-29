import { Auth } from '@/components/screens/auth/Auth';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Auth',
	description: '',
};

export default function AuthPage() {
	return <Auth />;
}

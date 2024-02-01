import { Auth } from '@/components/screens/auth/Auth';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Error',
	description: '',
};

export default function AuthPage() {
	return <div className="text-red-500">Sorry. Activation link is expired</div>;
}

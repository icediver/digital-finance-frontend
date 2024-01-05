'use client';
import Button from '@/components/ui/button/Button';
import { saveTokenStorage } from '@/services/auth/auth.helper';
import { authService } from '@/services/auth/auth.service';
import { IFormData } from '@/services/auth/auth.types';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export function Auth() {
	const { register, handleSubmit, reset } = useForm<IFormData>();
	const [isLogin, setIsLogin] = useState(true);
	const { push } = useRouter();
	const { mutate: mutateLogin, isPending: isLoginPending } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: IFormData) => authService.main('login', data),
		onSuccess: ({ data }) => {
			saveTokenStorage(data.accessToken);
			push('/');
			reset();
		},
		onError: (error) => {
			console.log(error);
		},
	});
	const { mutate: mutateRegister, isPending: isRegisterPending } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IFormData) => authService.main('register', data),
		onSuccess: ({ data }) => {
			saveTokenStorage(data.accessToken);
			push('/');
			reset();
		},
		onError: (error) => {
			console.log(error); // mutateRegister;
		},
	});
	const isPending = isLoginPending || isRegisterPending;
	const onSubmit: SubmitHandler<IFormData> = (data) => {
		if (isLogin) {
			mutateLogin(data);
		} else {
			mutateRegister(data);
		}
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="mx-auto -mt-20 max-w-sm rounded-lg p-6 glass-morphism"
		>
			<div className="mb-6">
				<label className="block text-sm font-medium text-gray-700">
					Email
					<input
						type="email"
						placeholder="Enter email: "
						{...register('email', { required: true })}
						className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
				</label>
			</div>
			<div className="mb-6">
				<label className="block text-sm font-medium text-gray-700">
					Password
					<input
						type="password"
						placeholder="Enter password: "
						{...register('password', { required: true })}
						className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
				</label>
			</div>
			<div className="mb-6">
				<Button variant="secondary" type="submit" disabled={isPending}>
					{isLogin ? 'Login' : 'Register'}
				</Button>
			</div>
			<p className="text-inactive">
				{!isLogin ? 'Already have an account? ' : "Don't have an account? "}
				<button
					type="button"
					className="text-indigo-600"
					onClick={() => setIsLogin(!isLogin)}
				>
					{!isLogin ? 'Login' : 'Register'}
				</button>
			</p>
		</form>
	);
}

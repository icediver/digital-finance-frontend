'use client';
import Button from '@/components/ui/button/Button';
import Field from '@/components/ui/form/field/Field';
import { useProfile } from '@/hooks/useProfile';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

interface IProfile {
	// user: IUser;
}

export function Profile({}: IProfile) {
	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
		resetField,
		watch,
	} = useForm({
		mode: 'onChange',
	});

	const { profile, onSubmit } = useProfile(setValue, resetField);

	return (
		<form
			className="mx-auto -mt-20 h-[600px] w-3/4 rounded-lg p-6 text-white glass-morphism"
			onSubmit={handleSubmit(onSubmit)}
		>
			<h1 className="mb-3 text-xl font-semibold text-white">Profile</h1>
			<div className="h-[250px]">
				<Image
					src={profile?.avatarPath || '/uploads/avatars/unknown_user.jpg'}
					alt="avatar"
					width={200}
					height={100}
					className="rounded-lg"
				/>
			</div>
			<div className="flex gap-8">
				<div>
					<Field
						{...register('name')}
						placeholder="name"
						error={errors?.name?.message?.toString()}
						label="name"
					/>
					<Field
						{...register('email')}
						placeholder="email"
						error={errors.email?.message?.toString()}
						label="email"
					/>
				</div>
				<div>
					<Field
						{...register('password', {
							minLength: {
								value: 6,
								message: 'Min length should more than 6 symbols!',
							},
						})}
						error={errors['password']?.message?.toString()}
						label="password"
						type="password"
					/>
					<Field
						{...register('confirmPassword', {
							validate: (val: string) => {
								if (watch('password') !== val) {
									return 'You password is incorect';
								}
							},
						})}
						error={errors['confirmPassword']?.message?.toString()}
						label="confirm password"
						type="password"
					/>
				</div>
			</div>
			<div className="text-end">
				<Button variant="primary" className="relative  my-12 mr-8 w-40 py-2">
					change profile
				</Button>
			</div>
		</form>
	);
}

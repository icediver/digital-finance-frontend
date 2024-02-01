import { useMutation, useQuery } from '@tanstack/react-query';

import { userService } from '@/services/user.service';
import { getAccessToken } from '@/services/auth/auth.helper';
import { TypeUserProfileFields } from '@/types/user.interface';
import {
	SubmitHandler,
	UseFormResetField,
	UseFormSetValue,
} from 'react-hook-form';
import { useEffect } from 'react';

type TypeFieldValue<T> = {
	[K in keyof T]: T[K];
};

export const useProfile = (
	setValue: UseFormSetValue<TypeFieldValue<TypeUserProfileFields>>,
	resetField: UseFormResetField<TypeUserProfileFields>
) => {
	const accessToken = getAccessToken();
	const { data, isLoading, refetch, isSuccess } = useQuery({
		queryKey: ['get profile'],
		queryFn: () => userService.getProfile(),
		select: ({ data }) => data,
		enabled: !!accessToken,
	});
	const { mutateAsync } = useMutation({
		mutationKey: ['update profile'],
		mutationFn: (body: TypeUserProfileFields) =>
			userService.updateProfile(body),
	});

	useEffect(() => {
		if (isSuccess) {
			if (data.name) setValue('name', data.name);
			if (data.email) setValue('email', data.email);
			if (data.password) setValue('password', data.password);
		}
	}, [isSuccess, data?.name, setValue, data?.email, data?.password]);

	const onSubmit: SubmitHandler<TypeUserProfileFields> = async (data) => {
		await mutateAsync(data);
		if (resetField) {
			resetField('password');
		}
		if (resetField) {
			resetField('confirmPassword');
		}
	};
	return { isLoading, profile: data, refetch, mutateAsync, onSubmit };
};

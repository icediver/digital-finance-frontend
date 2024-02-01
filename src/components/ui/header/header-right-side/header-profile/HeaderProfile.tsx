import { useProfile } from '@/hooks/useProfile';
import { getAccessToken } from '@/services/auth/auth.helper';
import { authService } from '@/services/auth/auth.service';
import { userService } from '@/services/user.service';
import { useMutation, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

interface IHeaderProfile {}
export function HeaderProfile({}: IHeaderProfile) {
	const [isLogoutWindowOpen, setIsLogoutWindowOpen] = useState(false);
	const { push } = useRouter();
	const { data, isLoading, refetch, isSuccess } = useQuery({
		queryKey: ['get profile'],
		queryFn: () => userService.getProfile(),
		select: ({ data }) => data,
	});

	const { mutate: mutateLogout, isPending: isLogoutPending } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => push('/auth'),
	});
	useEffect(() => {
		const token = getAccessToken();
		if (!token) push('/auth');
	});
	return (
		<div className="relative flex items-center gap-3">
			<Image
				src={data?.avatarPath || '/uploads/avatars/unknown_user.jpg'}
				width={30}
				height={30}
				alt={data?.name || 'name'}
				className="rounded-full"
			/>
			<div>
				<div className="flex justify-between text-xs">
					<div>{data?.name}</div>
					<button onClick={() => setIsLogoutWindowOpen(!isLogoutWindowOpen)}>
						<FaChevronDown />
					</button>
				</div>
				<div className="text-xs">{data?.email}</div>
			</div>
			{isLogoutWindowOpen && (
				<button
					className="absolute right-0 top-8 z-30 h-16 w-32 animate-opacity rounded-md p-2 text-sm glass-morphism"
					onClick={() => mutateLogout()}
				>
					logout
				</button>
			)}
		</div>
	);
}

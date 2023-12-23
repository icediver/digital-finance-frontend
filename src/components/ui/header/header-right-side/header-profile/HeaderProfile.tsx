import Image from 'next/image';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

interface IHeaderProfile {}
const currentUser = {
	email: 'ilon-mask@x.com',
	name: 'Ilon Mask',
	avatarPath: 'https://i.pravatar.cc/300?img=56',
	phone: '+7 (876) 591-00-11',
};
export function HeaderProfile({}: IHeaderProfile) {
	const [isLogoutWindowOpen, setIsLogoutWindowOpen] = useState(false);
	return (
		<div className="relative flex items-center gap-3">
			<Image
				src={currentUser.avatarPath}
				width={30}
				height={30}
				alt={currentUser.name}
				className="rounded-full"
			/>
			<div>
				<div className="flex justify-between text-xs">
					<div>{currentUser.name}</div>
					<button onClick={() => setIsLogoutWindowOpen(!isLogoutWindowOpen)}>
						<FaChevronDown />
					</button>
				</div>
				<div className="text-xs">{currentUser.email}</div>
			</div>
			{isLogoutWindowOpen && (
				<button className="absolute right-0 top-8 z-30 h-16 w-32 animate-opacity rounded-md p-2 text-sm glass-morphism">
					logout
				</button>
			)}
		</div>
	);
}

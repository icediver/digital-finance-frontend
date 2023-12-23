import { MdWindow } from 'react-icons/md';
import { BiSolidChart, BiSolidWalletAlt } from 'react-icons/bi';
import { IconType } from 'react-icons';
import { PiArticleFill } from 'react-icons/pi';
import { AiFillMessage } from 'react-icons/ai';
import { HiUser } from 'react-icons/hi2';
import { GiPieChart } from 'react-icons/gi';
import { FaRegCircle, FaSpotify } from 'react-icons/fa';
import { SiNetflix, SiOrigin } from 'react-icons/si';
import { FiPlus } from 'react-icons/fi';
import { IoLogoAmazon, IoLogoApple } from 'react-icons/io5';

export interface IMenu {
	title: string;
	Icon: IconType;
	path: string;
	class?: string;
}

export const logo: IMenu = {
	title: 'Digital Finance',
	Icon: FaRegCircle,
	path: '/',
};

export const topMenu: IMenu[] = [
	{
		title: 'Dashboard',
		Icon: MdWindow,
		path: '/',
	},
	{
		title: 'Charts',
		Icon: BiSolidChart,
		path: '/charts',
	},
	{
		title: 'Analytics',
		Icon: GiPieChart,
		path: '/analytics',
	},

	{
		title: 'Finances',
		Icon: BiSolidWalletAlt,
		path: '/finances',
	},
	{
		title: 'Messages',
		Icon: AiFillMessage,
		path: '/messages',
	},
	{
		title: 'Profile',
		Icon: HiUser,
		path: '/profile',
	},
];

export const downMenu: IMenu[] = [
	{
		title: 'Origin',
		Icon: SiOrigin,
		class:
			'border border-main-button text-main-button shadow-[inset_0_0_25px_rgba(254,82,52,0.2)]',
		path: '/origin',
	},
	{
		title: 'Spotyfy',
		Icon: FaSpotify,
		class:
			'border border-secondary text-secondary shadow-[inset_0_0_25px_rgba(254,82,52,0.2)]',
		path: '/spotify',
	},
	{
		title: 'Netflix',
		Icon: SiNetflix,
		class:
			'border border-third text-third shadow-[inset_0_0_25px_rgba(254,82,52,0.2)]',
		path: '/netflix',
	},

	{
		title: '/Apple',
		Icon: IoLogoApple,
		class:
			'border border-inactive text-inactive shadow-[inset_0_0_25px_rgba(254,82,52,0.2)]',
		path: '/apple',
	},
	{
		title: 'Messages',
		Icon: IoLogoAmazon,
		class:
			'border border-red-800 text-red-800 shadow-[inset_0_0_25px_rgba(254,82,52,0.2)]',

		path: '/messages',
	},
	{
		title: 'AddInstrument',
		Icon: FiPlus,
		path: '/add-instrument',
	},
];

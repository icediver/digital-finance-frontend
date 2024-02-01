import { instance } from '@/api/axios';
import {
	IFullUser,
	IUser,
	TypeUserProfileFields,
} from '@/types/user.interface';

const USERS = 'users';

type TypeData = {
	email: string;
	password?: string;
	name?: string;
	avatarPath?: string;
};

export const userService = {
	async getProfile() {
		console.log('1234');

		const profile = await instance<IFullUser>({
			url: `/${USERS}/profile`,
			method: 'GET',
		});

		console.log(profile);

		return profile;
	},

	async updateProfile(data: TypeUserProfileFields) {
		return instance<IUser>({
			url: `/${USERS}/profile`,
			method: 'PUT',
			data,
		});
	},
};

import type { IUser } from '@/types/auth.interface';

export interface IAuthResponse {
	accessToken: string;
	refreshToken: string;
	user: IUser;
}

export interface IFormData {
	email: string;
	password: string;
}

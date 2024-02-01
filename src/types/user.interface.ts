export interface IUser {
	id: number;
	email: string;
	name: string;
	avatarPath: string;
	isEmailVerified: string;
	isAdmin: boolean;
}

export interface IFullUser extends IUser {
	password: string;
}

export interface IUserFields extends IUser {
	password: string;
	confirmPassword: string;
}

export type TypeUserProfileFields = Partial<IUserFields>;

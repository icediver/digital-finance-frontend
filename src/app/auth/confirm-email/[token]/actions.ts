'use server';

import { cookies } from 'next/headers';
interface ICookie {
	name: string;
	value: string;
}
export async function serverSaveToCookie({ name, value }: ICookie) {
	cookies().set(name, value);
	// or
	// cookies().set('name', 'lee', { secure: true })
	// // or
	// cookies().set({
	//   name: 'name',
	//   value: 'lee',
	//   httpOnly: true,
	//   path: '/',
	// })
}

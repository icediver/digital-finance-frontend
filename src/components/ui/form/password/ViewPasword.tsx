import { Dispatch, FC, SetStateAction } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export interface IViewPassword {
	inputType: string;
	setInputType: Dispatch<SetStateAction<string>>;
}
const ViewPassword: FC<IViewPassword> = ({ inputType, setInputType }) => {
	return (
		<button className="absolute right-4" type="button">
			{inputType === 'password' ? (
				<AiFillEye
					className="fill-logo"
					color={'#DDD'}
					onClick={() => {
						setInputType('text');
					}}
				/>
			) : (
				<AiFillEyeInvisible
					className="fill-logo"
					color={'#DDD'}
					onClick={() => {
						setInputType('password');
					}}
				/>
			)}
		</button>
	);
};

export default ViewPassword;

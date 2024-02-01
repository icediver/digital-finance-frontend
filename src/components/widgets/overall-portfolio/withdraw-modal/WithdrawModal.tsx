import Button from '@/components/ui/button/Button';
import Field from '@/components/ui/form/field/Field';
import ModalPortal from '@/components/ui/modal/ModalPortal';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaCcVisa } from 'react-icons/fa6';
import { IoCalendarSharp } from 'react-icons/io5';

interface IWithdrawModal {
	isOpen: boolean;
	closeModal: () => void;
}

export function WithdrawModal({ isOpen, closeModal }: IWithdrawModal) {
	const { register, setValue } = useForm({ mode: 'onChange' });
	useEffect(() => {
		setValue('withdraw', '10');
	}, []);
	return (
		<ModalPortal isOpen={isOpen} closeModal={closeModal}>
			<div className="grid grid-cols-5 text-white/80">
				<div className="flex flex-col justify-between">
					<div>
						<div>Your account</div>
						<div>№ 18420446USD</div>
					</div>

					<div>
						<div>Total</div>
						<div>$ 1000</div>
					</div>
					<div>
						<div>Available for withdrawal</div>
						<div>$ 1000</div>
					</div>
				</div>
				<form className="col-span-3 mx-auto w-3/4  text-center">
					<div className="flex items-center gap-6">
						<FaCcVisa />
						<span>Visa **** 0846</span>
					</div>
					<Field
						className="justify-between [&>input]:w-16"
						label="Amount"
						{...register('withdraw')}
					/>
					<div className="flex items-center text-sm">
						<IoCalendarSharp />
						<p>&nbsp;&nbsp;We will process request as quickly as possible</p>
					</div>
					<Button className="my-10 w-3/4">Send a request</Button>
				</form>
				<div className="w-40 text-start">
					<p>Minimum withdrawal amount $10</p>
					<br />
					<p>
						The money will be debites from the acount when the request is paid.
					</p>
					<br />
					<p>
						Withdrawals are processed by the same payment systems used to
						deposit money into the system
					</p>
				</div>
			</div>
		</ModalPortal>
	);
}

import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';

import ReactDOM from 'react-dom';
import { RiCloseFill } from 'react-icons/ri';
import { ModalLayout } from './modal-layout/ModalLayout';

interface IModal {
	isOpen: boolean;
	closeModal: () => void;
	children: ReactNode;
}
export default function ModalPortal({ children, isOpen, closeModal }: IModal) {
	const modalRef = useRef<HTMLElement | null>(document.getElementById('modal'));

	if (!isOpen || !modalRef.current) {
		return null;
	}

	return ReactDOM.createPortal(
		<ModalLayout isOpen={isOpen} onClose={closeModal}>
			<div
				className={
					'relative left-1/2  top-1/4 h-3/4 w-full -translate-x-1/2 -translate-y-1/4 rounded-2xl border border-gray-400/30 bg-black p-6 text-inactive'
				}
			>
				<button
					onClick={closeModal}
					className="fixed right-3 top-3 text-inactive hover:text-red-500"
				>
					<RiCloseFill />
				</button>
				{children}
			</div>
		</ModalLayout>,
		modalRef.current
	);
}

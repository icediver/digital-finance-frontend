import { InputHTMLAttributes } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

import { IconType } from 'react-icons';

export interface IFieldProps {
	placeholder?: string;
	error?: string;
	label?: string;
	className?: string;
	Icon?: IconType;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends TypeInputPropsField {}

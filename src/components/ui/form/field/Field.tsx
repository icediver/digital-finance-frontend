import { forwardRef, useState } from 'react';

import { IField } from './field.interface';
import ViewPassword from '../password/ViewPasword';
import clsx from 'clsx';

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{
			label,
			placeholder,
			error,
			className,
			type = 'text',
			Icon = false,
			style,
			...rest
		},
		ref
	) => {
		const [inputType, setInputType] = useState(type);
		return (
			<>
				<div
					className={clsx('relative  flex items-center gap-8  pt-4', className)}
				>
					<div className="w-36 text-start">{label}</div>
					<input
						ref={ref}
						placeholder={placeholder}
						type={inputType}
						{...rest}
						className="w-64 rounded-md py-1 pl-8 outline-none  glass-morphism"
					/>
					{type === 'password' && (
						<ViewPassword inputType={inputType} setInputType={setInputType} />
					)}
				</div>

				<div className="h-3 text-end text-sm text-red-500">{error}</div>
			</>
		);
	}
);

Field.displayName = 'Field';

export default Field;

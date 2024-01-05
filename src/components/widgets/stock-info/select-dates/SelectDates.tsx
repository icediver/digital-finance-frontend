import clsx from 'clsx';

import { IconType } from 'react-icons';
import { MdOutlineWatchLater } from 'react-icons/md';
import Select, { SingleValue, components } from 'react-select';
interface ISelectDepartment {
	selectDepartmentHandler: (department: string) => void;
}
interface ISortedOption {
	value: string;
	label: string;
	Icon: IconType;
}
const options: ISortedOption[] = [
	{
		value: '08 Nov - 17 Nov',
		label: '08 Nov - 17 Nov',
		Icon: MdOutlineWatchLater,
	},
	{
		value: '17 Nov - 24 Nov',
		label: '17 Nov - 24 Nov',
		Icon: MdOutlineWatchLater,
	},
	{
		value: '24 Nov - 01 Dec',
		label: '24 Nov - 01 Dec',
		Icon: MdOutlineWatchLater,
	},
	{
		value: '01 Dec - 08 Dec',
		label: '01 Dec - 08 Dec',
		Icon: MdOutlineWatchLater,
	},
];
const { Option, Control } = components;

function IconOption(props: any) {
	const {
		data: { label, Icon },
	} = props;

	return (
		<Option {...props}>
			<div className="flex items-center gap-2">
				{Icon && <Icon />}
				<span>{label}</span>
			</div>
		</Option>
	);
}

export default function SelectDates({
	selectDepartmentHandler,
}: ISelectDepartment) {
	function changeSelectHandler(newValue: SingleValue<ISortedOption>) {
		if (newValue) selectDepartmentHandler(newValue?.value);
		if (newValue === null) selectDepartmentHandler('');
	}
	return (
		<div className="relative mx-auto mt-8 w-52">
			<Select
				options={options}
				onChange={changeSelectHandler}
				instanceId={'select-date'}
				// placeholder={'08 Nov - 17 Nov'}
				components={{ Option: IconOption }}
				defaultValue={options[0]}
				// isClearable
				// menuPortalTarget={document.body}
				// menuPosition={'fixed'}
				classNames={{
					control: ({ isFocused, menuIsOpen }) =>
						clsx(
							'rounded-lg  !pl-10 !text-sm !glass-morphism',
							isFocused
								? '!border !border-solid !shadow-none'
								: '!border !border-transparent ',
							menuIsOpen && '!rounded-b-none'
						),
					indicatorSeparator: () => 'hidden',
					// indicatorsContainer: () => '!w-14 !p-0 !justify-end !text-inactive',
					// clearIndicator: () => '!p-0 !text-logo',
					dropdownIndicator: () => '!text-inactive',
					singleValue: () => '!text-white',
					menu: (menuIsOpen) =>
						clsx(
							'!mt-0 rounded-lg !bg-widget-background pl-2 !text-sm',

							menuIsOpen && '!border-t-none !rounded-t-none glass-morphism'
						),

					option: ({ isFocused, isSelected, isDisabled }) =>
						clsx(
							isFocused && '!bg-main-button !text-white',
							isSelected && !isFocused && '!bg-widget-background !text-inactive'
							// isSelected && isFocused && '!bg-secondary !text-inactive'
						),
				}}
			/>
			<MdOutlineWatchLater className="absolute left-4  top-1/2 -translate-y-1/2 text-sm text-inactive" />
		</div>
	);
}

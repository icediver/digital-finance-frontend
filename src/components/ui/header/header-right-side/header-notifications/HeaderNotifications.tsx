import { IoMoon } from 'react-icons/io5';
import { PiMicrophoneFill } from 'react-icons/pi';
import { BiSolidBell } from 'react-icons/bi';
interface IHeaderNotifications {}

export function HeaderNotifications({}: IHeaderNotifications) {
	return (
		<div className="flex gap-10 shadow-black drop-shadow-md">
			<button>
				<IoMoon className="" />
			</button>
			<button>
				<PiMicrophoneFill />
			</button>
			<button>
				<BiSolidBell />
			</button>
		</div>
	);
}

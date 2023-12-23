import { HeaderNotifications } from "./header-notifications/HeaderNotifications";
import { HeaderProfile } from "./header-profile/HeaderProfile";

export function HeaderRightSide() {
  return (
    <div className="flex gap-10 items-center">
      <HeaderNotifications />
      <HeaderProfile />
    </div>
  );
}

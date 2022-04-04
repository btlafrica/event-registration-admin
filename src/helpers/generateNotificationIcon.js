import { ATCIcon, TIcon,ReceivedMoneyIcon } from "assets";
export const generateNotificationIcon = (notification) => {
  const { notificationType, title } = notification;
  let icon = <TIcon />;
  if (notificationType === "alert" && title === "Airtime to Cash Approval") {
    icon = <ATCIcon />;
  }
  if (notificationType === "alert" && title === "Transfer of funds") {
    icon = <ReceivedMoneyIcon />;
  }
  return icon
};

import { Notification as RSNotification } from "rsuite";
export function Notification(type, title, desription) {
  RSNotification[type]({
    title,
    desription,
    placement: "bottomEnd",
  });
}

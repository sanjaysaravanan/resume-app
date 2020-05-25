import { notificationInstance } from "../../axios.config";

export function sendMail(data) {
  return notificationInstance.post(`/api/send-mail`, data);
}

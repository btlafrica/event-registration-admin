import { Logger } from "aws-amplify";

export const log = (msg) => {
  let message;
  if (typeof msg === "object") {
    if (JSON.stringify(msg) !== "{}") {
      message = JSON.stringify(msg);
    } else {
      message = msg.toString();
    }
  } else {
    message = msg;
  }
  return message
//   console.error("error: " + message);
};

export const logger = new Logger("tranzopay-client-app");

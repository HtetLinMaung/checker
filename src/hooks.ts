import checkPassportOpenTime from "./handlers/check-passport-open-time";
import moment from "moment";

export const afterMasterProcessStart = async () => {
  setInterval(() => {
    console.log(moment().format("hh:mm:ss"));
  }, 1000);
  const passportInterval = setInterval(() => {
    checkPassportOpenTime(passportInterval);
  }, parseInt(process.env.passport_interval || "0") || 60 * 1000);
};

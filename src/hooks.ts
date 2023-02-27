import checkPassportOpenTime from "./handlers/check-passport-open-time";

export const afterMasterProcessStart = async () => {
  const passportInterval = setInterval(() => {
    checkPassportOpenTime(passportInterval);
  }, parseInt(process.env.passport_interval || "0") || 60 * 1000);
};

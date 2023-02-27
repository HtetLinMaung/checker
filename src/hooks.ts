import checkPassportOpenTime from "./handlers/check-passport-open-time";

export const afterMasterProcessStart = async () => {
  checkPassportOpenTime();
};

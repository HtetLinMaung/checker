import httpClient from "starless-http";

export default async function checkPassportOpenTime(intervalId: any = null) {
  try {
    console.log("Checking https://www.passport.gov.mm");
    const [res, err] = await httpClient.get("https://www.passport.gov.mm");
    if (err || !res || res.status != 200) {
      throw new Error("Something went wrong!");
    }
    // console.log(res.data);

    if (
      !res.data.includes(
        "ဝန်ဆောင်မှုပြန်လည်စတင်ဖွင့်လှစ်မည့်အချိန်ကို ကြေညာပေးသွားပါမည်"
      )
    ) {
      console.log("Can submit");
      httpClient.post("https://mxgw.omnicloudapi.com/sms/sendmessage", {
        phoneno: "+959404888722",
        message: "Can submit now",
        appid: "005",
        accesskey: "784f5cd57c1612a6",
        sender_info: "ConnectMM",
      });
      if (intervalId) {
        clearInterval(intervalId);
      }
    } else {
      console.log("Can't submit");
    }
  } catch (err) {
    console.error(err);
  }
}

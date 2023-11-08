function timeConversion(s) {

    let [hr, min, sec] = s.slice(0, 8).split(":"); // remove the am/pm and convert into a array
    const am_pm = s.charAt(8);  // check the given input either am or pm
    let ans;
    // write the condition for AM format

    if (am_pm === "A") { // 12:00:00am (night) - 11:59:59am (noon)

        // 12:00 am -> 00:00:00 HRS
        // 01:00 am -> 01:00 HRS
        // 02:00 am -> 02:00 HRS
        // 03:00 am -> 03:00 HRS
        // 04:00 am -> 04:00 HRS
        // 05:00 am -> 05:00 HRS
        // 06:00 am -> 06:00 HRS
        // 07:00 am -> 07:00 HRS
        // 08:00 am -> 08:00 HRS
        // 09:00 am -> 09:00 HRS
        // 10:00 am -> 10:00 HRS
        // 11:00 am -> 11:00 HRS
        // 11:59 am -> 11:59 HRS

        if (Number(hr) < 12) {
            ans = `${hr}:${min}:${sec}`
        }
        if (Number(hr) == 12) {
            ans = `${Number(hr) - 12 === 0 ? "00" : ""}:${min}:${sec}`
        }
    }
    if (am_pm === "P") {

        // 12:01 pm -> 12:01 HRS

        // 01:00 pm -> 13:00 HRS
        // 02:00 pm -> 14:00 HRS
        // 03:00 pm -> 15:00 HRS
        // 04:00 pm -> 16:00 HRS
        // 05:00 pm -> 17:00 HRS
        // 06:00 pm -> 18:00 HRS
        // 07:00 pm -> 19:00 HRS
        // 08:00 pm -> 20:00 HRS
        // 09:00 pm -> 21:00 HRS
        // 10:00 pm -> 22:00 HRS
        // 11:00 pm -> 23:00 HRS
        // 11:59 pm -> 23:59 HRS

        if (Number(hr) < 12) {
            ans = `${Number(hr) + 12}:${min}:${sec}`
        }
        if (Number(hr) === 12) {
            ans = `${hr}:${min}:${sec}`
        }

    }

    return ans;

}

console.log(timeConversion("12:01:00AM"))
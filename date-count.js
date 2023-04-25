const targetDate = new Date("2023-05-01");
const today = new Date();
const timeDiff = targetDate.getTime() - today.getTime();
const daysDiff = Math.ceil(timeDiff / (1000*3600*24));
const result = document.getElementById("date");
result.innerHTML = `You need to renew your container in ${daysDiff} days`;
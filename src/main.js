setInterval(() => {
  //获取HTML页面中class为timer中的文字
  let timer = document.getElementsByClassName("timer");
  let week = document.getElementsByClassName("weekP");
  let month = document.getElementsByClassName("monthP");

  let myDate = new Date();
  let thisDays = myDate.getDate();
  let thisHours = myDate.getHours();
  let thisMinutes = myDate.getMinutes();
  let thisSeconds = myDate.getSeconds();
  let thisWeek = myDate.getDay();
  //当天剩余
  //时
  let overplusHours = 24 - thisHours - 1;
  //分
  let overplusMinutes = 60 - thisMinutes - 1;
  //秒
  let overplusSeconds = 60 - thisSeconds;
  //本月剩余天数百分比
  let overplusDayOfMonth = 100 - ((31 - thisDays) / 31) * 100;
  let monthDayPercent = overplusDayOfMonth.toFixed(0) + "%";
  //本周剩余天数百分比
  let overplusDayOfWeek = ((7 - thisWeek) / 7) * 100;
  let weekDayPercent = overplusDayOfWeek.toFixed(0) + "%";

  timer[0].innerHTML =
    overplusHours +
    "时&nbsp;" +
    overplusMinutes +
    "分&nbsp;" +
    overplusSeconds +
    "秒";
  week[0].innerHTML = weekDayPercent;
  month[0].innerHTML = monthDayPercent;
  function move() {
    let weekPBar = document.querySelector(".weekPBar");
    let monthPBar = document.querySelector(".monthPBar");
    let weekWidth = overplusDayOfWeek;
    let monthWidth = overplusDayOfMonth;
    let id = setInterval(frame, 100);
    function frame() {
      if (weekWidth <= 100) {
        weekPBar.style.width = weekWidth + "%";
      } else {
        clearInterval(id);
      }
      if (monthWidth <= 100) {
        monthPBar.style.width = monthWidth + "%";
      } else {
        clearInterval(id);
      }
    }
  }
  move();
}, 500);


/*>>>Time>>>>>>>>>>>
<<<<<<<Section<<<<*/

let yearP = document.getElementById("kanjiYear");
let monthP = document.getElementById("kanjiMonth");
let dayP = document.getElementById("kanjiDay");
let hourP = document.getElementById("kanjiHour");
let minuteP = document.getElementById("kanjiMinute");
let secondP = document.getElementById("kanjiSecond");

export function updateKanjiTime() {
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let day = new Date().getDate();
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();

  yearP.innerText = `${year}年`;
  monthP.innerText = `${month}月`;
  dayP.innerText = `${day}日`;
  hourP.innerText = `${hour}時`;
  minuteP.innerText = `${minute}分`;
  secondP.innerText = `${second}秒`;
}
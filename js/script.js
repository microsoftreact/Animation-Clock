let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let seconds = document.querySelector("#seconds");

setInterval(clock, 1000);
function clock() {
  let h =
    new Date().getHours() < 10
      ? "0" + new Date().getHours()
      : new Date().getHours();
  let m =
    new Date().getMinutes() < 10
      ? "0" + new Date().getMinutes()
      : new Date().getMinutes();
  let s =
    new Date().getSeconds() < 10
      ? "0" + new Date().getSeconds()
      : new Date().getSeconds();
  hour.innerHTML = h;
  minute.innerHTML = m;
  seconds.innerHTML = s;
}
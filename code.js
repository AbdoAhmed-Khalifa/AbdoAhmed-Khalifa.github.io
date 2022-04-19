// header other links
let links = document.querySelector(".other-links");
let mega = document.querySelector(".header .megaMenu");
links.addEventListener("click", (e) => {
  e.preventDefault();
  mega.classList.toggle("remove");
});

//awesome Stats
let num = document.querySelectorAll(".box .number");
let statSection = document.querySelector(".stats");
let targetSection = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= statSection.offsetTop - 200) {
    if (!targetSection) {
      num.forEach((n) => increament(n));
    }
    targetSection = true;
  }
});
function increament(el) {
  let countNumber = el.dataset.count;
  let conunter = setInterval(() => {
    el.firstChild.textContent++;
    if (el.firstChild.textContent === countNumber) {
      clearInterval(conunter);
    }
  }, 2000 / countNumber);
}
// our skills
let skillsSection = document.querySelector(".ourSkills");
let spans = document.querySelectorAll(".ourSkills .skill span");

window.addEventListener("scroll", function () {
  if (window.scrollY >= skillsSection.offsetTop - 100) {
    spans.forEach((s) => (s.style.width = s.dataset.width));
  }
});

//event section
let daySpan = document.querySelector(".time .days span");
let hourSpan = document.querySelector(".time .hours span");
let minuteSpan = document.querySelector(".time .minutes span");
let secondSpan = document.querySelector(".time .seconds span");

let targetDate = new Date("Feb 28 2022 24:00:00").getTime();

let timeEvent = setInterval(() => {
  let dateNow = new Date().getTime();
  let remainTime = targetDate - dateNow;

  let days = Math.floor(remainTime / (1000 * 60 * 60 * 24));
  daySpan.textContent = days < 10 ? `0${days}` : days;
  let hours = Math.floor(
    (remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  hourSpan.textContent = hours < 10 ? `0${hours}` : hours;
  let minutes = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60));
  minuteSpan.textContent = minutes < 10 ? `0${minutes}` : minutes;
  let seconds = Math.floor((remainTime % (1000 * 60)) / 1000);
  secondSpan.textContent = seconds < 10 ? `0${seconds}` : seconds;
  if (remainTime < 1000) {
    clearInterval(timeEvent);
  }
}, 1000);

// scroll btn
let span = document.querySelector(".up-btn");

window.onscroll = function () {
  this.scrollY >= 1000
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

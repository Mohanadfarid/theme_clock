// manageing the dark and light modes

const html = document.querySelector("html");
const dark_light_mode = document.querySelector("#dark_light_mode");
dark_light_mode.addEventListener("click", () => {
  html.classList.toggle("dark");
});

//opertaing the clock
const sconds_needel = document.querySelector("#seconds");
const minutes_needel = document.querySelector("#minutes");
const hours_needel = document.querySelector("#hours");

const setTime = () => {
  const date = new Date();

  //manageing the clock itself
  const hours = date.getHours();
  const hours_12 = hours > 12 ? hours - 12 : hours;
  hours_needel.style.transform = `translateY(-100%) rotate(${
    (360 / 12) * hours_12
  }deg)`;
  const minutes = date.getMinutes();
  minutes_needel.style.transform = `translateY(-100%) rotate(${
    (360 / 60) * minutes
  }deg)`;
  const seconds = date.getSeconds();
  sconds_needel.style.transform = `translateY(-100%) rotate(${
    (360 / 60) * seconds
  }deg)`;

  //manageing the time_in_numbers
  const time_in_numbers = document.querySelector("#time_in_numbers");

  time_in_numbers.innerText = `${hours_12}:${
    minutes <= 9 ? `0${minutes}` : minutes
  } ${hours > 12 ? "PM" : "AM"}`;

  //managing the date
  const date_txt = document.querySelector("#date");
  date_txt.textContent = date.toDateString();

};
setTime();
setInterval(() => {
  setTime();
}, 1000);

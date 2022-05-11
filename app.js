const toggle = document.querySelector(".toggle-theme");
const hourEl = document.querySelector(".hour");
const minutEl = document.querySelector(".minut");
const secondEl = document.querySelector(".second");
const time = document.querySelector(".date h1");
const date = document.querySelector(".date h2");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let imgStr = btn.dataset.img
        document.querySelector(".clock-container").style.backgroundImage = `url(${imgStr})`;
    });
});

toggle.addEventListener("click", () => {
    const html = document.querySelector("html");
    if (html.classList.contains("active")) {
        html.classList.remove("active");
    } else {
        html.classList.add("active");
    }
});

function setClock() {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const week = now.getDay();
    const hour = now.getHours();
    const hourForClock = hour % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hour >= 12 ? "PM" : "AM";

    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(
        hourForClock,
        0,
        11,
        0,
        360
    )}deg)`;
    minutEl.style.transform = `translate(-50%,-100%) rotate(${scale(
        minutes,
        0,
        60,
        0,
        360
    )}deg)`;
    secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(
        seconds,
        0,
        60,
        0,
        360
    )}deg)`;

    time.innerHTML = `${hourForClock}:${
        minutes < 10 ? `0${minutes}` : minutes
    } ${ampm}`;
    date.innerHTML = `${weeks[week]}, &nbsp; ${months[month]}, &nbsp; ${day}, &nbsp; ${year}-year`;
}
// setClock();

setInterval(setClock, 1000);

function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

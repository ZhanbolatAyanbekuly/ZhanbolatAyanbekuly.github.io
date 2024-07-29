// countdown.js
const discountEndDate = new Date('2023-11-25T23:59:59');

function formatNumberWithLeadingZero(number) {
     if (number < 10) {
          return '0' + number;
     } else {
          return String(number);
     }
}

function updateCountdown() {
     const currentDate = new Date();
     const timeLeft = discountEndDate - currentDate;

     if (timeLeft < 0) {
          document.getElementById("countdown").innerHTML = "Discount Expired";
     } else {
          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

          document.getElementById("days").textContent = formatNumberWithLeadingZero(days);
          document.getElementById("hours").textContent = formatNumberWithLeadingZero(hours);
          document.getElementById("minutes").textContent = formatNumberWithLeadingZero(minutes);
          document.getElementById("seconds").textContent = formatNumberWithLeadingZero(seconds);
     }
}

setInterval(updateCountdown, 1000);
updateCountdown();
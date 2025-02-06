document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".profile-card");

  // Set initial state (hidden and slightly shifted)
  card.style.opacity = "0";
  card.style.transform = "translateY(-20px)";
  card.style.transition = "opacity 0.5s ease, transform 0.5s ease"; // transition applied early

  // Trigger the transition after a brief delay
  setTimeout(() => {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 300);

  // Display current UTC time
  function updateUTC() {
    const currentTime = new Date().toISOString();
    document.getElementById(
      "current-time"
    ).textContent = `Current Time (UTC): ${currentTime}`;
  }

  // Update UTC time immediately
  updateUTC();

  // Optional: Update UTC time every second
  setInterval(updateUTC, 1000);
});

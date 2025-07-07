// Time display and timezone logic
const clockElement = document.getElementById("clock");
const timezoneSelect = document.getElementById("timezone");

if (timezoneSelect && clockElement) {
  function updateTime() {
    const tz = timezoneSelect.value;
    const now = new Date();
    const options = {
      timeZone: tz,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour12: true
    };
    clockElement.textContent = new Intl.DateTimeFormat('en-US', options).format(now);
  }

  timezoneSelect.addEventListener("change", () => {
    localStorage.setItem("selectedTimeZone", timezoneSelect.value);
    updateTime();
  });

  window.addEventListener("load", () => {
    const savedTZ = localStorage.getItem("selectedTimeZone") || "Africa/Nairobi";
    timezoneSelect.value = savedTZ;
    setInterval(updateTime, 1000);
    updateTime();
  });
}

// Dark mode toggle
const toggleButton = document.getElementById("darkModeToggle");

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("darkMode", mode);
  });

  // Load saved mode
  window.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "dark") {
      document.body.classList.add("dark-mode");
    }
  });
}

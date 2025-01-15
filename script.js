// Sound effects
const tickSound = new Audio('tick.mp3');  // Use a tick sound file
const chimeSound = new Audio('chime.mp3');  // Use a chime sound file

// Function to toggle night mode
function toggleTheme() {
  document.body.classList.toggle('night-mode');
}

// Function to update the clock size
function updateClockSize(size) {
  const clock = document.querySelector('.clock');
  clock.style.width = size + 'px';
  clock.style.height = size + 'px';
}

// Function to update the clock background color
function updateClockColor(color) {
  const clock = document.querySelector('.clock');
  clock.style.backgroundColor = color;
  clock.style.background = `radial-gradient(circle, ${color}, #e6e6e6)`;
}

// Function to update the clock hands color
function updateHandColor(color) {
  const hands = document.querySelectorAll('.hand');
  hands.forEach(hand => {
    hand.style.backgroundColor = color;
  });
}

// Function to update the clock
function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const day = now.toLocaleDateString();
  const dayOfWeek = now.toLocaleString('en-us', { weekday: 'long' });

  // Calculate rotation angles
  const hourRotation = (360 / 12) * (hours % 12) + (360 / 12) * (minutes / 60);
  const minuteRotation = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
  const secondRotation = (360 / 60) * seconds;

  // Set the rotation of the hands
  document.querySelector('.hour-hand').style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;
  document.querySelector('.minute-hand').style.transform = `translateX(-50%) rotate(${minuteRotation}deg)`;
  document.querySelector('.second-hand').style.transform = `translateX(-50%) rotate(${secondRotation}deg)`;

  // Update digital clock display
  const digitalClock = document.getElementById('digital-clock');
  digitalClock.textContent = now.toLocaleTimeString();

  // Update date and day
  const dateDay = document.getElementById('date-day');
  dateDay.textContent = `${dayOfWeek}, ${day}`;

  // Play ticking sound every second
  tickSound.play();

  // Play chime sound every hour
  if (seconds === 0 && minutes === 0) {
    chimeSound.play();
  }
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock
updateClock();

const stationList = document.getElementById('station-list');
const timingList = document.getElementById('timing-list');
const selectedTimeDisplay = document.getElementById('selected-time');
const highlightBtn = document.getElementById('highlight-btn');
const bookBtn = document.getElementById('book-btn');

let selectedStation = null;
let preferredTimings = [];

stationList.addEventListener('click', function(event) {
  const clickedItem = event.target;
  if (clickedItem.tagName === 'LI') {
    selectedStation = clickedItem.dataset.station;
    const timings = clickedItem.textContent.split('(')[1].split(')')[0];
    populateTimings(timings);
    timingList.querySelectorAll('li').forEach(item => item.classList.remove('selected'));
  }
});

timingList.addEventListener('click', function(event) {
  const clickedItem = event.target;
  if (clickedItem.tagName === 'LI') {
    timingList.querySelectorAll('li').forEach(item => item.classList.remove('selected'));
    clickedItem.classList.add('selected');
    selectedTimeDisplay.textContent = clickedItem.textContent;
  }
});

highlightBtn.addEventListener('click', function() {
  // Simulate user preference logic (replace with your logic)
  preferredTimings = ['12:00 PM', '1:00 PM'];
  timingList.querySelectorAll('li').forEach(item => {
    item.classList.remove('preferred');
    if (preferredTimings.indexOf(item.textContent) !== -1) {
      item.classList.add('preferred');
    }
  });
});

bookBtn.addEventListener('click', function() {
  // Simulate booking action (no functionality without backend)
  const message = `Appointment booked for ${selectedTimeDisplay.textContent} at Station ${selectedStation}!`;
  if (selectedStation && selectedTimeDisplay.textContent !== '-') {
    alert(message);
  } else {
    alert('Please select a station and time slot.');
  }
});

function populateTimings(timings) {
  timingList.innerHTML = '';
  const timeRange = timings.split(' - ');
}
const stationSelect = document.getElementById('station-select');
const bookedList = document.getElementById('booked-list');

stationSelect.addEventListener('change', function() {
  const selectedStation = stationSelect.value;
  bookedList.innerHTML = ''; // Clear previous bookings

  // Simulate fetching bookings from server (replace with actual data retrieval)
  const bookings = {
    station1: ['10:00 AM', '12:00 PM'],
    station2: ['11:00 AM', '1:00 PM']
  };

  if (selectedStation) {
    const stationBookings = bookings[selectedStation];
    if (stationBookings) {
      stationBookings.forEach(time => {
        const listItem = document.createElement('li');
        listItem.textContent = time;
        bookedList.appendChild(listItem);
      });
      document.querySelector('#bookings h2').textContent = `Booked Timings for: ${selectedStation}`;
    } else {
      document.querySelector('#bookings h2').textContent = 'No bookings for this station.';
    }
  } else {
    document.querySelector('#bookings h2').textContent = 'Booked Timings for: -';
  }
});

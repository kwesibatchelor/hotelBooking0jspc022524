/*document.addEventListener('DOMContentLoaded', function() {
    const availableCount = document.getElementById('available-count');
    const roomsBar = document.getElementById('rooms-bar');
    const bookBtn = document.getElementById('book-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    
    let availableRooms = 500;
  
    updateRoomsBar();
  
    bookBtn.addEventListener('click', () => {
      if (availableRooms > 0) {
        availableRooms--;
        updateRoomsBar();
      }
    });
  
    cancelBtn.addEventListener('click', () => {
      if (availableRooms < 500) {
        availableRooms++;
        updateRoomsBar();
      }
    });
  
    function updateRoomsBar() {
      const percentage = (availableRooms / 500) * 100;
      roomsBar.style.width = percentage + '%';
      availableCount.textContent = availableRooms;
    }
  });
  */
  document.addEventListener('DOMContentLoaded', function() {
    const availableCount = document.getElementById('available-count');
    const roomsBar = document.getElementById('rooms-bar');
    const selectedRoomsBar = document.getElementById('selected-rooms-bar');
    const bookBtn = document.getElementById('book-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    
    let availableRooms = 500;
    let selectedRooms = new Set();
  
    updateRoomsBar();
  
    bookBtn.addEventListener('click', () => {
      const roomNumber = prompt("Enter room number (1-500):");
      if (!roomNumber || isNaN(roomNumber) || roomNumber < 1 || roomNumber > 500) {
        alert("Please enter a valid room number (1-500).");
        return;
      }
      if (selectedRooms.has(roomNumber)) {
        alert("Room already booked.");
        return;
      }
      availableRooms--;
      selectedRooms.add(roomNumber);
      updateRoomsBar();
    });
  
    cancelBtn.addEventListener('click', () => {
      const roomNumber = prompt("Enter room number to cancel booking:");
      if (!roomNumber || isNaN(roomNumber) || roomNumber < 1 || roomNumber > 500) {
        alert("Please enter a valid room number (1-500).");
        return;
      }
      if (!selectedRooms.has(roomNumber)) {
        alert("Room not booked.");
        return;
      }
      availableRooms++;
      selectedRooms.delete(roomNumber);
      updateRoomsBar();
    });
  
    function updateRoomsBar() {
      const percentage = (availableRooms / 500) * 100;
      roomsBar.style.width = percentage + '%';
      availableCount.textContent = availableRooms;
  
      // Clear previous selections
      selectedRoomsBar.innerHTML = '';
  
      // Add selected rooms
      selectedRooms.forEach(roomNumber => {
        const room = document.createElement('div');
        room.classList.add('selected-room');
        room.textContent = roomNumber;
        selectedRoomsBar.appendChild(room);
      });
    }
  });
  
  

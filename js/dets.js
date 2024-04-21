// Simulating a logged-in user
const loggedInUser = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    location: 'New York, USA',
    profilePicture: 'https://via.placeholder.com/150'
  };
  
  // Updating the UI with user information
  document.getElementById('user-name').textContent = loggedInUser.name;
  document.getElementById('user-email').textContent = loggedInUser.email;
  document.getElementById('user-location').textContent = loggedInUser.location;
  document.getElementById('profile-picture').src = loggedInUser.profilePicture;
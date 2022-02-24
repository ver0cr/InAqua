const firebaseConfig = {
    apiKey: "AIzaSyDsHxQbdA3frafHvG5O6LEfBS2vgGjl2y0",
    authDomain: "inaqua2-9e4fd.firebaseapp.com",
    projectId: "inaqua2-9e4fd",
    storageBucket: "inaqua2-9e4fd.appspot.com",
    messagingSenderId: "635208619390",
    appId: "1:635208619390:web:3505fbe0aec585da0f8f2f",
    measurementId: "G-3XLN587HXP"
  };

  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message
  });
}
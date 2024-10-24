const submitBtn = document.getElementById('submit');
const dialogBtn = document.getElementById('dialog-button');
const dialog = document.getElementById('modal');
const input = document.getElementById('email');
const errorEmailSpan = document.getElementById('message-error');

submitBtn.addEventListener('click', (e) => {
    dialog.showModal();
    document.body.style.position = 'fixed'; // block scroll when modal is open
})

dialogBtn.addEventListener('click', (e) => {
    input.value = "";
    dialog.close();
    const scrollY = document.body.style.top;
    document.body.style.position = ''; // unblock scroll when modal is open
});

input.addEventListener('change', () => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
  if (input.value === '') {
    console.log('empty');
    errorEmailSpan.textContent = '';
    input.setAttribute('state', "empty");

  } else if (input.value.toLowerCase().match(emailRegex)) {    
    errorEmailSpan.textContent = '';    
    input.setAttribute('state', "isvalid");    
    console.log('isvalid');
  } else {    
    errorEmailSpan.textContent = 'Valid email required';    
    input.setAttribute('state', "error");
    console.log('error');
  }
})


const form = document.getElementById("form");

const handleSubmit = (e) => {
  e.preventDefault(e);
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  const emailMessage = document.getElementById('email-message');
  emailMessage.textContent = data['email'];
};

form.addEventListener("submit", handleSubmit);

// [ ] Handle the input error and update message an color of the input to error and valid state.
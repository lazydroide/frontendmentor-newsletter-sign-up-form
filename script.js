const submitBtn = document.getElementById('submit');
const dialogBtn = document.getElementById('dialog-button');
const dialog = document.getElementById('modal');
const input = document.getElementById('email');

submitBtn.addEventListener('click', (e) => {
    dialog.showModal();
})

dialogBtn.addEventListener('click', (e) => {
    input.value = "";
    dialog.close();
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
document.addEventListener('DOMContentLoaded', function () {
  const alertForm = document.getElementById('alertForm');
  const errorMessage = document.getElementById('errorMessage');

  alertForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const titleInput = document.getElementById('titleInput');
    const textInput = document.getElementById('textInput');

    const title = titleInput.value.trim();
    const text = textInput.value.trim();

    if (title !== '' && text !== '') {
      showAlert(title, text);
      alertForm.reset();
      errorMessage.textContent = ''; // Clear any previous error messages
    } else {
      errorMessage.textContent = 'Please fill in both title and text fields.';
    }
  });
});

function showAlert(title, text) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  const modalContent = document.createElement('div');
  modalContent.innerHTML = `
    <h2>${title}</h2>
    <p>${text}</p>
    <button class="button" onclick="hideAlert()">OK</button>
  `;

  document.body.appendChild(modal);
  document.body.appendChild(overlay);
  modal.appendChild(modalContent);

  modal.style.display = 'block';
  overlay.style.display = 'block';

  // Prevent clicks outside the modal
  overlay.addEventListener('click', function () {
    hideAlert();
  });
}


function hideAlert() {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');

  modal.style.display = 'none';
  overlay.style.display = 'none';

  modal.remove();
  overlay.remove();
}


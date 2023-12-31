function openPlayerConfig(e) {
  editedPlayer = +e.target.dataset.playerid;
  playerConfigOverlayEl.style.display = 'block';
  backdropEl.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayEl.style.display = 'none';
  backdropEl.style.display = 'none';
  formEl.firstElementChild.classList.remove('error');
  errorsOutputEl.textContent = '';
  formEl.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const enteredPlayername = formData.get('playername').trim();

  if (!enteredPlayername) {
    e.target.firstElementChild.classList.add('error');
    errorsOutputEl.textContent = 'Please enter a valid name!';
    return;
  }

  const updatedPlayerDataEl = document.getElementById('player-' + editedPlayer + '-data');
  updatedPlayerDataEl.children[1].textContent = enteredPlayername;

  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();

}
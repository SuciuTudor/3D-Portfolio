
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close');

window.openModal = function(src) {
  modal.classList.remove('hidden');
  modalImg.src = src;
};

closeBtn.onclick = function() {
  modal.classList.add('hidden');
};

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') modal.classList.add('hidden');
});

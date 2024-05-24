document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('addButton');
  const container = document.getElementById('container');

  addButton.addEventListener('click', () => {
    const newElement = document.createElement('div');
    newElement.textContent = 'New Element';

    container.appendChild(newElement);
  });
});

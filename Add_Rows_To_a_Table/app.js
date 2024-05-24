document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('addRowForm');
  const tableBody = document.querySelector('#dataTable tbody');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const topicName = document.getElementById('topicName').value;
    const weekNumber = document.getElementById('weekNumber').value;
    const description = document.getElementById('description').value;

    const newRow = document.createElement('tr');

    const topicNameCell = document.createElement('td');
    topicNameCell.textContent = topicName;
    newRow.appendChild(topicNameCell);

    const weekNumberCell = document.createElement('td');
    weekNumberCell.textContent = weekNumber;
    newRow.appendChild(weekNumberCell);

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = description;
    newRow.appendChild(descriptionCell);

    tableBody.appendChild(newRow);

    form.reset();
  });
});

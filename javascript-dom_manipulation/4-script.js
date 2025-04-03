document.getElementById('add_item').addEventListener('click', function () {
    const ulElement = document.querySelector('.my_list');
    const newItem = document.createElement('li');
    newItem.textContent = 'Item';
    ulElement.appendChild(newItem);
  });
  

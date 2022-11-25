function newItem() {

  let li = $("<li></li>");
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    let list = $('#list')
    list.append(li);
    li.on('dblclick', crossOut);
    let crossOutButton = $('<button>X</button>');
    li.append(crossOutButton);
    crossOutButton.on('click', deleteListItem);
  }

  function crossOut() {
    li.toggleClass('strike');
  }

  function deleteListItem() {
    li.addClass('delete');
  }

  $('#list').sortable();
}

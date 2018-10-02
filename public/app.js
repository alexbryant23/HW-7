$(function () {
  $('#more').on('click', function (event) {
    event.preventDefault();
    console.log("submit is working");
    const task = {
      ListName: $('#new-task').val().trim()
    };
    console.log(task, "this is the task");

    $.post('/add/List', task, function (res) {
      listRender(res);
    });
    $('#new-task').val('');
    $('#new-task').focus();

  });

})
readyList();

function readyList() {
  $.get('/List', function (req, res) {
    res.forEach((e, index) => {
      console.log(e + "   " + index);
      const listTag = $('<li>');
      const checkedbox = $('<input type="checkbox"/>');
      listTag.text(e.ListName);
      const button = $('<i type="submit" id="delete" class="fas fa-times"></i>');
      button.addClass('delete');
      button.attr('data-index', index);

      listTag.append(checkedbox);
      listTag.append(button);

      _addEventListener(button);
      $('#content').append(listTag);

    })

  });
}


// function todoList() {
//   const queryURL = window.location.origin + "/api/index";
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).done((data) => {
//     create(data)
//   })
// }

// todoList();

function listRender(newList) {
  // $.ajax("/api/List/", {
  //   type: "GET",
  //   data: task
  // }).then(
  //   function () {
  //     console.log("is working");
  //   })

  // $('#content').empty();
  newList.forEach((e, index) => {
    console.log(e + "   " + index);
    const listTag = $('<li>');
    const checkedbox = $('<input type="checkbox"/>');
    listTag.text(e.ListName);
    const button = $('<i type="submit" id="delete" class="fas fa-times"></i>');
    button.addClass('delete');
    button.attr('data-index', index);

    listTag.append(checkedbox);
    listTag.append(button);

    _addEventListener(button);
    $('#content').append(listTag);

  })

}



function _addEventListener(button) {
  console.log(button);
  let parent = $(button).parent();
  console.log(parent);
  let text = $(parent).text();
  console.log(text);
  $(button).on('click', function () {
    let deleteThis = {
      ListName: text
    }
    console.log(deleteThis);

    $.post('/delete/List', deleteThis, function (data) {
      console.log(data);
      listRender(data);
      location.reload();
    });
  });

}